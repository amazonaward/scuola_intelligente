# Libreria "Come funzionano le cose" – formato dei dati

La sezione `#/libreria` è fatta da:

- `js/library.js` – scena 3D **`model`** (`Mini3D.scenes.model`), pagine della libreria, testi dell'interfaccia (5 lingue);
- `css/library.css` – stile;
- `data/library/index.js` – **catalogo** (scaffali e oggetti);
- `data/library/<id>.js` – **scheda** di un oggetto (modello 3D, passo passo, curiosità, quiz).

I file si caricano solo quando servono (`Z.loadScript`), quindi funzionano anche aprendo il sito da `file://`.

## Aggiungere un oggetto (checklist)

1. Nel catalogo trova la voce (es. `lampadina`, ora `status: 'coming'`) o creane una nuova.
2. Crea `data/library/<id>.js` che chiama `LIBRARY({...})` (formato sotto).
3. Nel catalogo metti `status: 'ready'` e `year` (classe consigliata).
4. Controlla: `node --check data/library/<id>.js`, poi apri `#/libreria/<id>`:
   ruota, esplodi, tocca ogni pezzo, scorri tutti i passi, fai il quiz. Nessun errore in console.

## Catalogo: `data/library/index.js`

```js
LIBRARY_INDEX({
  shelves: [ { id: 'casa', emoji: '🏠', color: '#4c7cf3', name: { it, en, fr, ru, ro } }, … ],
  items: [
    { id: 'computer', emoji: '🖥️', shelf: 'casa', status: 'ready',   // 'ready' | 'coming'
      year: 'p2',                                                     // facoltativo: classe consigliata (p1…m3)
      tags: 'pc cpu ram …',                                           // parole extra per la ricerca
      name: { it: 'Il computer', en: 'The computer', fr: '…', ru: '…', ro: '…' },
      topics: ['p2-tec-computer', …],                                 // id delle lezioni in data/curriculum.js
      langs: ['en'] }                                                 // facoltativo: traduzioni in data/library/<lang>/<id>.js
  ]
});
```

Le voci `coming` appaiono come carte "in arrivo" e aprono una pagina con le lezioni collegate.
I progressi si salvano nello Store con id `lib:<id>` (visita, "Ho capito", quiz) e compaiono nello storico.

## Scheda: `data/library/<id>.js`

