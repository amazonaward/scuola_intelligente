# 🎒 Zainetto · Scuola intelligente

Sito educativo per ragazzi **dalla 1ª elementare alla 3ª media**, con il programma diviso per anno secondo le
**Indicazioni nazionali 2025** (D.M. 221 del 9 dicembre 2025, in vigore dall'a.s. 2026/27 a partire dalle classi prime).

Funziona tutto nel browser: è un sito statico (HTML, CSS e JavaScript puro) senza server, database o librerie esterne,
ed è pubblicabile direttamente su **GitHub Pages**.

## Cosa c'è

- **Profili senza password**: ognuno sceglie nome, avatar, classe e lingua. Lo storico registra cosa è stato aperto,
  studiato, i quiz e le verifiche (con il miglior punteggio), i giorni di studio e le medaglie. I dati restano nel browser
  (`localStorage`); con **Salva backup / Carica backup** si spostano su un altro dispositivo.
- **5 lingue**: italiano, inglese, francese, russo, rumeno (interfaccia, programma, esercizi e lezioni).
- **Programma completo** per 8 anni e 8 materie: Italiano, Matematica, Scienze, Storia, Geografia, Inglese,
  Tecnologia e informatica (con IA), Latino facoltativo (LEL) in 2ª e 3ª media.
- **Lezioni complete** con:
  - spiegazioni a passi, esempi pratici, curiosità, illustrazioni;
  - **spiegazioni alternative** ("Altri modi per capirlo"), per esempio i metodi di moltiplicazione di Giappone/Cina, Russia, Egitto e la gelosia;
  - **mappe concettuali esplorabili** con il "perché": postulati, scoperte, chi e come;
  - **3D interattivo**: solidi, cubetti, Sistema Solare, globo con rotte, Terra e cellula a strati, atomo, molecole,
    **paesaggi da esplorare** (costa, isola, golfo, istmo…) e **mappe storiche spazio-tempo** con cause ed effetti;
  - **bivi storici** ("tu cosa avresti fatto?");
  - **laboratorio di chimica online**: reazioni, equazioni bilanciate, moli, reagente limitante, conservazione della massa;
  - mini-quiz, **verifica finale** ed **esercizi infiniti** generati automaticamente.

## Avviarlo in locale

```bash
python3 -m http.server 8000
# poi apri http://localhost:8000
```

## Pubblicare su GitHub Pages

Settings → Pages → *Deploy from a branch* → `main` / `(root)`.

## Aggiungere o tradurre una lezione

Le regole sono in [CONTENUTI.md](CONTENUTI.md). In breve:

1. crea `data/topics/it/<id>.js` (l'`id` deve esistere in `data/curriculum.js`);
2. aggiungi l'`id` all'elenco `full` del curriculum;
3. per tradurla copia il file in `data/topics/<lingua>/` e traduci i testi;
4. controlla tutto con `node scripts/check.js`.

## Struttura

```
index.html            pagina unica
css/style.css         stile
js/app.js             navigazione, pagine, profili, storico
js/quiz.js            quiz e verifiche
js/generators.js      esercizi generati automaticamente
js/mini3d*.js         motore 3D (canvas, senza librerie)
js/widgets.js         attività interattive, laboratorio di chimica, tavola periodica
js/i18n*.js           testi dell'interfaccia in 5 lingue
js/chemdata.js        elementi, sostanze e reazioni
js/geodata.js         contorni semplificati dei continenti
data/curriculum.js    programma per anno e materia
data/i18n/            traduzioni del programma
data/topics/<lingua>/ lezioni complete
scripts/check.js      validatore dei contenuti
```
