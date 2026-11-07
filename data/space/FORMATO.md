# Sezione Spazio – formato dei dati

La sezione Spazio (`#/spazio`) è in `js/space.js` + `css/space.css`. I dati stanno in questa cartella e vengono
caricati solo quando servono con `Z.loadScript`, quindi funzionano anche da `file://`.

| File | Contenuto |
|---|---|
| `sistema.js` | Schede di Sole, pianeti, pianeti nani, lune, comete |
| `cielo.js` | Schede di stelle, nebulose e ammassi, galassie, buchi neri |
| `stars.js` | Catalogo stellare (≈ 176 stelle), nomi tradotti, costellazioni, Pleiadi |

## Percorsi

- `#/spazio` – viste 3D + catalogo
- `#/spazio/3d/<vista>[:<focus>]` – vista 3D aperta: `solare` (focus = id corpo, es. `saturn`, `titan`),
  `stelle` (focus = id stella del catalogo, es. `vega`), `cosmo` (focus = tappa: `earth`, `solar`, `oort`, `stars`, `mw`, `lg`, `uni`), `cielo`
- `#/spazio/<id>` – scheda di un oggetto

I progressi si salvano con `Store` usando l'id `space:<id>` (schede) e `space:3d-<vista>` (viste).

## Schede (`sistema.js`, `cielo.js`)

```js
window.SPACE_OBJECTS = (window.SPACE_OBJECTS || []).concat([
  { id: 'giove',            // id della pagina (#/spazio/giove), unico
    cat: 'planet',          // sun | planet | dwarf | moon | comet | star | nebula | galaxy | blackhole
    emoji: '🟠', color: '#d6a26b',
    name: ['Giove', 'Jupiter', 'Jupiter', 'Юпитер', 'Jupiter'],   // it, en, fr, ru, ro
    kind: 'Pianeta gigante gassoso',  // sottotitolo (italiano)
    lead: 'Frase d\'apertura.',
    facts: [['Diametro', '139.820 km'], …],    // tabella "Dati principali"
    html: '<p>Testo a passi, HTML semplice</p>',
    cur: ['Curiosità 1', …],
    quiz: [ /* domande nel formato di Quiz.render (vedi CONTENUTI.md) */ ],
    // aspetto 3D e collegamenti (facoltativi)
    body: 'jupiter',        // tipo di rendering nella testata (vedi sotto)
    sol: 'jupiter',         // id del corpo nella vista "Sistema Solare"
    star: 'vega',           // id della stella nel catalogo stars.js
    lg: 'm31',              // galassia del Gruppo Locale
    // dimensioni per il riquadro "Quanto è grande?"
    r: 69911,               // raggio in km (corpi del Sistema Solare; per le comete: raggio del nucleo)
    rs: 1.71, temp: 9940,   // stelle: raggio in raggi solari, temperatura in K
    dly: 152000,            // nebulose e galassie: diametro in anni luce
    massSun: 4.3e6,         // buchi neri: massa in masse solari (l'orizzonte si calcola da qui)
    distLy: 2500000, sky: ['00 42 44', '+41 16 09']  // facoltativi, informativi
  }
]);
```

Tipi di `body`: `sun`, `star` (colore da `temp`), `mercury`, `venus`, `earth`, `moon`, `mars`, `jupiter`, `saturn`,
`uranus`, `neptune`, `pluto`, `ceres`, `eris`, `haumea`, `makemake`, `io`, `europa`, `ganymede`, `callisto`, `titan`,
`enceladus`, `triton`, `comet`, `comet67p`, `comet-sl9`, `neb-orion`, `neb-crab`, `neb-ring`, `neb-pillars`, `pleiades`,
`gal-mw`, `gal-m31`, `gal-m33`, `gal-lmc`, `gal-smc`, `gal-m51`, `gal-m104`, `bh-sgra`, `bh-m87`, `bh-x1`, `bh-dormant`.
Le superfici di pianeti e lune sono texture procedurali (la Terra usa i contorni di `js/geodata.js`);
nebulose, galassie, buchi neri e comete sono illustrazioni (lo dice un'etichetta nella vista).

## Catalogo stellare (`stars.js`)

```js
window.SPACE_STARS = {
  list: [ ['vega', 'Vega', '18 36 56.3', '+38 47 01', 25.0, 0.03, 'A0V', 'α Lyr', 'Lyr'], … ],
  //       id      nome   RA (h m s)    Dec (° ′ ″)   dist (al)  mag V  tipo  sigla   costellazione
  ru: { vega: 'Вега', … },                 // nomi in cirillico
  names: { sirio: { en: 'Sirius', … } },   // nomi diversi in altre lingue
  constellations: [ { id: 'Lyr', n: [it, en, fr, ru, ro], lines: [['vega', 'zeta1-lyr'], …] } ],
  pleiades: [ ['Alcione', '03 47 29.1', '+24 06 18', 2.87], … ]
};
```

Le coordinate sono J2000. Ogni stella usata in `lines` deve esistere in `list`. Le linee delle costellazioni
uniscono le vere posizioni 3D: viste dalla Terra sono corrette, viste da lontano si deformano.
Distanze delle supergiganti (Betelgeuse, Deneb, Rigel…) sono incerte e arrotondate.

## Scene 3D registrate (`Mini3D.scenes`)

Montabili anche da una lezione con un blocco `{ type: '3d', scene: …, options: … }` (`js/space.js` deve essere caricato):

- `spaceSolar` – Sistema Solare con orbite vere (elementi JPL J2000 con variazioni secolari, validi ~1800–2050;
  Cerere, Eris e Haumea da elementi medi), lune principali, anelli di Saturno, fascia degli asteroidi, troiani,
  fascia di Kuiper (particelle illustrative), data e animazione, dimensioni reali. `options: { focus: 'saturn' }`.
- `spaceStars` – stelle del catalogo in 3D (anni luce), costellazioni, volo verso una stella, cielo visto da un'altra stella.
  `options: { focus: 'vega' }`.
- `spaceCosmos` – zoom continuo Terra → Sistema Solare → Nube di Oort → stelle vicine → Via Lattea → Gruppo Locale →
  Universo osservabile, con barra di scala. La Via Lattea e la rete cosmica sono procedurali (illustrazione);
  le galassie del Gruppo Locale sono nelle posizioni vere (l, b, distanza). `options: { stage: 'mw' }`.
- `spaceSky` – planetario: città, data e ora, stelle, costellazioni, pianeti, Sole, Luna con la fase, Via Lattea.
- `spaceBody` – un oggetto da vicino. `options: { type: 'saturn' }` o `{ type: 'star', temp: 3600, rs: 760 }`.

Le stelline di sfondo puntiformi (non toccabili) sono decorative; tutti gli oggetti toccabili sono reali.