I testi delle schede sono in **italiano** (se manca la traduzione, l'interfaccia lo segnala).
Il file è JavaScript: si possono usare funzioni e cicli per generare pezzi ripetuti (tasti, pale, celle…).
Racchiudi tutto in `(function () { … })();` per non creare variabili globali.

```js
LIBRARY({
  id: 'computer',
  title: 'Il computer',
  intro: 'HTML breve',
  model: { /* opzioni della scena model, vedi sotto */ parts: [ … ] },
  steps: [ { icon: '🔌', title: '…', html: '<p>…</p><p class="tip">…</p>', focus: ['alimentatore'], explode: 0.3,
             loop: [0, 0.25], play: true, view: { rx: 0.3, ry: -0.5 }, zoom: 1.2 } ],
  facts: [ { icon: '🦋', title: '…', html: '…' } ],            // "Lo sapevi?" (3–4)
  quiz:  [ /* domande nel formato di CONTENUTI.md (mc, tf, num, text, order) */ ]
});
```

### Passi (`steps`) – guidano il modello

| campo | effetto |
|---|---|
| `focus` | id dei pezzi da mettere in evidenza; gli altri diventano trasparenti (con ≤ 6 pezzi i nomi compaiono anche sui telefoni) |
| `explode` | 0–1, quanto smontare il modello |
| `loop` | `[da, a]` frazioni del ciclo (`model.cycle`): l'animazione ripete solo quel tratto (es. un tempo del motore) |
| `play` | `false` ferma le animazioni |
| `view` | `{ rx, ry }` gira la telecamera (radianti; `rx` = inclinazione, `ry` = giro intorno all'asse verticale) |
| `zoom` | ingrandimento (1 = normale) |
| `html` | spiegazione; `<p class="tip">` = riquadro giallo |

## Scena 3D `model`

Riutilizzabile anche nelle lezioni:

```js
{ type: '3d', scene: 'model', options: { object: 'motore-scoppio', steps: true } }   // carica la scheda della libreria
{ type: '3d', scene: 'model', options: { parts: [ … ], bg: 'space' } }              // modello scritto nella lezione
```

### Opzioni del modello

| opzione | default | significato |
|---|---|---|
| `parts` | – | elenco dei pezzi (8–20 consigliati) |
| `rx`, `ry` | 0.32, −0.55 | vista iniziale |
| `height` | 460 | altezza massima del canvas (px) |
| `fit` | 1 | moltiplicatore dell'adattamento automatico allo spazio |
| `speed` | 0.5 | giri al secondo dell'orologio delle animazioni (a ×1) |
| `cycle` | 1 | lunghezza del ciclo in giri (motore a 4 tempi: 2) |
| `phases` | – | `[ { from, to, label, color } ]` frazioni del ciclo: etichette in alto che si accendono a turno |
| `bg` | chiaro | `space`, `orbit` (spazio + Terra), `sky`, `sea`, `body` |
| `floor` | true | ombra a terra (non nei fondali scuri) |
| `labels` | auto | nomi sui pezzi (di default accesi sugli schermi larghi) |
| `explode` | 0 | esplosione iniziale |
| `play` | true | animazioni partite |
| `auto` | false | rotazione automatica lenta |

Comandi per l'utente: trascina per ruotare, rotella/pizzico per lo zoom, **tocca un pezzo** (pannello con
spiegazione, "Per saperne di più" aperto per le medie, "Mostra solo questo pezzo"), chip dei pezzi,
cursore **Esplodi**, ▶/⏸, velocità, nomi, 🎯 rimetti a posto, ⛶ schermo intero (Esc per uscire).

### Pezzo (`parts[]`)

```js
{ id: 'cpu', name: 'CPU (processore)', label: 'CPU',      // label = nome corto sul modello (facoltativo)
  color: '#cbd5e1', alpha: 1,                              // colore e opacità di default delle forme
  pos: [x, y, z], rot: [gx, gy, gz], scale: 1 | [sx, sy, sz],   // rot in GRADI (ordine X, poi Y, poi Z)
  explode: [dx, dy, dz],                                   // spostamento a esplosione piena
  info: '<p>per i bambini</p>', more: '<p>per i più grandi</p>',
  anim: { … } | [ … ],                                     // animazione dell'intero pezzo
  shapes: [ … ],                                           // forme
  anchor: [x, y, z],                                       // punto dell'etichetta (default: centro)
  noLabel: true, chip: false, zBias: 0 }                   // opzioni rare
```

Unità libere (il modello viene centrato e scalato da solo). **y è l'alto.** Per i solidi trasparenti
(case di vetro, pelle del razzo, camere del cuore) usa `alpha` 0.2–0.55: si vede l'interno.
Colori realistici (metalli `#9ca3af`/`#d1d5db`, plastica scura `#1f2937`, rame `#b45309`…).

### Forme (`shapes[]`)

Campi comuni: `t` (tipo), `pos`, `rot` (gradi), `scale`, `color`, `alpha`, `anim`, `smooth`, `ds` (doppia faccia, per gusci aperti),
`decal: 1|2|3` (adesivi/schermi appoggiati su una faccia: disegnati dopo, nell'ordine del numero).

| `t` | parametri | note |
|---|---|---|
| `box` | `s: [w, h, d]` | facce grandi suddivise in automatico (`cell`, `div`) |
| `cyl` | `r`, `r2` (raggio in alto), `h`, `n`, `open`, `phase` | asse y; `n: 6` = prisma esagonale |
| `cone` | `r`, `h`, `n` | punta in alto (+y) |
| `tube` | `r`, `ri`, `h`, `n` | cilindro cavo (anelli, cilindri del motore) |
| `sphere` | `r`, `n`, `m`, `hemi` | ellissoidi con `scale`; `hemi: true` = mezza sfera con base |
| `torus` | `R`, `r`, `n`, `m`, `arc` (gradi) | anello nel piano XZ |
| `extrude` | `pts: [[x, y], …]`, `d` | poligono nel piano XY estruso lungo z (anche concavo) |
| `wedge` | `s: [w, h, d]` | cuneo (triangolo rettangolo estruso) |
| `lathe` | `pts: [[r, y], …]`, `n`, `caps`, `ds` | profilo che ruota intorno a y (serbatoi, ugelli, scafi, parabole) |
| `pipe` | `pts: [[x, y, z], …]`, `r`, `n`, `curve`, `caps` | tubo lungo una linea 3D; `curve: true` la addolcisce (vasi, cavi) |
| `disc` | come `cyl` con `h` 0.02 | |
| `group` | `shapes: [ … ]` | raggruppa; con `anim` anima tutto il gruppo (es. le pale di una ventola) |

### Animazioni (`anim`)

Un oggetto o un array (le trasformazioni si combinano in ordine). Campi comuni:
`rate` (moltiplica la velocità), `phase` (sfasamento in giri), `pivot: [x, y, z]` (centro, nel sistema del pezzo/gruppo).

| `type` | parametri | uso |
|---|---|---|
| `spin` | `axis: 'x'│'y'│'z'│[x,y,z]`, `dir: ±1` | eliche, ventole, alberi |
| `swing` | `axis`, `amp` (gradi), `base` | timoni, valvole, pannelli che oscillano |
| `move` | `dir: [x,y,z]`, `amp` | periscopio, valvole |
| `scale` | `from`, `to`, `axis: 'xyz'│'y'…` | battito, acqua che riempie (usa `win` per la finestra) |
| `piston` | `r`, `l`, `dir` | pistone esatto (manovella r, biella l) |
| `rod` | `r`, `l` | biella: segue il pistone e oscilla (origine = spinotto) |
| `chamber` | `r`, `l`, `h0` | volume tra testa e pistone (forma alta 1, sotto l'origine) |
| `path` | `pts: [[x,y,z], …]` | segue un percorso (gocce di sangue); con `wave: 'saw'` |
| `blink` | `color`, `amount`, `fade`, `min` | cambia colore / appare e scompare (scintille, LED, fiamme) |

**Onde** (`wave`): `sin` (−1…1, default di move/swing), `sin01` (0…1, default di blink/scale), `tri`, `saw`, `rsaw`, `square`,
`window` con `from`, `to` (frazioni del ciclo, anche "a cavallo" tipo `from: 0.6, to: 0.2`), `ramp`, `cycle`.
Per `scale` la finestra si scrive `win: [da, a]` (perché `from`/`to` sono i valori della scala).

Esempio – valvola che si apre solo nel primo tempo di un ciclo di 2 giri:
```js
anim: { type: 'move', dir: [0, -1, 0], amp: 0.11, wave: 'window', from: 0, to: 0.25, cycle: 2, ramp: 0.3 }
```

### Disegno

I solidi opachi passano da `Mini3D._.drawFaces` (il motore condiviso: se diventa WebGL, i modelli ne approfittano);
le superfici trasparenti vengono disegnate sopra, dalla più lontana. Le facce lisce (`cyl`, `sphere`, `lathe`, `pipe`…)
sono segnate `kind: 'side'`. Usa abbastanza segmenti (`n` 24–36) per le forme curve in vista.

### API (per chi programma)

`Mini3D.mount(host, 'model', opts)` restituisce la vista con `v.model`:
`select(id)`, `showOnly(id|null)`, `setExplode(0–1)`, `setFocus([ids]|null)`, `setLoop([a,b]|null)`,
`setPlaying(bool)`, `setView({rx, ry, zoom})`, `applyStep(step)`, `reset()`.
Callback: `opts.onSelect(id)`, `opts.onStep(index, allSeen)`; `opts.ui = { chips, panel }` sposta chip e pannello in altri contenitori.
`window.Library` espone `loadCatalog()`, `loadObject(id)`, `mountSteps(host, steps, api)`, `primitives`.
