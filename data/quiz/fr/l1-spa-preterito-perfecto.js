QBANK("fr", "l1-spa-preterito-perfecto", {
  f: [
    { type: "mc", q: "Yo ___ (hablar) con mi profesor hoy.", options: ["he hablado", "has hablado", "ha hablado"], answer: 0, explain: "Yo → he + participe." },
    { type: "text", q: "Écris le participe de « comer ».", answer: ["comido"], explain: "Comer → comido." },
    { type: "tf", q: "Le perfecto se forme avec haber + participe.", answer: true, explain: "C'est la règle de base." },
    { type: "mc", q: "Participe de « hacer » :", options: ["hacido", "hecho", "hacho"], answer: 1, explain: "Hacer → hecho." },
    { type: "mc", q: "Quel marqueur s'emploie avec le perfecto ?", options: ["hoy", "ayer", "el año pasado"], answer: 0, explain: "Hoy est une période non terminée." }
  ],
  m: [
    { type: "mc", q: "Nosotros ___ (salir) de casa a las ocho.", options: ["han salido", "hemos salido", "hemos salidado"], answer: 1, explain: "Nosotros → hemos + salido." },
    { type: "text", q: "Comment dit-on « j'ai vu » (ver) ? Écris : he ___.", answer: ["visto", "he visto"], explain: "Ver → visto (irrégulier)." },
    { type: "tf", q: "« Hemos llegadas » est correct quand on parle de filles.", answer: false, explain: "Avec haber, le participe ne s'accorde pas : hemos llegado." },
    { type: "mc", q: "¿Has terminado? – No, ___ no.", options: ["todavía", "ya", "siempre"], answer: 0, explain: "Todavía no = pas encore." },
    { type: "order", q: "Remets dans l'ordre : « Aujourd'hui, j'ai écrit un e-mail ».", items: ["Hoy", "he escrito", "un correo"], explain: "Hoy he escrito un correo." }
  ],
  d: [
    { type: "mc", q: "Participe de « romper » :", options: ["rompido", "roto", "rupto"], answer: 1, explain: "Romper → roto." },
    { type: "text", q: "Écris le participe de « creer » avec l'accent.", answer: ["creído", "creido"], explain: "Creer → creído." },
    { type: "tf", q: "En espagnol, on peut dire « soy ido », comme « je suis allé » en français.", answer: false, explain: "L'auxiliaire est toujours haber : he ido." },
    { type: "mc", q: "Quelle est la forme correcte avec un pronom ?", options: ["Lo he visto", "He lo visto", "He visto lo"], answer: 0, explain: "Le pronom se place avant haber." },
    { type: "mc", q: "Quelle phrase est correcte en Espagne ?", options: ["Ayer he comido paella", "Ayer comí paella", "Ayer como paella"], answer: 1, explain: "Ayer → indefinido : comí." }
  ]
});
