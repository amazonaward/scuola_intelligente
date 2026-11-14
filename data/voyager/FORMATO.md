# Spazio › Il viaggio delle Voyager (#/spazio/voyager) – formato dei testi

Pagina: `js/voyager.js` (mappa con le orbite vere calcolate da `Space.helio`, contatori in tempo reale, linea del tempo, quiz).
Testi: `data/voyager/text.<lang>.js` (it, en, fr, ru, ro, de), stessa struttura in tutte le lingue:

```js
VOYAGER_TEXT({
  lang: 'it',
  title: 'Il viaggio delle Voyager',
  intro: '<p>…</p>',
  probes: { v1: '<p>Voyager 1 in breve…</p>', v2: '<p>Voyager 2 in breve…</p>' },
  events: [                                   // in ordine di data; la mappa salta alla data quando si tocca l'evento
    { date: '1977-08-20', probe: 'v2',        // 'v1' | 'v2' | 'both'
      planet: 'jupiter',                      // facoltativo: jupiter | saturn | uranus | neptune
      icon: '🚀', title: '…', html: '<p>…</p>',
      photo: 'voyager io volcano' }           // facoltativo: parole per cercare la foto su images.nasa.gov (in inglese, uguali in tutte le lingue)
  ],
  sections: [ { icon: '📀', title: 'Il Disco d’oro', html: '<p>…</p>' }, … ],   // approfondimenti (4–6)
  quiz: [ /* formato di CONTENUTI.md */ ]
});
```
Le date degli eventi, `probe`, `planet` e `photo` sono uguali in tutte le lingue.
