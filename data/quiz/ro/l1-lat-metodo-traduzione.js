QBANK("ro", "l1-lat-metodo-traduzione", {
  f: [
    { type: "mc", q: "Unde se află de obicei verbul într-o propoziție latină?", options: ["La sfârșit", "La început", "După subiect"], answer: 0, explain: "Ordinea obișnuită este subiect – complemente – complement direct – verb." },
    { type: "tf", q: "În latină există articole hotărâte.", answer: false, explain: "Nu există articole: se adaugă în română." },
    { type: "mc", q: "Cum se traduce „et”?", options: ["și", "dar", "sau"], answer: 0, explain: "Et = și; sed = dar; aut = sau." },
    { type: "mc", q: "Ce se caută în dicționar?", options: ["Forma care apare în propoziție", "Lema (nominativul sau infinitivul)", "Ultima literă"], answer: 1, explain: "Se caută lema, pornind de la desinență." },
    { type: "mc", q: "Subiectul unei propoziții latine este la cazul…", options: ["nominativ", "acuzativ", "ablativ"], answer: 0, explain: "Nominativ, acordat cu verbul." }
  ],
  m: [
    { type: "mc", q: "Traduce: „Puella rosam amat”.", options: ["Fata iubește trandafirul", "Trandafirul iubește fata", "Fetele iubesc trandafirii"], answer: 0, explain: "Puella nom. sing.; rosam ac. sing.; amat pers. a III-a sing." },
    { type: "text", q: "Care este lema lui „servorum”? (nominativ singular)", answer: ["servus"], explain: "-orum = gen. plur. declinarea a II-a: servus, -i." },
    { type: "mc", q: "„Nam” se traduce…", options: ["deci", "căci", "și"], answer: 1, explain: "Nam = căci, într-adevăr; igitur = deci; etiam = și, de asemenea." },
    { type: "mc", q: "„Pueri puellaeque” înseamnă…", options: ["băieții și fetele", "băiatul fetei", "fetele băieților"], answer: 0, explain: "-que = și." },
    { type: "tf", q: "Verbul la mod personal indică câte propoziții sunt într-o frază.", answer: true, explain: "Fiecare verb la mod personal conduce o propoziție." }
  ],
  d: [
    { type: "mc", q: "Traduce: „Servi a dominis vocantur”.", options: ["Sclavii sunt chemați de stăpâni", "Sclavii îi cheamă pe stăpâni", "Stăpânii sunt chemați de sclavi"], answer: 0, explain: "Vocantur pasiv; a dominis = agent." },
    { type: "mc", q: "În „Reges milites vocant” care cuvânt este subiectul?", options: ["milites", "reges", "vocant"], answer: 1, explain: "Reges și milites au aceeași formă la plural; sensul (regii îi cheamă pe soldați) și ordinea cea mai naturală indică reges ca subiect." },
    { type: "mc", q: "„Nautae cum magna cura navigabant”: „cum magna cura” este…", options: ["tovărășie", "mod", "mijloc"], answer: 1, explain: "Cum + ablativ abstract: mod (cu mare grijă)." },
    { type: "text", q: "Care este lema lui „hostibus”? (nominativ singular)", answer: ["hostis"], explain: "-ibus: dat./abl. plural de declinarea a III-a; hostis, hostis." },
    { type: "mc", q: "De ce „leges” poate avea două analize?", options: ["Este și substantiv (legile), și verb (tu vei citi)", "Este o greșeală", "Doar pentru neutru"], answer: 0, explain: "Leges = nominativ/acuzativ plural de la lex sau pers. a II-a sing. a viitorului de la lego." }
  ]
});
