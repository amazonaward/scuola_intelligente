QBANK("ro", "l1-lat-alfabeto-pronuncia", {
  f: [
    { type: "mc", q: "Care literă NU există în alfabetul latin clasic?", options: ["H", "J", "X"], answer: 1, explain: "J (ca și U și W) nu există: I și V făceau dublă muncă." },
    { type: "tf", q: "În cuvintele latine de două silabe accentul cade pe prima.", answer: true, explain: "Cade mereu pe penultima, care într-un cuvânt de două silabe este prima: rósa, sérvus." },
    { type: "mc", q: "Care dintre acestea este un diftong latin?", options: ["ae", "ao", "ie"], answer: 0, explain: "Cei mai obișnuiți diftongi sunt ae, oe și au." },
    { type: "text", q: "Câte litere are alfabetul latin clasic? (număr)", answer: ["23", "douăzeci și trei", "douazeci si trei"], explain: "A B C D E F G H I K L M N O P Q R S T V X Y Z: douăzeci și trei de litere." },
    { type: "mc", q: "Cum se citește litera H în latină, în pronunția școlară?", options: ["Ca un h englezesc aspirat", "Rămâne mută", "Ca un c dur"], answer: 1, explain: "În lectura școlară h este mută: homo se citește „omo”." }
  ],
  m: [
    { type: "mc", q: "Cum se citește „Cicero” în pronunția școlară?", options: ["Kíkero", "Cícero (ca în „cină”)", "Sísero"], answer: 1, explain: "Școlară: c moale înaintea lui e, i: Cícero. Cea clasică ar da Kíkero." },
    { type: "text", q: "Împarte în silabe „terra” (cu cratime).", answer: ["ter-ra"], explain: "Două consoane identice între două vocale se despart: ter-ra." },
    { type: "mc", q: "Care este accentul lui „regina”?", options: ["régina", "regína", "reginá"], answer: 1, explain: "Re-gi-na: penultima gi este lungă (gī), deci regína." },
    { type: "tf", q: "Într-un cuvânt latin de trei silabe accentul poate cădea pe ultima.", answer: false, explain: "Ultima silabă a cuvintelor polisilabice nu poartă niciodată accentul." },
    { type: "mc", q: "O silabă cu vocală scurtă urmată de două consoane este…", options: ["scurtă", "lungă prin poziție", "mută"], answer: 1, explain: "Este lungă prin poziție, ca gis- în magíster." }
  ],
  d: [
    { type: "mc", q: "De ce „filia” se accentuează fília (pe antepenultima)?", options: ["Pentru că penultima li este scurtă (vocală înaintea unei vocale)", "Pentru că este feminin", "Pentru că se termină în -a"], answer: 0, explain: "Fi-li-a: i urmat de o vocală este scurt, deci accentul urcă pe antepenultima." },
    { type: "mc", q: "Cum se citește „Veni, vidi, vici” cu pronunția clasică?", options: ["Véni, vídi, víci", "Wéni, wídi, wíki", "Véni, vídi, víki"], answer: 1, explain: "Clasică: v = /w/ și c mereu /k/." },
    { type: "text", q: "Care cuvânt are accentul pe antepenultima: „dominus” sau „magister”? (un cuvânt)", answer: ["dominus"], explain: "Do-mi-nus: penultima mi este scurtă, deci dóminus. Magíster are penultima lungă prin poziție." },
    { type: "mc", q: "Ce diferență există între „mălum” și „mālum”?", options: ["Niciuna: sunt două grafii", "Cantitatea vocalei: răul / mărul", "Doar accentul"], answer: 1, explain: "Cantitatea distinge cuvintele: mălum = răul; mālum = mărul." },
    { type: "tf", q: "În „poëta” secvența „oe” este un diftong, iar cuvântul are două silabe.", answer: false, explain: "Cu trema vocalele sunt separate: po-ë-ta, trei silabe." }
  ]
});
