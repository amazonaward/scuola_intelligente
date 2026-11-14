# Il corpo umano (#/corpo) – formato dei dati

- `js/body.js` – pagina della sezione (visualizzatore 3D, apparati, scheda dell'organo, legami, quiz). Usa la scena 3D `model` della Libreria (`Mini3D.mount(host, 'model', …)`, vedi `data/library/FORMATO.md` per pezzi, forme e animazioni).
- `css/body.css` – stile.
- `data/body/model.js` – **geometria** (uguale per tutte le lingue): `BODY_MODEL({ systems, parts, options })`.
- `data/body/text.<lang>.js` – **testi** in una lingua (`it`, `en`, `fr`, `ru`, `ro`, `de`): `BODY_TEXT({ … })`.

## Organi (id fissi, usati sia nel modello sia nei testi)

| apparato (id) | organi (id) |
|---|---|
| `pelle` | pelle |
| `scheletro` | cranio, colonna, costole, bacino, ossa_braccia, ossa_gambe |
| `muscoli` | muscoli, diaframma |
| `nervoso` | cervello, cervelletto, midollo, nervi |
| `sensi` | occhi, orecchie, naso, lingua |
| `circolatorio` | cuore, arterie, vene |
| `respiratorio` | naso, trachea, polmoni, diaframma |
| `digerente` | lingua, esofago, stomaco, fegato, cistifellea, pancreas, intestino_tenue, intestino_crasso |
| `urinario` | reni, vescica |
| `endocrino` | tiroide, surrenali, pancreas |
| `immunitario` | milza, timo, linfonodi |

Un organo può stare in più apparati (pancreas, diaframma, naso, lingua).

## Geometria: `data/body/model.js`

Sistema di riferimento: unità ≈ centimetri, **y in alto**, piedi a y = 0, cima della testa a y ≈ 170.
**x** = verso la sinistra della persona (+x = lato sinistro del corpo: cuore leggermente a +x, fegato a −x),
**z** = verso davanti (la persona guarda verso +z). Corpo di un ragazzo/adulto stilizzato, proporzioni realistiche.

```js
BODY_MODEL({
  systems: [ { id: 'scheletro', emoji: '🦴', color: '#e5e7eb' }, … ],   // ordine di presentazione
  options: { rx: 0.15, ry: -0.5, height: 620, bg: 'body', floor: false }, // opzioni della scena model
  parts: [
    { id: 'cuore', systems: ['circolatorio'], color: '#dc2626', alpha: 1,
      pos: [x, y, z], explode: [dx, dy, dz], anchor: [x, y, z],
      shapes: [ … ], anim: { … } }                                       // come nella Libreria
  ]
});
```
`name`, `label`, `info`, `more` dei pezzi NON stanno qui: li aggiunge `js/body.js` dai testi.
La pelle è un guscio semitrasparente (alpha ≈ 0.15–0.2); muscoli semitrasparenti (≈ 0.35) così si vedono gli organi.
`explode` allontana i pezzi in modo leggibile (organi in avanti/di lato, scheletro dietro, pelle e muscoli lontani).

## Testi: `data/body/text.<lang>.js`

```js
BODY_TEXT({
  lang: 'it',
  title: 'Il corpo umano', intro: 'HTML breve',
  ui: { … }                      // NON serve: i testi dell'interfaccia sono in js/body.js
  systems: { scheletro: { name: 'Lo scheletro', intro: '<p>…</p>' }, … },
  organs: {
    cuore: {
      name: 'Il cuore', label: 'Cuore',                 // label = nome corto sul modello
      what: '<p>A cosa serve (per i bambini, 2–3 frasi)</p>',
      how: '<p>Come funziona (per i più grandi, 3–6 frasi)</p>',
      links: [ { to: 'polmoni', text: 'Manda il sangue ai polmoni a prendere ossigeno.' }, … ],   // 2–5 legami
      problems: [ { title: 'Infarto', causes: 'fumo, colesterolo, sedentarietà…', effects: 'una parte del cuore resta senza ossigeno…', prevent: 'movimento, cibo sano, niente fumo' } ],  // 1–3
      fact: 'Curiosità breve'
    }, …
  },
  tour: [ { icon: '🫀', title: '…', html: '<p>…</p>', focus: ['cuore', 'arterie', 'vene'], explode: 0.2 } ],  // visita guidata (6–10 passi)
  quiz: [ /* domande nel formato di CONTENUTI.md (mc, tf, num, text, order) */ ]
});
```
