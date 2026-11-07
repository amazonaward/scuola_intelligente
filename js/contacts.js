/* Pagina Contatti (route #/contatti) */
(function () {
  const EMAIL = 'vitalie.ciornii@gmail.com';
  const T = {
    it: { title: 'Contatti', intro: 'Zainetto è un progetto educativo libero. Hai un\'idea, hai trovato un errore in una lezione o vuoi collaborare? Scrivici!', email: 'Email', write: 'Scrivi una email', copy: 'Copia l\'indirizzo', copied: 'Indirizzo copiato!', topics: 'Puoi scriverci per', t1: 'segnalare un errore in una lezione', t2: 'proporre nuovi argomenti, oggetti 3D o esercizi', t3: 'collaborare come insegnante, traduttore o sviluppatore', t4: 'usare Zainetto nella tua scuola', privacy: 'I profili e lo storico dei ragazzi restano solo sul loro dispositivo: non raccogliamo dati personali.' },
    en: { title: 'Contact', intro: 'Zainetto is a free educational project. Have an idea, found a mistake in a lesson, or want to help? Write to us!', email: 'Email', write: 'Send an email', copy: 'Copy the address', copied: 'Address copied!', topics: 'You can write to us to', t1: 'report a mistake in a lesson', t2: 'suggest new topics, 3D objects or exercises', t3: 'help as a teacher, translator or developer', t4: 'use Zainetto in your school', privacy: 'Children\'s profiles and history stay only on their device: we don\'t collect personal data.' },
    fr: { title: 'Contact', intro: 'Zainetto est un projet éducatif libre. Une idée, une erreur dans une leçon, envie de participer ? Écris-nous !', email: 'E-mail', write: 'Envoyer un e-mail', copy: 'Copier l\'adresse', copied: 'Adresse copiée !', topics: 'Tu peux nous écrire pour', t1: 'signaler une erreur dans une leçon', t2: 'proposer de nouveaux sujets, objets 3D ou exercices', t3: 'collaborer comme enseignant, traducteur ou développeur', t4: 'utiliser Zainetto dans ton école', privacy: 'Les profils et l\'historique des enfants restent sur leur appareil : nous ne collectons aucune donnée personnelle.' },
    ru: { title: 'Контакты', intro: 'Zainetto — свободный образовательный проект. Есть идея, нашли ошибку в уроке или хотите помочь? Напишите нам!', email: 'Эл. почта', write: 'Написать письмо', copy: 'Скопировать адрес', copied: 'Адрес скопирован!', topics: 'Напишите нам, чтобы', t1: 'сообщить об ошибке в уроке', t2: 'предложить новые темы, 3D-объекты или упражнения', t3: 'помочь как учитель, переводчик или разработчик', t4: 'использовать Zainetto в своей школе', privacy: 'Профили и история детей хранятся только на их устройстве: мы не собираем личные данные.' },
    ro: { title: 'Contact', intro: 'Zainetto este un proiect educațional liber. Ai o idee, ai găsit o greșeală într-o lecție sau vrei să colaborezi? Scrie-ne!', email: 'E-mail', write: 'Trimite un e-mail', copy: 'Copiază adresa', copied: 'Adresă copiată!', topics: 'Ne poți scrie ca să', t1: 'semnalezi o greșeală într-o lecție', t2: 'propui teme noi, obiecte 3D sau exerciții', t3: 'colaborezi ca profesor, traducător sau programator', t4: 'folosești Zainetto în școala ta', privacy: 'Profilurile și istoricul copiilor rămân doar pe dispozitivul lor: nu colectăm date personale.' }
  };
  for (const l of Object.keys(T)) if (window.I18N && I18N[l]) I18N[l]['nav.contacts'] = T[l].title;
  const s = (k) => (T[i18n.lang] || T.it)[k];

  window.ZPages = window.ZPages || {};
  ZPages.contatti = (m) => {
    m.innerHTML = `<section class="card contact">
      <h1>✉️ ${s('title')}</h1><p class="lead">${s('intro')}</p>
      <div class="contact-mail"><span>📧 ${s('email')}:</span> <b>${EMAIL}</b></div>
      <p><a class="btn" href="mailto:${EMAIL}?subject=Zainetto">✉️ ${s('write')}</a>
         <button class="btn btn-ghost" type="button" id="copyMail">📋 ${s('copy')}</button> <span id="copyOk" class="muted"></span></p>
      <h3>${s('topics')}:</h3><ul><li>🐞 ${s('t1')}</li><li>💡 ${s('t2')}</li><li>🤝 ${s('t3')}</li><li>🏫 ${s('t4')}</li></ul>
      <p class="muted small">🔒 ${s('privacy')}</p></section>`;
    m.querySelector('#copyMail').onclick = async () => {
      try { await navigator.clipboard.writeText(EMAIL); m.querySelector('#copyOk').textContent = s('copied'); } catch (e) { m.querySelector('#copyOk').textContent = EMAIL; }
    };
  };

  /* link "Contatti" nel piè di pagina, ripristinato a ogni aggiornamento della pagina */
  function footerLink() {
    const f = document.getElementById('footer'); if (!f || f.querySelector('.contact-link')) return;
    const a = document.createElement('a'); a.className = 'contact-link'; a.href = '#/contatti';
    a.textContent = '✉️ ' + s('title') + ' · ' + EMAIL; f.appendChild(document.createElement('br')); f.appendChild(a);
  }
  document.addEventListener('DOMContentLoaded', () => {
    footerLink();
    const f = document.getElementById('footer'); if (f) new MutationObserver(footerLink).observe(f, { childList: true });
  });
})();
