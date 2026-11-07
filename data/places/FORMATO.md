# Storia dei luoghi – formato dei dati

La sezione `#/luoghi` (codice in `js/places.js`, stile in `css/places.css`) legge tre tipi di file,
tutti caricati al bisogno con `Z.loadScript` (funziona anche aprendo il sito da `file://`).

| file | contenuto |
|---|---|
| `data/places/index.js` | catalogo di tutti i luoghi: `PLACES_CATALOG([...])` |
| `data/places/empires.js` | estensioni approssimate di Stati e imperi: `PLACE_EMPIRES({...})` |
| `data/places/<id>.js` | la storia di un luogo: `PLACE({...})` |

## 1. Catalogo (`index.js`)

```js
{ id: 'piemonte', kind: 'region', parent: 'italia', flag: '🏔️', ready: true, eras: 18,
  n: ['Piemonte', 'Piedmont', 'Piémont', 'Пьемонт', 'Piemont'],   // it, en, fr, ru, ro
  lat: 45.05, lon: 7.9,                                            // centro (per etichette e "luogo più vicino")
  poly: [[6.63, 45.12], [7.0, 45.9], …] }                          // contorno [lon, lat]
```

- `kind`: `area` (continenti/sub-continenti) · `country` · `region` · `city`.
- `parent`: il luogo che lo contiene (`torino → piemonte → italia → europa`). Le aree non hanno parent.
- Contorno: `poly` (un anello `[[lon, lat], …]` oppure più anelli `[[[…]], [[…]]]` per le isole) oppure `box: [ovest, sud, est, nord]`.
  Le città non hanno contorno: si toccano vicino al punto quando il globo è molto ingrandito.
  I contorni sono grossolani: servono a capire che cosa ha toccato il bambino. Se due contorni si sovrappongono vince il luogo
  più "profondo" (città > regione > Paese > area) e, a parità, quello più piccolo.
- `ready: true` + `eras: N` solo se esiste `data/places/<id>.js` con N epoche.
- **Fallback**: un luogo senza storia mostra quella del primo antenato con `ready: true` (città → regione → Paese → area).
  Se nessun antenato è pronto compare la pagina "storia in preparazione".

## 2. Storia di un luogo (`<id>.js`)

```js
PLACE({
  id: 'piemonte',                                   // uguale all'id del catalogo
  names: { it: 'Piemonte', en: 'Piedmont', fr: 'Piémont', ru: 'Пьемонт', ro: 'Piemont' },
  intro: 'Testo introduttivo (HTML).',
  start: -300000,                                   // facoltativo: inizio della barra del tempo (default: from della prima epoca)
  focus: { torino: '<p>…</p>' },                    // facoltativo: testo extra quando si arriva da una città figlia
  bands: [ { name: 'Papato', from: 752, to: 1870, color: '#facc15' } ],   // facoltativo: altre righe in "Chi governava qui"
  sections: [ /* facoltativo: blocchi come nelle lezioni (text, quiz, 3d, conceptMap…) */ ],
  eras: [
    { from: -28, to: 395,                           // anni: negativi = a.C.; to: 9999 = oggi
      ruler: 'Roma',                                // chi governava (diventa una riga del grafico "Chi governava qui")
      color: '#dc2626',                             // colore dell'epoca (barra del tempo, grafico, mappa)
      title: 'Augusta Taurinorum: il Piemonte romano',
      html: '<p>Che cosa succede (2–4 frasi).</p>',
      life: '<p>Come si viveva.</p>',
      why: '<p>Perché è andata così (cause).</p>',
      events: [ { year: -28, text: 'Fondazione di Augusta Taurinorum.' } ],   // anni dentro l'epoca
      lessons: ['p5-sto-romani'],                   // id delle lezioni in data/curriculum.js (storia: contengono "-sto-")
      extent: 'roma-117' }                          // facoltativo, vedi sotto
  ]
});
```

Regole:
- Epoche in ordine, **contigue** (`to` di una = `from` della successiva), dalla preistoria a oggi; 12–19 epoche vanno bene.
- Testi in italiano, frasi brevi adatte a 8–13 anni; il campo `why` spiega le cause, non solo i fatti.
- Il quiz in fondo alla pagina è **generato automaticamente** da epoche, governanti ed eventi: non serve scriverlo.
- I progressi si salvano come `place:<id>` (visite, epoche esplorate, quiz); quando tutte le epoche sono state viste il luogo risulta "studiato".

### `extent` (estensione dello Stato sulla mini-mappa)

- una chiave di `empires.js` (es. `'roma-117'`, `'ottomano-1683'`, `'ue'`);
- `'place:<id>'` per usare il contorno di un luogo del catalogo (es. `'place:italia'`);
- oppure un contorno scritto direttamente: `[[lon, lat], …]` o più anelli.

## 3. Estensioni (`empires.js`)

```js
PLACE_EMPIRES({ 'roma-117': { name: 'Impero romano', date: '117 d.C.', poly: [[-9.5, 37], …] } });
```
Sulla mappa le estensioni sono **ritagliate sulla terraferma**, quindi il contorno può passare liberamente sul mare:
basta non includere terre che non appartenevano allo Stato. Chiavi disponibili: `egitto-nuovo-regno, greci-colonie,
persiano-achemenide, macedone, cartagine, roma-italia, roma-repubblica, roma-117, roma-occidente, bizantino-555, bizantino-1000,
ostrogoti, longobardi, arabi-750, arabi-sicilia, carolingio, sacro-romano-impero, normanni, aragona, spagna-asburgo, venezia,
savoia-1720, savoia-1815, asburgo-1815, napoleone-1812, regno-italia, due-sicilie, stato-chiesa, ottomano-1683, russo-1914,
urss, blocco-sovietico, romania-mare, moldavia-principato, daci, orda-oro, franchi-merovingi, mamelucchi, ue`.

## 4. Aggiungere un luogo

1. Se manca, aggiungilo al catalogo con contorno, `parent` e nomi nelle 5 lingue.
2. Crea `data/places/<id>.js` con `PLACE({...})`.
3. Nel catalogo metti `ready: true, eras: <numero di epoche>`.
4. Controlla: lezioni esistenti, epoche contigue, eventi dentro la loro epoca, `extent` esistenti.

## 5. Scena 3D per le lezioni: `placeGlobe`

`js/places.js` registra `Mini3D.scenes.placeGlobe`, usabile in qualunque lezione:

```js
{ type: '3d', scene: 'placeGlobe', options: { place: 'piemonte', extent: 'roma-117', color: '#dc2626', label: 'Augusta Taurinorum' } }
```
Mostra un globo (proiezione ortografica, trascinabile, zoom con rotella/pizzico) centrato sul luogo, con il luogo evidenziato
e, se indicata, l'estensione dello Stato. `extent` accetta anche `'place:<id>'`.
