QBANK("fr", "l1-spa-presentarse", {
  f: [
    { type: "mc", q: "Comment dit-on « Bonjour » (le matin) en espagnol ?", options: ["Buenas noches", "Buenos días", "Hasta luego"], answer: 1, explain: "Buenos días est la salutation du matin." },
    { type: "tf", q: "En espagnol, la lettre h se prononce toujours.", answer: false, explain: "Le h est toujours muet : hola se prononce « ola »." },
    { type: "mc", q: "Choisis l'article : ___ casa.", options: ["el", "la", "los"], answer: 1, explain: "Casa est féminin singulier : la casa." },
    { type: "text", q: "Complète : Yo ___ italiano (ser).", answer: ["soy"], explain: "1re personne du singulier de ser : soy." },
    { type: "mc", q: "Comment demande-t-on son prénom à un ami ?", options: ["¿Cómo te llamas?", "¿Cuántos años tienes?", "¿De dónde vives?"], answer: 0, explain: "¿Cómo te llamas? = comment t'appelles-tu ?" }
  ],
  m: [
    { type: "mc", q: "Maria ___ en la biblioteca ahora mismo.", options: ["es", "está", "tiene"], answer: 1, explain: "La position s'exprime avec estar." },
    { type: "text", q: "Écris le pluriel de « el lápiz ».", answer: ["los lápices"], explain: "Les mots en -z passent à -ces : lápiz → lápices." },
    { type: "mc", q: "Quel pronom utilises-tu avec un adulte inconnu ?", options: ["tú", "usted", "nosotros"], answer: 1, explain: "Usted est la forme de politesse." },
    { type: "tf", q: "« Tengo hambre » signifie « j'ai faim ».", answer: true, explain: "En espagnol, la faim s'exprime avec tener, comme « avoir » en français." },
    { type: "order", q: "Remets dans l'ordre : « Je suis de Milan et j'ai seize ans ».", items: ["Soy", "de Milán", "y", "tengo", "dieciséis años"], explain: "Soy de Milán y tengo dieciséis años." }
  ],
  d: [
    { type: "mc", q: "Quelle phrase signifie « Mon ami s'ennuie en ce moment » ?", options: ["Mi amigo es aburrido", "Mi amigo está aburrido", "Mi amigo tiene aburrido"], answer: 1, explain: "Estar + adjectif = état passager ; avec ser, cela voudrait dire « c'est une personne ennuyeuse »." },
    { type: "mc", q: "Quel est l'article correct pour « agua » au singulier ?", options: ["la", "el", "los"], answer: 1, explain: "Les noms féminins commençant par un a accentué prennent el au singulier : el agua." },
    { type: "tf", q: "En espagnol, « embarazada » signifie « embarrassée ».", answer: false, explain: "Embarazada signifie enceinte : c'est un faux ami." },
    { type: "text", q: "Comment dit-on « Enchanté » quand on te présente quelqu'un ? (deux mots qui commencent par m.)", answer: ["mucho gusto"], explain: "Mucho gusto (ou encantado/a) est la formule habituelle." },
    { type: "mc", q: "Quel accent est correct pour distinguer « tu » (pronom) de « ton » (possessif) ?", options: ["tu = pronom", "tú = pronom", "tù = pronom"], answer: 1, explain: "Tú avec tilde est le pronom ; tu sans accent est l'adjectif possessif." }
  ]
});
