/* Libreria "Come funzionano le cose" (#/libreria)
   1) scena 3D `model` (Mini3D.scenes.model): oggetti fatti di PEZZI costruiti con primitive,
      esplosione, selezione al tocco, animazioni, "mostra solo", etichette.
   2) pagine: scaffali con ricerca e scheda oggetto (modello 3D, passo passo, curiosità, quiz, lezioni collegate).
   Formato dei dati: data/library/FORMATO.md */
(function () {
  'use strict';
  const TAU = Math.PI * 2, DEG = Math.PI / 180;
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const mod = (a, b) => ((a % b) + b) % b;
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const smooth = (x) => x * x * (3 - 2 * x);
  const arr = (x) => (x == null ? [] : Array.isArray(x) ? x : [x]);

  /* ======================= TESTI (6 lingue) ======================= */
  const TXT = {
    it: {
      'lib.title': 'Come funzionano le cose', 'lib.subtitle': 'Ruota, smonta e guarda dentro gli oggetti in 3D. Tocca un pezzo per scoprire a cosa serve!',
      'lib.search': 'Cerca un oggetto…', 'lib.none': 'Nessun oggetto trovato. Prova con un\'altra parola.', 'lib.all': 'Tutti',
      'lib.coming': 'In arrivo', 'lib.comingText': 'Questa scheda è in preparazione: presto potrai smontarla in 3D! Intanto puoi studiare le lezioni collegate.',
      'lib.ready': '{n} da esplorare', 'lib.soon': '{n} in arrivo', 'lib.count': '{n} oggetti',
      'lib.steps': 'Come funziona, passo passo', 'lib.step': 'Passo {i} di {n}', 'lib.prev': 'Indietro', 'lib.next': 'Avanti',
      'lib.facts': 'Lo sapevi?', 'lib.quiz': 'Mettiti alla prova', 'lib.related': 'Lo studi anche a scuola', 'lib.sameShelf': 'Sullo stesso scaffale',
      'lib.done': 'Ho capito come funziona!', 'lib.doneOk': 'Capito ✓', 'lib.parts': 'I pezzi', 'lib.nParts': '{n} pezzi',
      'lib.tapPart': 'Tocca un pezzo del modello o un nome qui sotto.', 'lib.more': 'Per saperne di più',
      'lib.only': 'Mostra solo questo pezzo', 'lib.showAll': 'Mostra tutto', 'lib.explode': 'Esplodi', 'lib.labels': 'Nomi',
      'lib.anim': 'Animazione', 'lib.reset': 'Rimetti a posto', 'lib.full': 'Schermo intero', 'lib.close': 'Chiudi',
      'lib.italian': 'Le spiegazioni di questa scheda sono in italiano.', 'lib.back': 'Tutta la libreria', 'lib.loading': 'Sto aprendo la scheda…',
      'lib.notFound': 'Oggetto non trovato.', 'lib.level': 'dalla {y}', 'lib.again': 'Ricomincia', 'lib.seen': 'Visto', 'lib.studied': 'Capito'
    },
    en: {
      'lib.title': 'How things work', 'lib.subtitle': 'Rotate, take apart and look inside objects in 3D. Tap a part to find out what it does!',
      'lib.search': 'Search an object…', 'lib.none': 'No object found. Try another word.', 'lib.all': 'All',
      'lib.coming': 'Coming soon', 'lib.comingText': 'This page is being prepared: soon you will be able to take it apart in 3D! Meanwhile you can study the related lessons.',
      'lib.ready': '{n} to explore', 'lib.soon': '{n} coming soon', 'lib.count': '{n} objects',
      'lib.steps': 'How it works, step by step', 'lib.step': 'Step {i} of {n}', 'lib.prev': 'Back', 'lib.next': 'Next',
      'lib.facts': 'Did you know?', 'lib.quiz': 'Test yourself', 'lib.related': 'You also study it at school', 'lib.sameShelf': 'On the same shelf',
      'lib.done': 'I understand how it works!', 'lib.doneOk': 'Understood ✓', 'lib.parts': 'The parts', 'lib.nParts': '{n} parts',
      'lib.tapPart': 'Tap a part of the model or a name below.', 'lib.more': 'Learn more',
      'lib.only': 'Show only this part', 'lib.showAll': 'Show everything', 'lib.explode': 'Explode', 'lib.labels': 'Names',
      'lib.anim': 'Animation', 'lib.reset': 'Put back', 'lib.full': 'Full screen', 'lib.close': 'Close',
      'lib.italian': 'The explanations on this page are in Italian.', 'lib.back': 'Whole library', 'lib.loading': 'Opening the page…',
      'lib.notFound': 'Object not found.', 'lib.level': 'from {y}', 'lib.again': 'Start again', 'lib.seen': 'Seen', 'lib.studied': 'Understood'
    },
    fr: {
      'lib.title': 'Comment ça marche', 'lib.subtitle': 'Tourne, démonte et regarde à l\'intérieur des objets en 3D. Touche une pièce pour découvrir à quoi elle sert !',
      'lib.search': 'Cherche un objet…', 'lib.none': 'Aucun objet trouvé. Essaie un autre mot.', 'lib.all': 'Tous',
      'lib.coming': 'Bientôt', 'lib.comingText': 'Cette fiche est en préparation : bientôt tu pourras la démonter en 3D ! En attendant, tu peux étudier les leçons liées.',
      'lib.ready': '{n} à explorer', 'lib.soon': '{n} bientôt', 'lib.count': '{n} objets',
      'lib.steps': 'Comment ça marche, étape par étape', 'lib.step': 'Étape {i} sur {n}', 'lib.prev': 'Retour', 'lib.next': 'Suivant',
      'lib.facts': 'Le savais-tu ?', 'lib.quiz': 'Teste-toi', 'lib.related': 'Tu l\'étudies aussi à l\'école', 'lib.sameShelf': 'Sur la même étagère',
      'lib.done': 'J\'ai compris comment ça marche !', 'lib.doneOk': 'Compris ✓', 'lib.parts': 'Les pièces', 'lib.nParts': '{n} pièces',
      'lib.tapPart': 'Touche une pièce du modèle ou un nom ci-dessous.', 'lib.more': 'Pour en savoir plus',
      'lib.only': 'Montrer seulement cette pièce', 'lib.showAll': 'Tout montrer', 'lib.explode': 'Éclater', 'lib.labels': 'Noms',
      'lib.anim': 'Animation', 'lib.reset': 'Remettre en place', 'lib.full': 'Plein écran', 'lib.close': 'Fermer',
      'lib.italian': 'Les explications de cette fiche sont en italien.', 'lib.back': 'Toute la bibliothèque', 'lib.loading': 'J\'ouvre la fiche…',
      'lib.notFound': 'Objet introuvable.', 'lib.level': 'dès la {y}', 'lib.again': 'Recommencer', 'lib.seen': 'Vu', 'lib.studied': 'Compris'
    },
    ru: {
      'lib.title': 'Как это устроено', 'lib.subtitle': 'Вращай, разбирай и заглядывай внутрь предметов в 3D. Нажми на деталь, чтобы узнать, зачем она нужна!',
      'lib.search': 'Найти предмет…', 'lib.none': 'Ничего не найдено. Попробуй другое слово.', 'lib.all': 'Все',
      'lib.coming': 'Скоро', 'lib.comingText': 'Эта карточка готовится: скоро её можно будет разобрать в 3D! А пока изучи связанные уроки.',
      'lib.ready': '{n} можно изучить', 'lib.soon': '{n} скоро', 'lib.count': 'предметов: {n}',
      'lib.steps': 'Как это работает, шаг за шагом', 'lib.step': 'Шаг {i} из {n}', 'lib.prev': 'Назад', 'lib.next': 'Дальше',
      'lib.facts': 'А ты знал?', 'lib.quiz': 'Проверь себя', 'lib.related': 'Это изучают и в школе', 'lib.sameShelf': 'На той же полке',
      'lib.done': 'Я понял, как это работает!', 'lib.doneOk': 'Понятно ✓', 'lib.parts': 'Детали', 'lib.nParts': 'деталей: {n}',
      'lib.tapPart': 'Нажми на деталь модели или на название внизу.', 'lib.more': 'Узнать больше',
      'lib.only': 'Показать только эту деталь', 'lib.showAll': 'Показать всё', 'lib.explode': 'Разобрать', 'lib.labels': 'Названия',
      'lib.anim': 'Анимация', 'lib.reset': 'Собрать обратно', 'lib.full': 'Во весь экран', 'lib.close': 'Закрыть',
      'lib.italian': 'Объяснения на этой странице на итальянском языке.', 'lib.back': 'Вся библиотека', 'lib.loading': 'Открываю карточку…',
      'lib.notFound': 'Предмет не найден.', 'lib.level': 'с класса: {y}', 'lib.again': 'Сначала', 'lib.seen': 'Просмотрено', 'lib.studied': 'Понятно'
    },
    ro: {
      'lib.title': 'Cum funcționează lucrurile', 'lib.subtitle': 'Rotește, desfă și privește în interiorul obiectelor în 3D. Atinge o piesă ca să afli la ce folosește!',
      'lib.search': 'Caută un obiect…', 'lib.none': 'Niciun obiect găsit. Încearcă alt cuvânt.', 'lib.all': 'Toate',
      'lib.coming': 'În curând', 'lib.comingText': 'Fișa este în pregătire: în curând o vei putea desface în 3D! Între timp poți studia lecțiile legate.',
      'lib.ready': '{n} de explorat', 'lib.soon': '{n} în curând', 'lib.count': '{n} obiecte',
      'lib.steps': 'Cum funcționează, pas cu pas', 'lib.step': 'Pasul {i} din {n}', 'lib.prev': 'Înapoi', 'lib.next': 'Înainte',
      'lib.facts': 'Știai că?', 'lib.quiz': 'Pune-te la încercare', 'lib.related': 'Îl studiezi și la școală', 'lib.sameShelf': 'Pe același raft',
      'lib.done': 'Am înțeles cum funcționează!', 'lib.doneOk': 'Am înțeles ✓', 'lib.parts': 'Piesele', 'lib.nParts': '{n} piese',
      'lib.tapPart': 'Atinge o piesă a modelului sau un nume de mai jos.', 'lib.more': 'Ca să afli mai mult',
      'lib.only': 'Arată doar această piesă', 'lib.showAll': 'Arată tot', 'lib.explode': 'Desfă', 'lib.labels': 'Nume',
      'lib.anim': 'Animație', 'lib.reset': 'Pune la loc', 'lib.full': 'Ecran complet', 'lib.close': 'Închide',
      'lib.italian': 'Explicațiile din această fișă sunt în italiană.', 'lib.back': 'Toată biblioteca', 'lib.loading': 'Deschid fișa…',
      'lib.notFound': 'Obiect negăsit.', 'lib.level': 'din {y}', 'lib.again': 'Ia de la capăt', 'lib.seen': 'Văzut', 'lib.studied': 'Înțeles'
    },
    de: {
      'lib.title': 'Wie funktioniert das?', 'lib.subtitle': 'Drehe Gegenstände in 3D, nimm sie auseinander und schau hinein. Tippe auf ein Teil, um herauszufinden, wofür es da ist!',
      'lib.search': 'Einen Gegenstand suchen…', 'lib.none': 'Kein Gegenstand gefunden. Probier ein anderes Wort.', 'lib.all': 'Alle',
      'lib.coming': 'Bald da', 'lib.comingText': 'Diese Karte wird gerade vorbereitet: Bald kannst du sie in 3D auseinandernehmen! In der Zwischenzeit kannst du die passenden Lektionen lernen.',
      'lib.ready': '{n} zum Entdecken', 'lib.soon': '{n} bald da', 'lib.count': '{n} Gegenstände',
      'lib.steps': 'So funktioniert es, Schritt für Schritt', 'lib.step': 'Schritt {i} von {n}', 'lib.prev': 'Zurück', 'lib.next': 'Weiter',
      'lib.facts': 'Wusstest du schon?', 'lib.quiz': 'Teste dich selbst', 'lib.related': 'Das lernst du auch in der Schule', 'lib.sameShelf': 'Im selben Regal',
      'lib.done': 'Ich habe verstanden, wie es funktioniert!', 'lib.doneOk': 'Verstanden ✓', 'lib.parts': 'Die Teile', 'lib.nParts': '{n} Teile',
      'lib.tapPart': 'Tippe auf ein Teil des Modells oder auf einen Namen unten.', 'lib.more': 'Mehr erfahren',
      'lib.only': 'Nur dieses Teil zeigen', 'lib.showAll': 'Alles zeigen', 'lib.explode': 'Auseinanderziehen', 'lib.labels': 'Namen',
      'lib.anim': 'Animation', 'lib.reset': 'Zusammensetzen', 'lib.full': 'Vollbild', 'lib.close': 'Schließen',
      'lib.italian': 'Die Erklärungen auf dieser Karte sind auf Italienisch.', 'lib.back': 'Ganze Bibliothek', 'lib.loading': 'Die Karte wird geöffnet…',
      'lib.notFound': 'Gegenstand nicht gefunden.', 'lib.level': 'ab {y}', 'lib.again': 'Neu beginnen', 'lib.seen': 'Angesehen', 'lib.studied': 'Verstanden'
    }
  };
  for (const l of Object.keys(TXT)) I18N[l] = Object.assign(I18N[l] || {}, TXT[l]);

  /* ======================= MATEMATICA (matrici affini 3×4) ======================= */
  const Mx = {
    id: () => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    mul(a, b) {
      return [
        a[0] * b[0] + a[1] * b[4] + a[2] * b[8], a[0] * b[1] + a[1] * b[5] + a[2] * b[9], a[0] * b[2] + a[1] * b[6] + a[2] * b[10], a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3],
        a[4] * b[0] + a[5] * b[4] + a[6] * b[8], a[4] * b[1] + a[5] * b[5] + a[6] * b[9], a[4] * b[2] + a[5] * b[6] + a[6] * b[10], a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7],
        a[8] * b[0] + a[9] * b[4] + a[10] * b[8], a[8] * b[1] + a[9] * b[5] + a[10] * b[9], a[8] * b[2] + a[9] * b[6] + a[10] * b[10], a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11]];
    },
    t: (x, y, z) => [1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z],
    s: (x, y, z) => [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0],
    rx(a) { const c = Math.cos(a), s = Math.sin(a); return [1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0]; },
    ry(a) { const c = Math.cos(a), s = Math.sin(a); return [c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0]; },
    rz(a) { const c = Math.cos(a), s = Math.sin(a); return [c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0]; },
    axis(ax, a) {
      if (ax === 'x') return Mx.rx(a); if (ax === 'y' || ax == null) return Mx.ry(a); if (ax === 'z') return Mx.rz(a);
      let [x, y, z] = ax; const m = Math.hypot(x, y, z) || 1; x /= m; y /= m; z /= m;
      const c = Math.cos(a), s = Math.sin(a), k = 1 - c;
      return [c + x * x * k, x * y * k - z * s, x * z * k + y * s, 0, y * x * k + z * s, c + y * y * k, y * z * k - x * s, 0, z * x * k - y * s, z * y * k + x * s, c + z * z * k, 0];
    },
    euler(r) { return Mx.mul(Mx.rz((r[2] || 0) * DEG), Mx.mul(Mx.ry((r[1] || 0) * DEG), Mx.rx((r[0] || 0) * DEG))); },
    ap(m, p) { return [m[0] * p[0] + m[1] * p[1] + m[2] * p[2] + m[3], m[4] * p[0] + m[5] * p[1] + m[6] * p[2] + m[7], m[8] * p[0] + m[9] * p[1] + m[10] * p[2] + m[11]]; },
    det(m) { return m[0] * (m[5] * m[10] - m[6] * m[9]) - m[1] * (m[4] * m[10] - m[6] * m[8]) + m[2] * (m[4] * m[9] - m[5] * m[8]); },
    pivot(m, p) { return p ? Mx.mul(Mx.t(p[0], p[1], p[2]), Mx.mul(m, Mx.t(-p[0], -p[1], -p[2]))) : m; }
  };
  function trs(o) {
    let m = Mx.t(...(o.pos || [0, 0, 0]).concat([0, 0, 0]).slice(0, 3));
    if (o.rot) m = Mx.mul(m, Mx.euler(o.rot));
    if (o.scale != null) { const s = typeof o.scale === 'number' ? [o.scale, o.scale, o.scale] : o.scale; m = Mx.mul(m, Mx.s(s[0], s[1], s[2])); }
    return m;
  }
  function newell(p) {
    let x = 0, y = 0, z = 0;
    for (let i = 0; i < p.length; i++) { const a = p[i], b = p[(i + 1) % p.length]; x += (a[1] - b[1]) * (a[2] + b[2]); y += (a[2] - b[2]) * (a[0] + b[0]); z += (a[0] - b[0]) * (a[1] + b[1]); }
    return [x, y, z];
  }

  /* ======================= PRIMITIVE ======================= */
  /* ogni primitiva restituisce facce { pts, hint (direzione verso l'esterno), sm (liscia) } nel proprio sistema locale */
  const ringPt = (r, y, a) => [r * Math.cos(a), y, r * Math.sin(a)];
  const PRIM = {
    box(o) {
      const [w, h, d] = o.s || o.size || [1, 1, 1]; const x = w / 2, y = h / 2, z = d / 2;
      const cell = o.cell || 0.45, dv = (L) => Math.max(1, Math.min(6, o.div || Math.ceil(L / cell)));
      const F = [];
      /* ogni faccia grande è divisa in riquadri: l'ordinamento in profondità diventa più affidabile */
      const face = (o0, u, v, nu, nv, n) => {
        for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) {
          const P = (a, b) => [o0[0] + u[0] * a / nu + v[0] * b / nv, o0[1] + u[1] * a / nu + v[1] * b / nv, o0[2] + u[2] * a / nu + v[2] * b / nv];
          F.push({ pts: [P(i, j), P(i + 1, j), P(i + 1, j + 1), P(i, j + 1)], hint: n });
        }
      };
      face([-x, -y, -z], [w, 0, 0], [0, h, 0], dv(w), dv(h), [0, 0, -1]);
      face([-x, -y, z], [w, 0, 0], [0, h, 0], dv(w), dv(h), [0, 0, 1]);
      face([-x, -y, -z], [w, 0, 0], [0, 0, d], dv(w), dv(d), [0, -1, 0]);
      face([-x, y, -z], [w, 0, 0], [0, 0, d], dv(w), dv(d), [0, 1, 0]);
      face([-x, -y, -z], [0, h, 0], [0, 0, d], dv(h), dv(d), [-1, 0, 0]);
      face([x, -y, -z], [0, h, 0], [0, 0, d], dv(h), dv(d), [1, 0, 0]);
      return F;
    },
    cyl(o) {
      const r = o.r != null ? o.r : 0.5, r2 = o.r2 != null ? o.r2 : r, h = o.h != null ? o.h : 1, n = o.n || 24, F = []; const sm = n >= 10;
      const a0 = o.phase ? o.phase * DEG : 0;
      for (let i = 0; i < n; i++) {
        const a = a0 + (i / n) * TAU, b = a0 + ((i + 1) / n) * TAU, m = (a + b) / 2;
        const pts = r2 > 0 ? [ringPt(r, -h / 2, a), ringPt(r, -h / 2, b), ringPt(r2, h / 2, b), ringPt(r2, h / 2, a)] : [ringPt(r, -h / 2, a), ringPt(r, -h / 2, b), [0, h / 2, 0]];
        if (r <= 0) pts.splice(0, 2, [0, -h / 2, 0]);
        F.push({ pts, hint: [Math.cos(m), (r - r2) / (h || 1), Math.sin(m)], sm });
      }
      if (!o.open) {
        if (r > 0) F.push({ pts: Array.from({ length: n }, (_, i) => ringPt(r, -h / 2, a0 + (i / n) * TAU)), hint: [0, -1, 0] });
        if (r2 > 0) F.push({ pts: Array.from({ length: n }, (_, i) => ringPt(r2, h / 2, a0 + (i / n) * TAU)), hint: [0, 1, 0] });
      }
      return F;
    },
    cone(o) { return PRIM.cyl(Object.assign({}, o, { r2: 0 })); },
    tube(o) {
      const r = o.r || 0.5, ri = o.ri != null ? o.ri : r * 0.8, h = o.h || 1, n = o.n || 24, F = [];
      for (let i = 0; i < n; i++) {
        const a = (i / n) * TAU, b = ((i + 1) / n) * TAU, m = (a + b) / 2, c = [Math.cos(m), 0, Math.sin(m)];
        F.push({ pts: [ringPt(r, -h / 2, a), ringPt(r, -h / 2, b), ringPt(r, h / 2, b), ringPt(r, h / 2, a)], hint: c, sm: true });
        F.push({ pts: [ringPt(ri, -h / 2, a), ringPt(ri, -h / 2, b), ringPt(ri, h / 2, b), ringPt(ri, h / 2, a)], hint: [-c[0], 0, -c[2]], sm: true });
        F.push({ pts: [ringPt(r, h / 2, a), ringPt(r, h / 2, b), ringPt(ri, h / 2, b), ringPt(ri, h / 2, a)], hint: [0, 1, 0], sm: true });
        F.push({ pts: [ringPt(r, -h / 2, a), ringPt(r, -h / 2, b), ringPt(ri, -h / 2, b), ringPt(ri, -h / 2, a)], hint: [0, -1, 0], sm: true });
      }
      return F;
    },
    sphere(o) {
      const r = o.r || 0.5, la = o.n || 10, lo = o.m || la * 2, top = o.hemi ? la / 2 : la, F = [];
      const p = (i, j) => { const th = (i / la) * Math.PI, ph = (j / lo) * TAU; return [r * Math.sin(th) * Math.cos(ph), r * Math.cos(th), r * Math.sin(th) * Math.sin(ph)]; };
      for (let i = 0; i < top; i++) for (let j = 0; j < lo; j++) {
        const pts = [p(i, j), p(i, j + 1), p(i + 1, j + 1), p(i + 1, j)];
        if (i === 0) pts.splice(0, 1); else if (i === la - 1) pts.splice(3, 1);
        const c = p(i + 0.5, j + 0.5); F.push({ pts, hint: c, sm: true });
      }
      if (o.hemi) F.push({ pts: Array.from({ length: lo }, (_, j) => p(top, j)), hint: [0, -1, 0] });
      return F;
    },
    torus(o) {
      const R = o.R || 0.5, r = o.r || 0.12, n = o.n || 24, m = o.m || 8, arc = (o.arc || 360) * DEG, F = [];
      const p = (i, j) => { const a = (i / n) * arc, b = (j / m) * TAU; const q = R + r * Math.cos(b); return [q * Math.cos(a), r * Math.sin(b), q * Math.sin(a)]; };
      for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) {
        const c = p(i + 0.5, j + 0.5), a = ((i + 0.5) / n) * arc; const cc = [R * Math.cos(a), 0, R * Math.sin(a)];
        F.push({ pts: [p(i, j), p(i + 1, j), p(i + 1, j + 1), p(i, j + 1)], hint: [c[0] - cc[0], c[1], c[2] - cc[2]], sm: true });
      }
      if (arc < TAU - 1e-6) {
        F.push({ pts: Array.from({ length: m }, (_, j) => p(0, j)), hint: [0, 0, -1] });
        F.push({ pts: Array.from({ length: m }, (_, j) => p(n, j)), hint: [-Math.sin(arc), 0, Math.cos(arc)] });
      }
      return F;
    },
    extrude(o) {
      let P = (o.pts || [[0, 0], [1, 0], [0, 1]]).slice(); const d = o.d != null ? o.d : 0.2, F = [];
      let area = 0; for (let i = 0; i < P.length; i++) { const a = P[i], b = P[(i + 1) % P.length]; area += a[0] * b[1] - b[0] * a[1]; }
      if (area < 0) P.reverse();
      F.push({ pts: P.map(([x, y]) => [x, y, d / 2]), hint: [0, 0, 1] });
      F.push({ pts: P.map(([x, y]) => [x, y, -d / 2]), hint: [0, 0, -1] });
      for (let i = 0; i < P.length; i++) {
        const a = P[i], b = P[(i + 1) % P.length];
        F.push({ pts: [[a[0], a[1], -d / 2], [b[0], b[1], -d / 2], [b[0], b[1], d / 2], [a[0], a[1], d / 2]], hint: [b[1] - a[1], -(b[0] - a[0]), 0], sm: o.smooth });
      }
      return F;
    },
    wedge(o) { const [w, h, d] = o.s || [1, 1, 1]; return PRIM.extrude({ pts: [[-w / 2, -h / 2], [w / 2, -h / 2], [-w / 2, h / 2]], d }); },
    lathe(o) {
      const P = o.pts || [[0.5, 0], [0.5, 1]], n = o.n || 24, F = [];
      const pt = (i, j) => ringPt(P[i][0], P[i][1], (j / n) * TAU);
      for (let i = 0; i < P.length - 1; i++) {
        const dr = P[i + 1][0] - P[i][0], dy = P[i + 1][1] - P[i][1];
        if (P[i][0] <= 0 && P[i + 1][0] <= 0) continue;
        for (let j = 0; j < n; j++) {
          const m = ((j + 0.5) / n) * TAU; const pts = [pt(i, j), pt(i, j + 1), pt(i + 1, j + 1), pt(i + 1, j)];
          if (P[i][0] <= 0) pts.splice(0, 1); else if (P[i + 1][0] <= 0) pts.splice(2, 1);
          F.push({ pts, hint: [dy * Math.cos(m), -dr, dy * Math.sin(m)], sm: true });
        }
      }
      if (o.caps !== false && !o.ds) {
        const L = P.length - 1;
        if (P[0][0] > 0) F.push({ pts: Array.from({ length: n }, (_, j) => pt(0, j)), hint: [0, -Math.sign(P[1][1] - P[0][1] || 1), 0] });
        if (P[L][0] > 0) F.push({ pts: Array.from({ length: n }, (_, j) => pt(L, j)), hint: [0, Math.sign(P[L][1] - P[L - 1][1] || 1), 0] });
      }
      return F;
    },
    /* tubo che segue una linea 3D (cavi, vasi sanguigni, condotti); curve: true la rende morbida */
    pipe(o) {
      let P = o.pts || [[0, 0, 0], [0, 1, 0]]; const r = o.r || 0.08, n = o.n || 10, F = [];
      if (o.curve && P.length > 2) {
        const Q = []; const g = (i) => P[clamp(i, 0, P.length - 1)];
        for (let i = 0; i < P.length - 1; i++) for (let k = 0; k < 6; k++) {
          const t = k / 6, a = g(i - 1), b = g(i), c = g(i + 1), d = g(i + 2), t2 = t * t, t3 = t2 * t;
          Q.push([0, 1, 2].map((q) => 0.5 * (2 * b[q] + (-a[q] + c[q]) * t + (2 * a[q] - 5 * b[q] + 4 * c[q] - d[q]) * t2 + (-a[q] + 3 * b[q] - 3 * c[q] + d[q]) * t3)));
        }
        Q.push(P[P.length - 1]); P = Q;
      }
      const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]], nrm = (v) => { const m = Math.hypot(v[0], v[1], v[2]) || 1; return [v[0] / m, v[1] / m, v[2] / m]; };
      const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
      const T = P.map((p, i) => nrm(sub(P[Math.min(i + 1, P.length - 1)], P[Math.max(i - 1, 0)])));
      let N = Math.abs(T[0][1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
      const rings = P.map((p, i) => {
        const t = T[i]; let u = nrm(cross(N, t)); const w = cross(t, u); N = w;
        return Array.from({ length: n }, (_, j) => { const a = (j / n) * TAU, c = Math.cos(a) * r, s = Math.sin(a) * r; return [p[0] + u[0] * c + w[0] * s, p[1] + u[1] * c + w[1] * s, p[2] + u[2] * c + w[2] * s]; });
      });
      for (let i = 0; i < P.length - 1; i++) for (let j = 0; j < n; j++) {
        const pts = [rings[i][j], rings[i][(j + 1) % n], rings[i + 1][(j + 1) % n], rings[i + 1][j]];
        const c = pts.reduce((s, q) => [s[0] + q[0] / 4, s[1] + q[1] / 4, s[2] + q[2] / 4], [0, 0, 0]); const m = [(P[i][0] + P[i + 1][0]) / 2, (P[i][1] + P[i + 1][1]) / 2, (P[i][2] + P[i + 1][2]) / 2];
        F.push({ pts, hint: sub(c, m), sm: true });
      }
      if (o.caps !== false) { F.push({ pts: rings[0].slice(), hint: T[0].map((x) => -x) }); F.push({ pts: rings[P.length - 1].slice(), hint: T[P.length - 1] }); }
      return F;
    }
  };
  PRIM.disc = (o) => PRIM.cyl(Object.assign({ h: 0.02 }, o));

  /* ======================= COSTRUZIONE DEI NODI ======================= */
  /* un "nodo" ha una matrice statica (local), animazioni e facce nel proprio sistema; i figli animati sono nodi a parte */
  function emit(node, s, m, st) {
    const fn = PRIM[s.t]; if (!fn) { console.warn('model: primitiva sconosciuta', s.t); return; }
    const flip = Mx.det(m) < 0;
    for (const f of fn(s)) {
      let pts = f.pts; const n = newell(pts);
      if (n[0] * f.hint[0] + n[1] * f.hint[1] + n[2] * f.hint[2] < 0) pts = pts.slice().reverse();
      pts = pts.map((p) => Mx.ap(m, p)); if (flip) pts.reverse();
      node.faces.push({ p: pts, col: st.color, a: st.alpha, sm: f.sm || st.smooth, ds: st.ds || s.t === 'pipe' && s.caps === false, edge: st.edges, decal: st.decal });
    }
  }
  function addChildren(node, list, acc, style) {
    for (const s of list) {
      const st = { color: s.color || style.color, alpha: s.alpha != null ? s.alpha : style.alpha, ds: s.ds != null ? s.ds : style.ds, smooth: s.smooth != null ? s.smooth : style.smooth, edges: s.edges != null ? s.edges : style.edges, decal: s.decal || style.decal };
      const m = Mx.mul(acc, trs(s));
      if (s.anim) { const k = { local: m, anims: arr(s.anim), faces: [], kids: [] }; node.kids.push(k); placeShape(k, s, Mx.id(), st); }
      else placeShape(node, s, m, st);
    }
  }
  function placeShape(node, s, m, st) { if (s.t === 'group' || !s.t) addChildren(node, s.shapes || [], m, st); else emit(node, s, m, st); }
  function buildPart(def, i) {
    const root = { local: trs(def), anims: arr(def.anim), faces: [], kids: [] };
    addChildren(root, def.shapes || [], Mx.id(), { color: def.color || '#94a3b8', alpha: def.alpha != null ? def.alpha : 1, ds: false, smooth: false, edges: def.edges !== false });
    return { def, i, id: def.id || 'p' + i, root, explode: def.explode || [0, 0, 0], rgb: hexRgb(def.color || '#94a3b8') };
  }

  /* ======================= ANIMAZIONI ======================= */
  function wave(a, u, def, model) {
    switch (a.wave || def) {
      case 'sin': return Math.sin(TAU * u);
      case 'sin01': return (1 - Math.cos(TAU * u)) / 2;
      case 'tri': { const f = mod(u, 1); return f < 0.5 ? f * 2 : 2 - f * 2; }
      case 'saw': return mod(u, 1);
      case 'rsaw': return 1 - mod(u, 1);
      case 'square': return mod(u, 1) < 0.5 ? 1 : 0;
      case 'window': {
        const c = a.cycle || model.cycle || 1, f = mod(u, c) / c, w = a.win || (a.type === 'scale' ? [0, 0.5] : [a.from || 0, a.to != null ? a.to : 0.5]), from = w[0], to = w[1];
        const len = mod(to - from, 1) || 1; let x = mod(f - from, 1); if (x > len) return 0; x /= len;
        const r = a.ramp != null ? a.ramp : 0.2; return r <= 0 ? 1 : x < r ? smooth(x / r) : x > 1 - r ? smooth((1 - x) / r) : 1;
      }
      default: return Math.sin(TAU * u);
    }
  }
  const pistonD = (a, th) => { const r = a.r || 0.3, l = a.l || 1; return r * Math.cos(th) + Math.sqrt(Math.max(0, l * l - r * r * Math.sin(th) ** 2)) - (r + l); };
  /* restituisce { m, mix, mixCol, alpha } */
  function evalAnims(anims, U, model) {
    let m = null, mix = 0, mixCol = null, alpha = 1;
    for (const a of anims) {
      const u = U * (a.rate != null ? a.rate : 1) + (a.phase || 0), th = TAU * u; let k = null;
      switch (a.type) {
        case 'spin': k = Mx.axis(a.axis || 'y', th * (a.dir || 1)); break;
        case 'swing': k = Mx.axis(a.axis || 'z', (a.amp != null ? a.amp : 20) * DEG * wave(a, u, 'sin', model) + (a.base || 0) * DEG); break;
        case 'move': { const d = a.dir || [0, 1, 0], s = (a.amp != null ? a.amp : 1) * wave(a, u, 'sin', model); k = Mx.t(d[0] * s, d[1] * s, d[2] * s); break; }
        case 'scale': {
          const w = wave(a, u, 'sin01', model), from = a.from != null ? a.from : 1, to = a.to != null ? a.to : 0.8, s = from + (to - from) * w, ax = a.axis || 'xyz';
          k = Mx.s(ax.includes('x') ? s : 1, ax.includes('y') ? s : 1, ax.includes('z') ? s : 1); break;
        }
        case 'piston': { const d = pistonD(a, th), ax = a.dir || [0, 1, 0]; k = Mx.t(ax[0] * d, ax[1] * d, ax[2] * d); break; }
        case 'rod': { const r = a.r || 0.3, l = a.l || 1; k = Mx.mul(Mx.t(0, pistonD(a, th), 0), Mx.rz(Math.asin(clamp((r * Math.sin(th)) / l, -1, 1)) * (a.dir || 1))); break; }
        case 'chamber': k = Mx.s(1, Math.max(0.001, (a.h0 || 0.1) - pistonD(a, th)), 1); break;
        case 'path': {
          const P = a.pts || [[0, 0, 0]]; const s = wave(a, u, 'saw', model);
          let tot = 0; const L = []; for (let i = 0; i < P.length - 1; i++) { const d = Math.hypot(P[i + 1][0] - P[i][0], P[i + 1][1] - P[i][1], P[i + 1][2] - P[i][2]); L.push(d); tot += d; }
          let x = s * tot, i = 0; while (i < L.length - 1 && x > L[i]) { x -= L[i]; i++; }
          const f = L[i] ? x / L[i] : 0, q = P[i], r = P[i + 1] || q;
          k = Mx.t(q[0] + (r[0] - q[0]) * f - P[0][0], q[1] + (r[1] - q[1]) * f - P[0][1], q[2] + (r[2] - q[2]) * f - P[0][2]); break;
        }
        case 'blink': {
          const w = wave(a, u, 'sin01', model);
          if (a.color) { mix = Math.max(mix, w * (a.amount != null ? a.amount : 1)); mixCol = hexRgb(a.color); }
          if (a.fade) alpha *= (a.min || 0) + (1 - (a.min || 0)) * w;
          break;
        }
      }
      if (k) { k = Mx.pivot(k, a.pivot); m = m ? Mx.mul(m, k) : k; }
    }
    return { m, mix, mixCol, alpha };
  }

  /* ======================= COLORI ======================= */
  const RGB = {};
  function hexRgb(c) {
    if (RGB[c]) return RGB[c];
    let r = 150, g = 150, b = 150;
    if (c && c[0] === '#') { let h = c.slice(1); if (h.length === 3) h = h.split('').map((x) => x + x).join(''); const n = parseInt(h, 16); r = (n >> 16) & 255; g = (n >> 8) & 255; b = n & 255; }
    else if (c) { const m = c.match(/[\d.]+/g); if (m) [r, g, b] = m.map(Number); }
    return (RGB[c] = [r, g, b]);
  }
  const lerp3 = (a, b, f) => [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
  function lit(rgb, k) {
    if (k >= 1) return [rgb[0] + (255 - rgb[0]) * (k - 1), rgb[1] + (255 - rgb[1]) * (k - 1), rgb[2] + (255 - rgb[2]) * (k - 1)];
    return [rgb[0] * k, rgb[1] * k, rgb[2] * k];
  }
  const css = (c, a) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a == null ? 1 : +a.toFixed(3)})`;
  const YELLOW = [253, 224, 71];
  const LIGHT = (Mini3D._ && Mini3D._.LIGHT) || [0.4, 0.7, 0.6];

  /* ======================= SCENA "model" ======================= */
  const OBJS = {};
  function sceneModel(host, o) {
    if (o.object && !o.parts) {
      const wait = el('p', 'muted', '⏳ ' + t('lib.loading')); host.appendChild(wait);
      loadObject(o.object).then((d) => { wait.remove(); if (d) sceneModel(host, Object.assign({}, d.model, o, { object: null, parts: d.model.parts, steps: o.steps === true ? d.steps : o.steps || null })); });
      return null;
    }
    const { View, label } = Mini3D._;
    const v = new View(host, { rx: o.rx != null ? o.rx : 0.32, ry: o.ry != null ? o.ry : -0.55, auto: o.auto === true });
    v.height = o.height || 460;
    /* sui telefoni il canvas diventa più alto (quasi quadrato) */
    const baseResize = v._resize.bind(v);
    v._resize = function () {
      baseResize();
      const w = this.W, want = Math.min(this.height, Math.round(w * 1.02));
      if (w < 620 && want > this.H && this.canvas && this.ctx) {
        const dpr = window.devicePixelRatio || 1;
        this.canvas.height = want * dpr; this.canvas.style.height = want + 'px'; this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0); this.H = want;
      }
    };
    v._resize();
    v.autoSpeed = 0.15;
    host.classList.add('mdl');
    const parts = (o.parts || []).map(buildPart);
    const byId = Object.fromEntries(parts.map((p) => [p.id, p]));
    const cycle = o.cycle || 1;
    const S = { U: 0, playing: o.play !== false, speed: 1, explode: o.explode || 0, exT: o.explode || 0, labels: o.labels != null ? o.labels : v.W >= 520, sel: null, hover: null, only: null, focus: null, loop: null,
      cam: [0, 0, 0], camT: [0, 0, 0], zoomT: null, viewT: null, items: [] };

    /* adattamento: centro e scala del modello fermo */
    let bb = [[1e9, 1e9, 1e9], [-1e9, -1e9, -1e9]];
    const walkStatic = (node, M, fn) => { const W = Mx.mul(M, node.local); node.faces.forEach((f) => f.p.forEach((p) => fn(Mx.ap(W, p)))); node.kids.forEach((k) => walkStatic(k, W, fn)); };
    parts.forEach((p) => {
      const pb = [[1e9, 1e9, 1e9], [-1e9, -1e9, -1e9]];
      const lb = [[1e9, 1e9, 1e9], [-1e9, -1e9, -1e9]];
      const loc = Object.assign({}, p.root, { local: Mx.id() });
      walkStatic(loc, Mx.id(), (q) => { for (let i = 0; i < 3; i++) { lb[0][i] = Math.min(lb[0][i], q[i]); lb[1][i] = Math.max(lb[1][i], q[i]); } });
      p.anchorL = p.def.anchor || [0, 1, 2].map((i) => (lb[0][i] + lb[1][i]) / 2);
      p.anchor = Mx.ap(p.root.local, p.anchorL);
      walkStatic(p.root, Mx.id(), (q) => { for (let i = 0; i < 3; i++) { pb[0][i] = Math.min(pb[0][i], q[i]); pb[1][i] = Math.max(pb[1][i], q[i]); } });
      p.radius = Math.max(0.05, Math.hypot(pb[1][0] - pb[0][0], pb[1][1] - pb[0][1], pb[1][2] - pb[0][2]) / 2);
      if (p.def.alpha == null || p.def.alpha > 0.3) for (let i = 0; i < 3; i++) { bb[0][i] = Math.min(bb[0][i], pb[0][i]); bb[1][i] = Math.max(bb[1][i], pb[1][i]); }
    });
    const C0 = [0, 1, 2].map((i) => (bb[0][i] + bb[1][i]) / 2);
    const R0 = Math.max(0.1, Math.hypot(bb[1][0] - bb[0][0], bb[1][1] - bb[0][1], bb[1][2] - bb[0][2]) / 2);
    const HX = (bb[1][0] - bb[0][0]) / 2, HY = (bb[1][1] - bb[0][1]) / 2, HZ = (bb[1][2] - bb[0][2]) / 2;
    const K = (o.fit || 1) * Math.min(1.4 / Math.max(0.1, HY), 2.05 / Math.max(0.1, HX, HZ), 1.95 / R0);
    const FIT = Mx.mul(Mx.s(K, K, K), Mx.t(-C0[0], -C0[1], -C0[2]));
    const floorY = (bb[0][1] - C0[1]) * K, FX = Math.max(0.3, (bb[1][0] - bb[0][0]) / 2 * K), FZ = Math.max(0.3, (bb[1][2] - bb[0][2]) / 2 * K);

    /* ---- interfaccia ---- */
    const hud = el('div', 'mdl-hud'); v.wrap.appendChild(hud);
    const tip = el('div', 'mdl-tip'); v.wrap.appendChild(tip);
    const playBtn = v.button('', () => setPlaying(!S.playing));
    const syncPlay = () => { playBtn.innerHTML = S.playing ? '⏸ ' + t('w.pause') : '▶ ' + t('lib.anim'); };
    const hasAnim = parts.some((p) => p.root.anims.length || JSON.stringify(p.def.shapes || []).includes('"anim"'));
    if (!hasAnim) playBtn.style.display = 'none';
    const SPEEDS = [0.5, 1, 2]; let sp = 1;
    const spBtn = v.button('🐢 ×1', () => { sp = (sp + 1) % SPEEDS.length; S.speed = SPEEDS[sp]; spBtn.textContent = (S.speed < 1 ? '🐢' : '🐇') + ' ×' + i18n.num(S.speed); });
    if (!hasAnim) spBtn.style.display = 'none';
    const lblBtn = v.button('🏷️ ' + t('lib.labels'), (b) => { S.labels = !S.labels; b.classList.toggle('active', S.labels); }, S.labels ? 'active' : '');
    v.button('🎯', () => api.reset()).title = t('lib.reset');
    const fullBtn = v.button('⛶', () => toggleFull()); fullBtn.title = t('lib.full');
    syncPlay();
    const ctl = el('div', 'm3d-slider mdl-explode', `<label>💥 ${t('lib.explode')}</label><input type="range" min="0" max="100" value="${S.explode * 100}">`);
    host.appendChild(ctl);
    const rng = ctl.querySelector('input'); rng.oninput = () => { S.exT = rng.value / 100; };
    const uiChips = (o.ui && o.ui.chips) || host, uiPanel = (o.ui && o.ui.panel) || host;
    const chipBox = el('div', 'mdl-chips'); uiChips.appendChild(chipBox);
    const panel = el('div', 'mdl-panel'); uiPanel.appendChild(panel);
    const chips = {};
    parts.forEach((p) => {
      if (p.def.chip === false) return;
      const b = el('button', 'chip mdl-chip', `<i style="background:${p.def.color || '#94a3b8'}"></i>${esc(p.def.name || p.id)}`); b.type = 'button';
      b.onclick = () => select(S.sel === p ? null : p.id); chips[p.id] = b; chipBox.appendChild(b);
    });
    const older = /^m/.test((Store.current() || {}).year || '');
    function renderPanel() {
      const p = S.sel;
      if (!p) { panel.innerHTML = `<p class="muted">👆 ${t('lib.tapPart')}</p>`; return; }
      const d = p.def;
      panel.innerHTML = `<div class="mdl-ph"><h4><i style="background:${d.color || '#94a3b8'}"></i>${esc(d.name || p.id)}</h4><button type="button" class="mdl-x" aria-label="${t('lib.close')}">✕</button></div>
        <div class="mdl-info">${d.info || ''}</div>${d.more ? `<details class="mdl-more" ${older ? 'open' : ''}><summary>🔎 ${t('lib.more')}</summary>${d.more}</details>` : ''}
        <div class="mdl-pact"><button type="button" class="btn btn-small mdl-only">${S.only ? '👁 ' + t('lib.showAll') : '🔍 ' + t('lib.only')}</button></div>`;
      panel.querySelector('.mdl-x').onclick = () => select(null);
      panel.querySelector('.mdl-only').onclick = () => showOnly(S.only ? null : p.id);
    }
    function select(id, quiet) {
      S.sel = id ? byId[id] || null : null;
      if (S.sel && S.focus && !S.focus.has(S.sel.id)) S.focus = null;
      if (S.only && S.sel && S.only !== S.sel) showOnly(S.sel.id);
      Object.entries(chips).forEach(([k, b]) => b.classList.toggle('active', S.sel && k === S.sel.id));
      renderPanel();
      if (S.sel && !quiet && chips[S.sel.id] && o.scrollChip !== false) chips[S.sel.id].scrollIntoView({ block: 'nearest', inline: 'nearest' });
      if (o.onSelect) o.onSelect(S.sel && S.sel.id);
    }
    function showOnly(id) {
      S.only = id ? byId[id] : null;
      if (S.only) {
        S.sel = S.only; Object.entries(chips).forEach(([k, b]) => b.classList.toggle('active', k === id));
        S.camT = Mx.ap(FIT, S.only.anchor.map((x, i) => x + S.only.explode[i] * S.explode));
        S.zoomT = clamp(0.75 / (S.only.radius * K), 0.6, 2.6);
      } else { S.camT = [0, 0, 0]; S.zoomT = 1; }
      renderPanel();
    }
    function setPlaying(b) { S.playing = b; syncPlay(); }
    renderPanel();

    /* tocco/clic: distingue il clic dal trascinamento */
    let down = null;
    v.canvas.addEventListener('pointerdown', (e) => { down = [e.clientX, e.clientY]; });
    const pick = (mx, my) => {
      let ghostHit = null; const L = (S.items || []).slice().sort((a, b) => a.z - b.z);
      for (let i = L.length - 1; i >= 0; i--) {
        const d = L[i]; if (!inPoly(mx, my, d.r.map((q) => v.proj(q)))) continue;
        if (d.a >= 0.5) return d.part; if (!ghostHit) ghostHit = d.part;
      }
      return ghostHit;
    };
    v.canvas.addEventListener('click', (e) => {
      if (down && Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 6) return;
      const r = v.canvas.getBoundingClientRect(); const p = pick(e.clientX - r.left, e.clientY - r.top);
      select(p && p !== S.sel ? p.id : null);
    });
    v.canvas.addEventListener('pointermove', (e) => {
      if (e.buttons) { tip.style.opacity = 0; return; }
      const r = v.canvas.getBoundingClientRect(); const x = e.clientX - r.left, y = e.clientY - r.top; const p = pick(x, y);
      S.hover = p; v.canvas.style.cursor = p ? 'pointer' : '';
      if (p) { tip.textContent = p.def.name || p.id; tip.style.left = x + 'px'; tip.style.top = y + 'px'; tip.style.opacity = 1; } else tip.style.opacity = 0;
    });
    v.canvas.addEventListener('pointerleave', () => { S.hover = null; tip.style.opacity = 0; });

    let fullKey = null;
    function toggleFull() {
      const on = !host.classList.contains('mdl-full');
      host.classList.toggle('mdl-full', on); document.body.classList.toggle('mdl-noscroll', on);
      v.height = on ? Math.max(300, innerHeight - 170) : (o.height || 460);
      fullBtn.classList.toggle('active', on);
      if (on) { fullKey = (e) => { if (e.key === 'Escape') toggleFull(); }; document.addEventListener('keydown', fullKey); }
      else if (fullKey) document.removeEventListener('keydown', fullKey);
      requestAnimationFrame(() => v._resize());
    }

    /* ---- sfondi ---- */
    const stars = Array.from({ length: 110 }, () => [Math.random(), Math.random(), Math.random()]);
    const bubbles = Array.from({ length: 26 }, () => [Math.random(), Math.random(), 2 + Math.random() * 5]);
    function paintBg(ctx, T) {
      const W = v.W, H = v.H, bg = o.bg;
      if (bg === 'space' || bg === 'orbit') {
        const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#050816'); g.addColorStop(1, '#141b3d'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
        for (const s of stars) { ctx.globalAlpha = 0.35 + 0.65 * Math.abs(Math.sin(T * 0.7 + s[2] * 20)) * s[2]; ctx.fillStyle = '#fff'; ctx.fillRect(s[0] * W, s[1] * H, 1.5, 1.5); }
        ctx.globalAlpha = 1;
        if (bg === 'orbit') {
          const R = W * 1.3, cx = W * 0.5, cy = H + R * 0.84;
          const e = ctx.createRadialGradient(cx - R * 0.2, cy - R * 0.4, R * 0.2, cx, cy, R);
          e.addColorStop(0, '#60a5fa'); e.addColorStop(0.8, '#1d4ed8'); e.addColorStop(1, '#1e3a8a');
          ctx.fillStyle = 'rgba(147,197,253,.25)'; ctx.beginPath(); ctx.arc(cx, cy, R + 8, 0, TAU); ctx.fill();
          ctx.fillStyle = e; ctx.beginPath(); ctx.arc(cx, cy, R, 0, TAU); ctx.fill();
          ctx.fillStyle = 'rgba(255,255,255,.35)'; for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.ellipse(cx - R * 0.5 + i * R * 0.27 + mod(T * 6, 80), cy - R * 0.93 + (i % 2) * 10, 60, 7, 0, 0, TAU); ctx.fill(); }
        }
      } else if (bg === 'sea') {
        const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#38bdf8'); g.addColorStop(0.5, '#0369a1'); g.addColorStop(1, '#082f49'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = 'rgba(255,255,255,.07)'; for (let i = 0; i < 5; i++) { const x = W * (0.1 + i * 0.22) + Math.sin(T * 0.4 + i) * 20; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + 40, 0); ctx.lineTo(x - 60, H); ctx.lineTo(x - 110, H); ctx.fill(); }
        ctx.strokeStyle = 'rgba(255,255,255,.5)'; ctx.lineWidth = 1.2;
        for (const b of bubbles) { const y = mod(b[1] * H - T * 18 * (b[2] / 4), H + 20) - 10; ctx.beginPath(); ctx.arc(b[0] * W + Math.sin(T + b[2]) * 6, y, b[2], 0, TAU); ctx.stroke(); }
      } else if (bg === 'sky') {
        const g = ctx.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#1e3a8a'); g.addColorStop(0.55, '#60a5fa'); g.addColorStop(1, '#dbeafe'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = 'rgba(255,255,255,.75)'; for (let i = 0; i < 4; i++) { const x = mod(i * 260 + T * 8, W + 200) - 100, y = H * (0.25 + 0.15 * (i % 3)); ctx.beginPath(); ctx.ellipse(x, y, 50, 14, 0, 0, TAU); ctx.ellipse(x + 30, y - 8, 30, 14, 0, 0, TAU); ctx.fill(); }
      } else if (bg === 'body') {
        const g = ctx.createRadialGradient(W / 2, H * 0.4, 10, W / 2, H / 2, Math.max(W, H) * 0.7); g.addColorStop(0, '#fff1f2'); g.addColorStop(1, '#fecdd3'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      }
    }

    /* ---- disegno ---- */
    let T = 0;
    v.draw = (ctx, dt) => {
      T += dt;
      if (S.playing) S.U += dt * (o.speed || 0.5) * S.speed;
      S.explode += (S.exT - S.explode) * Math.min(1, dt * 6);
      if (Math.abs(+rng.value / 100 - S.exT) > 0.005) rng.value = S.exT * 100;
      for (let i = 0; i < 3; i++) S.cam[i] += (S.camT[i] - S.cam[i]) * Math.min(1, dt * 5);
      if (S.zoomT != null) { v.zoom += (S.zoomT - v.zoom) * Math.min(1, dt * 5); if (Math.abs(S.zoomT - v.zoom) < 0.002) S.zoomT = null; }
      if (S.viewT) {
        const k = Math.min(1, dt * 4); let dy = mod(S.viewT.ry - v.ry + Math.PI, TAU) - Math.PI;
        v.ry += dy * k; v.rx += (S.viewT.rx - v.rx) * k; if (Math.abs(dy) < 0.002 && Math.abs(S.viewT.rx - v.rx) < 0.002) S.viewT = null;
        v._cache();
      }
      const Ueff = S.loop ? cycle * S.loop[0] + mod(S.U, cycle * (S.loop[1] - S.loop[0])) : S.U;
      paintBg(ctx, T);
      // HUD delle fasi
      if (o.phases) {
        const f = mod(Ueff, cycle) / cycle; const ph = o.phases.find((p) => f >= p.from && f < p.to) || o.phases[0];
        if (hud._ph !== ph.label) { hud._ph = ph.label; hud.innerHTML = o.phases.map((p) => `<span class="${p === ph ? 'on' : ''}" style="--pc:${p.color || '#4c7cf3'}">${esc(p.label)}</span>`).join(''); }
      }
      const dark = o.bg === 'space' || o.bg === 'orbit' || o.bg === 'sea' || o.bg === 'sky';
      // ombra a terra
      if (!dark && o.floor !== false) {
        const base = Mx.t(-S.cam[0], -S.cam[1], -S.cam[2]);
        for (const [rr, al] of [[1.08, 0.045], [0.9, 0.05], [0.7, 0.06]]) {
          ctx.beginPath();
          for (let i = 0; i <= 36; i++) { const a = (i / 36) * TAU; const q = v.P(Mx.ap(base, [Math.cos(a) * rr * FX, floorY - 0.02, Math.sin(a) * rr * FZ])); i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); }
          ctx.fillStyle = `rgba(30,41,59,${al})`; ctx.fill();
        }
      }
      const opaque = [], decals = [], trans = [], items = []; const pulse = 0.28 + 0.14 * Math.sin(T * 5);
      const anchors = [];
      const WORLD = Mx.t(-S.cam[0], -S.cam[1], -S.cam[2]);
      for (const p of parts) {
        if (S.only && S.only !== p) continue;
        const ghost = S.focus && !S.focus.has(p.id);
        const e = p.explode, ex = S.explode;
        const Mpart = Mx.mul(WORLD, Mx.mul(FIT, Mx.t(e[0] * ex, e[1] * ex, e[2] * ex)));
        const hl = S.sel === p ? pulse : S.hover === p ? 0.14 : 0; p._n = 0;
        const walk = (node, Mparent, mix, mixCol, alpha) => {
          const A = node.anims.length ? evalAnims(node.anims, Ueff, o) : null;
          let W = Mx.mul(Mparent, node.local); if (A && A.m) W = Mx.mul(W, A.m);
          let mx = mix, mc = mixCol, al = alpha;
          if (A) { if (A.mix > mx) { mx = A.mix; mc = A.mixCol; } al *= A.alpha; }
          if (node === p.root) anchors.push({ p, s: v.P(Mx.ap(W, p.anchorL)) });
          if (al > 0.01) for (const f of node.faces) {
            const w = f.p.map((q) => Mx.ap(W, q)); const r = w.map((q) => v.rot(q));
            let zc = 0, xc = 0, yc = 0; for (const q of r) { xc += q[0]; yc += q[1]; zc += q[2]; } xc /= r.length; yc /= r.length; zc /= r.length;
            if (!f.ds) { const n = newell(r); if (n[0] * -xc + n[1] * -yc + n[2] * (6 - zc) < 0) continue; }
            let rgb = hexRgb(f.col); if (mx > 0 && mc) rgb = lerp3(rgb, mc, mx); if (hl) rgb = lerp3(rgb, YELLOW, hl);
            let a = f.a * al; if (ghost) a *= 0.16;
            const z = zc + (p.def.zBias || 0);
            items.push({ r, z, part: p, a: ghost ? 0.1 : a }); if (a > 0.08) p._n++;
            if (a >= 0.98) (f.decal ? (decals[+f.decal] = decals[+f.decal] || []) : opaque).push({ pts: w, color: css(rgb), kind: f.sm ? 'side' : 'flat' });
            else trans.push({ r, z, rgb, a, sm: f.sm });
          }
          for (const k of node.kids) walk(k, W, mx, mc, al);
        };
        walk(p.root, Mpart, 0, null, 1);
      }
      // 1) solidi opachi con il motore condiviso (Mini3D._.drawFaces); 2) superfici trasparenti sopra, dalla più lontana
      Mini3D._.drawFaces(v, ctx, opaque, { color: '#94a3b8', edges: false, cull: false });
      decals.forEach((L) => L && L.length && Mini3D._.drawFaces(v, ctx, L, { color: '#94a3b8', edges: false, cull: false }));
      trans.sort((a, b) => a.z - b.z);
      for (const it of trans) {
        const s = it.r.map((q) => v.proj(q));
        ctx.beginPath(); for (let i = 0; i < s.length; i++) i ? ctx.lineTo(s[i][0], s[i][1]) : ctx.moveTo(s[i][0], s[i][1]); ctx.closePath();
        const n = newell(it.r); const m = Math.hypot(n[0], n[1], n[2]) || 1;
        const L = Math.abs((n[0] * LIGHT[0] + n[1] * LIGHT[1] + n[2] * LIGHT[2]) / m);
        ctx.fillStyle = css(lit(it.rgb, 0.55 + 0.6 * L), it.a); ctx.fill();
      }
      S.items = items;
      // etichette
      const autoLbl = !S.labels && S.focus && S.focus.size <= 6;
      if (S.labels || S.sel || autoLbl) {
        const cen = v.P([-S.cam[0], -S.cam[1], -S.cam[2]]);
        ctx.font = '700 12px system-ui, sans-serif'; ctx.save(); ctx.lineJoin = 'round';
        /* etichette a "richiamo": due colonne (sinistra/destra), ordinate per altezza e distanziate */
        const top = o.phases ? 44 : 12, gap = 19, L = [], Rr = [];
        for (const an of anchors) {
          const p = an.p; if ((p.def.noLabel || !p._n) && S.sel !== p) continue;
          if (an.s[0] < 0 || an.s[0] > v.W || an.s[1] < 0 || an.s[1] > v.H) continue;
          if (!S.labels && !autoLbl && S.sel !== p) continue;
          if (S.focus && !S.focus.has(p.id) && S.sel !== p) continue;
          const txt = p.def.label || p.def.name || p.id; const w = ctx.measureText(txt).width + 10;
          (an.s[0] < cen[0] ? L : Rr).push({ an, p, txt, w, y: an.s[1] });
        }
        const place = (col) => {
          col.sort((a, b) => a.y - b.y);
          for (let i = 0; i < col.length; i++) col[i].ly = Math.max(col[i].y, top, i ? col[i - 1].ly + gap : -1e9);
          const over = col.length ? col[col.length - 1].ly - (v.H - 10) : 0;
          if (over > 0) for (let i = col.length - 1; i >= 0; i--) { col[i].ly -= over; if (i && col[i - 1].ly > col[i].ly - gap) col[i - 1].ly = col[i].ly - gap; else break; }
        };
        place(L); place(Rr);
        const draw1 = (it, right) => {
          const { an, p, txt } = it; const ly = clamp(it.ly, 10, v.H - 10);
          let lx = right ? an.s[0] + 34 + Math.abs(ly - an.s[1]) * 0.25 : an.s[0] - 34 - Math.abs(ly - an.s[1]) * 0.25;
          lx = right ? Math.min(lx, v.W - it.w - 2) : Math.max(lx, it.w + 2);
          ctx.strokeStyle = dark ? 'rgba(255,255,255,.6)' : 'rgba(30,41,59,.5)'; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(an.s[0], an.s[1]); ctx.lineTo(lx, ly); ctx.stroke();
          ctx.fillStyle = dark ? '#fff' : '#1e293b'; ctx.beginPath(); ctx.arc(an.s[0], an.s[1], 2.6, 0, TAU); ctx.fill();
          const on = S.sel === p;
          label(ctx, lx + (right ? 3 : -3), ly, txt, on ? '#92400e' : dark ? '#f8fafc' : '#1e293b', right ? 'left' : 'right', on ? 'rgba(254,240,138,.95)' : dark ? 'rgba(2,6,23,.85)' : 'rgba(255,255,255,.92)');
        };
        L.forEach((it) => draw1(it, false)); Rr.forEach((it) => draw1(it, true));
        ctx.restore();
      }
    };

    const api = {
      parts: parts.map((p) => p.id),
      select: (id) => select(id, true),
      showOnly,
      setPlaying,
      setExplode(x) { S.exT = clamp(x, 0, 1); },
      setFocus(ids) { S.focus = ids && ids.length ? new Set(ids) : null; },
      setLoop(l) { if (JSON.stringify(l || null) !== JSON.stringify(S.loop)) { S.loop = l || null; S.U = 0; } },
      setView(w) { if (!w) return; v.auto = false; S.viewT = { rx: w.rx != null ? w.rx : v.rx, ry: w.ry != null ? w.ry : v.ry }; if (w.zoom) S.zoomT = w.zoom; },
      applyStep(st) {
        st = st || {};
        if (S.only) showOnly(null);
        select(null, true); api.setFocus(st.focus); api.setExplode(st.explode || 0); api.setLoop(st.loop); setPlaying(st.play !== false);
        api.setView(st.view); if (!st.view && !st.zoom) S.zoomT = 1; if (st.zoom) S.zoomT = st.zoom;
      },
      reset() { if (S.only) showOnly(null); select(null, true); S.focus = null; S.exT = 0; S.viewT = { rx: o.rx != null ? o.rx : 0.32, ry: o.ry != null ? o.ry : -0.55 }; S.zoomT = 1; v.auto = false; }
    };
    v.model = api;
    if (o.steps && o.steps.length) mountSteps(o.stepsHost || host, o.steps, api, o.onStep);
    return v;
  }
  function inPoly(x, y, s) {
    let c = false;
    for (let i = 0, j = s.length - 1; i < s.length; j = i++) if ((s[i][1] > y) !== (s[j][1] > y) && x < ((s[j][0] - s[i][0]) * (y - s[i][1])) / (s[j][1] - s[i][1]) + s[i][0]) c = !c;
    return c;
  }
  Mini3D.scenes.model = sceneModel;

  /* ---- "passo passo": guida il modello ---- */
  function mountSteps(host, steps, api, onStep) {
    const box = el('div', 'lib-stepper');
    const dots = el('div', 'lib-dots'); const body = el('div', 'lib-stepbody'); const nav = el('div', 'lib-stepnav');
    box.append(dots, body, nav); host.appendChild(box);
    const prev = el('button', 'btn btn-ghost btn-small', '← ' + t('lib.prev')); prev.type = 'button';
    const next = el('button', 'btn btn-small', t('lib.next') + ' →'); next.type = 'button';
    const count = el('span', 'muted small'); nav.append(prev, count, next);
    let k = 0; const seen = new Set();
    const db = steps.map((s, i) => { const b = el('button', 'lib-dot', String(i + 1)); b.type = 'button'; b.title = s.title || ''; b.onclick = () => go(i); dots.appendChild(b); return b; });
    function go(i) {
      k = clamp(i, 0, steps.length - 1); const s = steps[k]; seen.add(k);
      db.forEach((b, j) => { b.classList.toggle('active', j === k); b.classList.toggle('seen', seen.has(j)); });
      body.innerHTML = `<h3>${s.icon ? s.icon + ' ' : ''}${s.title || ''}</h3>${s.html || ''}`;
      count.textContent = t('lib.step', { i: k + 1, n: steps.length });
      prev.disabled = k === 0; next.textContent = k === steps.length - 1 ? '🔄 ' + t('lib.again') : t('lib.next') + ' →';
      api.applyStep(s);
      if (onStep) onStep(k, seen.size === steps.length);
    }
    prev.onclick = () => go(k - 1); next.onclick = () => go(k === steps.length - 1 ? 0 : k + 1);
    go(0);
    return { go };
  }

  /* ======================= DATI ======================= */
  let CAT = null, catP = null;
  window.LIBRARY_INDEX = (c) => { CAT = c; };
  window.LIBRARY = (d) => { OBJS[(d.lang || 'it') + ':' + d.id] = d; };
  function loadCatalog() {
    if (CAT) return Promise.resolve(CAT);
    if (!catP) catP = window.Z ? Z.loadScript('data/library/index.js').then(() => { registerTitles(); return CAT; }).catch(() => null) : Promise.resolve(null);
    return catP;
  }
  async function loadObject(id) {
    await loadCatalog();
    const it = CAT && CAT.items.find((x) => x.id === id);
    const lang = it && (it.langs || []).includes(i18n.lang) ? i18n.lang : 'it';
    const k = lang + ':' + id;
    if (!OBJS[k]) { try { await Z.loadScript(`data/library/${lang === 'it' ? '' : lang + '/'}${id}.js`); } catch (e) { return null; } }
    return OBJS[k] || OBJS['it:' + id] || null;
  }
  const nameOf = (x) => (x && x.name ? x.name[i18n.lang] || x.name.it : '');
  const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
  function registerTitles() {
    if (!CAT || !window.Z) return;
    CAT.items.forEach((it) => Z.registerTitle('lib:' + it.id, '#/libreria/' + it.id, () => it.emoji + ' ' + nameOf(it)));
    const p = Store.current(); const h = location.hash.replace(/^#\/?/, '').split('/')[0];
    if (p && p.log.some((e) => String(e.topic).startsWith('lib:')) && (h === '' || h === 'storico')) Z.rerender();
  }
  // le voci della libreria compaiono nello storico: carica subito il piccolo catalogo
  document.addEventListener('DOMContentLoaded', () => setTimeout(loadCatalog, 0));

  /* indice delle lezioni del programma */
  const SUBJ_ICON = { ita: '📖', mat: '🔢', sci: '🔬', sto: '🏛️', geo: '🌍', ing: '🇬🇧', tec: '💻', lat: '🏺' };
  const SUBJ_COLOR = { ita: '#e85d75', mat: '#4c7cf3', sci: '#2fb67c', sto: '#d08a2e', geo: '#18a5b8', ing: '#8a5cf6', tec: '#64748b', lat: '#b45309' };
  let TIDX = null;
  function topicIndex() {
    if (TIDX) return TIDX; TIDX = {}; const C = window.CURRICULUM; if (!C) return TIDX;
    for (const y of C.years) for (const s of C.subjects) for (const e of (C.program[y][s] || [])) TIDX[e[0]] = { entry: e, year: y, subj: s };
    return TIDX;
  }
  const STATUS_ICON = { todo: '⚪', seen: '👀', done: '✅', passed: '🏆' };

  /* ======================= PAGINE ======================= */
  async function page(m, id) {
    m.innerHTML = `<p class="muted">⏳ ${t('lib.loading')}</p>`;
    const hash = location.hash;
    await loadCatalog();
    if (location.hash !== hash) return;
    if (!CAT) { m.innerHTML = `<p class="muted">${t('lib.notFound')}</p>`; return; }
    if (id) return pageObject(m, id, hash);
    return pageShelves(m);
  }

  function itemCard(it) {
    const shelf = CAT.shelves.find((s) => s.id === it.shelf) || {};
    const coming = it.status !== 'ready';
    const st = Store.status('lib:' + it.id);
    const a = el('a', 'lib-card' + (coming ? ' coming' : ''), `<span class="lib-em">${it.emoji}</span><b>${esc(nameOf(it))}</b>` +
      (coming ? `<em class="lib-soon">⏳ ${t('lib.coming')}</em>` : `<span class="lib-st" title="${t('status.' + st)}">${STATUS_ICON[st]}</span>`) +
      (it.year ? `<small>${t('year.' + it.year)}</small>` : ''));
    a.href = '#/libreria/' + it.id; a.style.setProperty('--sc', shelf.color || '#4c7cf3');
    return a;
  }

  function pageShelves(m) {
    m.innerHTML = '';
    const ready = CAT.items.filter((x) => x.status === 'ready').length;
    const hero = el('section', 'lib-hero', `<div class="lib-hero-t"><h1>🔧 ${t('lib.title')}</h1><p>${t('lib.subtitle')}</p>
      <p class="lib-stats"><span>🧩 ${t('lib.ready', { n: ready })}</span><span>⏳ ${t('lib.soon', { n: CAT.items.length - ready })}</span></p></div>
      <div class="lib-hero-art" aria-hidden="true">⚙️<span>🔩</span><i>🛠️</i></div>`);
    const sb = el('div', 'lib-search', `<span>🔎</span><input type="search" placeholder="${t('lib.search')}" aria-label="${t('lib.search')}">`);
    hero.querySelector('.lib-hero-t').appendChild(sb);
    m.appendChild(hero);
    const filt = el('div', 'lib-filter'); m.appendChild(filt);
    const wrap = el('div', 'lib-shelves'); m.appendChild(wrap);
    let cur = null; const inp = sb.querySelector('input');
    const fb = [{ id: null, emoji: '📚', name: null }].concat(CAT.shelves).map((s) => {
      const b = el('button', 'chip' + (s.id === cur ? ' active' : ''), `${s.emoji} ${s.name ? esc(nameOf(s)) : t('lib.all')}`); b.type = 'button';
      b.onclick = () => { cur = s.id; fb.forEach((x) => x.classList.toggle('active', x === b)); draw(); }; filt.appendChild(b); return b;
    });
    fb[0].classList.add('active');
    function draw() {
      const q = norm(inp.value); wrap.innerHTML = ''; let total = 0;
      CAT.shelves.forEach((s) => {
        if (cur && s.id !== cur) return;
        const items = CAT.items.filter((x) => x.shelf === s.id && (!q || norm(Object.values(x.name).join(' ') + ' ' + (x.tags || '') + ' ' + x.id).includes(q)));
        if (!items.length) return; total += items.length;
        items.sort((a, b) => (a.status === 'ready' ? 0 : 1) - (b.status === 'ready' ? 0 : 1));
        const done = items.filter((x) => ['done', 'passed'].includes(Store.status('lib:' + x.id))).length;
        const sec = el('section', 'lib-shelf', `<h2><span>${s.emoji}</span> ${esc(nameOf(s))} <small>${t('lib.count', { n: items.length })}${done ? ` · ✅ ${done}` : ''}</small></h2>`);
        sec.style.setProperty('--sc', s.color || '#4c7cf3');
        const row = el('div', 'lib-row'); items.forEach((it) => row.appendChild(itemCard(it))); sec.appendChild(row); wrap.appendChild(sec);
      });
      if (!total) wrap.appendChild(el('p', 'muted center lib-empty', '🤔 ' + t('lib.none')));
    }
    inp.oninput = draw;
    draw();
  }

  function relatedBox(it) {
    const TI = topicIndex(); const ids = (it.topics || []).filter((x) => TI[x]);
    if (!ids.length) return null;
    const sec = el('section', 'card lib-related', `<h2>📚 ${t('lib.related')}</h2>`); const l = el('div', 'lib-tlist');
    ids.forEach((id) => {
      const x = TI[id]; const st = Store.status(id);
      const a = el('a', 'lib-topic', `<span>${SUBJ_ICON[x.subj]}</span><span><b>${esc(i18n.topicTitle(x.entry))}</b><small>${t('year.' + x.year)} · ${t('subj.' + x.subj)}</small></span><span class="lib-st">${STATUS_ICON[st]}</span>`);
      a.href = '#/t/' + id; a.style.setProperty('--c', SUBJ_COLOR[x.subj]); l.appendChild(a);
    });
    sec.appendChild(l); return sec;
  }
  function sameShelf(it) {
    const others = CAT.items.filter((x) => x.shelf === it.shelf && x.id !== it.id);
    if (!others.length) return null;
    const sec = el('section', 'lib-more-shelf', `<h3>${t('lib.sameShelf')}</h3>`); const row = el('div', 'lib-row small');
    others.sort((a, b) => (a.status === 'ready' ? 0 : 1) - (b.status === 'ready' ? 0 : 1)).forEach((x) => row.appendChild(itemCard(x)));
    sec.appendChild(row); return sec;
  }

  async function pageObject(m, id, hash) {
    const it = CAT.items.find((x) => x.id === id);
    if (!it) { m.innerHTML = `<p class="muted">${t('lib.notFound')}</p><a class="btn" href="#/libreria">← ${t('lib.back')}</a>`; return; }
    const shelf = CAT.shelves.find((s) => s.id === it.shelf) || {};
    const key = 'lib:' + id;
    Z.registerTitle(key, '#/libreria/' + id, () => it.emoji + ' ' + nameOf(it));
    m.style.setProperty('--c', shelf.color || '#4c7cf3');
    const crumbs = `<div class="crumbs"><a href="#/libreria">🔧 ${t('lib.title')}</a> › ${shelf.emoji || ''} ${esc(nameOf(shelf))}</div>`;
    if (it.status !== 'ready') {
      m.innerHTML = crumbs + `<section class="card lib-coming-page"><div class="lib-em big">${it.emoji}</div><h1>${esc(nameOf(it))}</h1><p class="lib-soon">⏳ ${t('lib.coming')}</p><p>${t('lib.comingText')}</p></section>`;
      const r = relatedBox(it); if (r) m.appendChild(r);
      const s = sameShelf(it); if (s) m.appendChild(s);
      return;
    }
    const d = await loadObject(id);
    if (location.hash !== hash) return;
    if (!d) { m.innerHTML = crumbs + `<p class="muted">${t('lib.notFound')}</p>`; return; }
    Store.visit(key);
    m.innerHTML = crumbs;
    const tp = Store.topic(key); const st = Store.status(key);
    const head = el('header', 'lib-head', `<span class="lib-em">${it.emoji}</span><div><h1>${esc(i18n.lang === 'it' ? d.title || nameOf(it) : nameOf(it))}</h1><p class="lead">${d.intro || ''}</p>
      <div class="meta"><span class="pill">${STATUS_ICON[st]} ${t('status.' + st)}</span><span class="pill">🧩 ${t('lib.nParts', { n: d.model.parts.length })}</span>${it.year ? `<span class="pill">🎒 ${t('lib.level', { y: t('year.' + it.year) })}</span>` : ''}${tp.quizzes && tp.quizzes.quiz != null ? `<span class="pill">✏️ ${tp.quizzes.quiz}%</span>` : ''}</div></div>`);
    m.appendChild(head);
    if (i18n.lang !== 'it' && d.lang !== i18n.lang) m.appendChild(el('div', 'callout c-remember', '🌐 ' + t('lib.italian')));
    // area principale: modello + passo passo + pezzi
    const view = el('section', 'card lib-view');
    const stage = el('div', 'lib-stage'), stepsBox = el('div', 'lib-steps'), partsBox = el('div', 'lib-parts');
    stepsBox.innerHTML = `<h2>🛠️ ${t('lib.steps')}</h2>`; partsBox.innerHTML = `<h3>🧩 ${t('lib.parts')}</h3>`;
    view.append(stage, stepsBox, partsBox); m.appendChild(view);
    const doneBtn = el('button', 'btn btn-big ' + (tp.done ? 'btn-ok' : ''), tp.done ? t('lib.doneOk') : '✔ ' + t('lib.done'));
    const setDone = (v) => { Store.markDone(key, v); doneBtn.className = 'btn btn-big ' + (v ? 'btn-ok' : ''); doneBtn.textContent = v ? t('lib.doneOk') : '✔ ' + t('lib.done'); };
    doneBtn.onclick = () => setDone(!Store.topic(key).done);
    Mini3D.mount(stage, 'model', Object.assign({}, d.model, { steps: d.steps, stepsHost: stepsBox, ui: { chips: partsBox, panel: partsBox },
      onStep: (k, all) => { if (all && !Store.topic(key).done) doneBtn.classList.add('lib-glow'); } }));
    // curiosità
    if (d.facts && d.facts.length) {
      const f = el('section', 'card lib-facts', `<h2>💡 ${t('lib.facts')}</h2>`); const g = el('div', 'lib-fgrid');
      d.facts.forEach((x) => g.appendChild(el('div', 'lib-fact', typeof x === 'string' ? x : `${x.icon ? `<span class="lib-ficon">${x.icon}</span>` : ''}${x.title ? `<b>${x.title}</b>` : ''}<p>${x.html || ''}</p>`)));
      f.appendChild(g); m.appendChild(f);
    }
    // quiz
    if (d.quiz && d.quiz.length) {
      const q = el('section', 'card lib-quiz', `<h2>✏️ ${t('lib.quiz')}</h2>`); const area = el('div'); q.appendChild(area);
      const mk = () => { area.innerHTML = ''; area.appendChild(Quiz.render(Z.shuffle(d.quiz), { onDone: (ok, n) => { Store.quizResult(key, 'quiz', ok, n); if (ok / n >= 0.7 && !Store.topic(key).done) setDone(true); }, onRetry: mk })); };
      mk(); m.appendChild(q);
    }
    const r = relatedBox(it); if (r) m.appendChild(r);
    const foot = el('div', 'topic-foot'); foot.appendChild(doneBtn);
    const back = el('a', 'btn btn-ghost', '← ' + t('lib.back')); back.href = '#/libreria'; foot.appendChild(back); m.appendChild(foot);
    const s = sameShelf(it); if (s) m.appendChild(s);
  }

  window.ZPages = window.ZPages || {};
  window.ZPages.libreria = page;
  window.Library = { loadCatalog, loadObject, mountSteps, primitives: PRIM };
})();
