/* Profili e storico, salvati in localStorage (nessuna password). */
(function () {
  const KEY = 'zainetto-v1';
  const AVATARS = ['🦊', '🐼', '🐯', '🦁', '🐸', '🐵', '🦄', '🐙', '🐢', '🦉', '🐬', '🐝', '🐧', '🦖', '🚀', '⚽', '🎨', '🎸', '🌟', '🐱', '🐶', '🐰', '🐻', '🦋'];
  const COLORS = ['#ff7a59', '#4c7cf3', '#2fb67c', '#a855f7', '#f59e0b', '#ec4899', '#14b8a6', '#ef4444'];

  let data = { profiles: {}, current: null, lang: null };
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) data = Object.assign(data, JSON.parse(raw));
  } catch (e) { /* storage non disponibile: si lavora in memoria */ }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* ignora */ }
  }
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const today = () => new Date().toISOString().slice(0, 10);

  const Store = {
    AVATARS, COLORS,
    profiles() { return Object.values(data.profiles).sort((a, b) => a.created - b.created); },
    current() { return data.profiles[data.current] || null; },
    get(id) { return data.profiles[id]; },
    select(id) { data.current = id; save(); },
    logout() { data.current = null; save(); },
    getLang() { const p = this.current(); return (p && p.lang) || data.lang || null; },
    setLang(l) { data.lang = l; const p = this.current(); if (p) p.lang = l; save(); },
    create({ name, avatar, year, lang }) {
      const id = uid();
      data.profiles[id] = {
        id, name, avatar, year, lang, created: Date.now(),
        color: COLORS[Object.keys(data.profiles).length % COLORS.length],
        topics: {}, log: [], days: []
      };
      data.current = id; save();
      return data.profiles[id];
    },
    update(id, fields) { Object.assign(data.profiles[id], fields); save(); },
    remove(id) { delete data.profiles[id]; if (data.current === id) data.current = null; save(); },

    /* ---- avanzamento ---- */
    topic(id) {
      const p = this.current(); if (!p) return {};
      return p.topics[id] || {};
    },
    _t(id) {
      const p = this.current(); if (!p) return null;
      if (!p.topics[id]) p.topics[id] = { visits: 0, quizzes: {} };
      return p.topics[id];
    },
    _log(ev) {
      const p = this.current(); if (!p) return;
      ev.at = Date.now();
      p.log.unshift(ev);
      if (p.log.length > 500) p.log.length = 500;
      const d = today();
      if (!p.days.includes(d)) p.days.push(d);
    },
    visit(id) {
      const t = this._t(id); if (!t) return;
      t.visits++; t.lastVisit = Date.now();
      const p = this.current();
      const last = p.log[0];
      if (!(last && last.type === 'visit' && last.topic === id && Date.now() - last.at < 3600e3)) this._log({ type: 'visit', topic: id });
      save();
    },
    markDone(id, done) {
      const t = this._t(id); if (!t) return;
      t.done = done; t.doneAt = done ? Date.now() : null;
      if (done) this._log({ type: 'done', topic: id });
      save();
    },
    quizResult(id, key, ok, n) {
      const t = this._t(id); if (!t) return;
      const p = n ? Math.round((ok / n) * 100) : 0;
      t.quizzes[key] = Math.max(t.quizzes[key] || 0, p);
      this._log({ type: 'quiz', topic: id, score: p });
      save();
    },
    practiceResult(id, ok, n) {
      const t = this._t(id); if (!t) return;
      t.practice = (t.practice || 0) + n; t.practiceOk = (t.practiceOk || 0) + ok;
      this._log({ type: 'practice', topic: id, score: Math.round((ok / n) * 100) });
      save();
    },
    verificaResult(id, ok, n, passed) {
      const t = this._t(id); if (!t) return;
      const p = Math.round((ok / n) * 100);
      t.attempts = (t.attempts || 0) + 1;
      t.best = Math.max(t.best || 0, p);
      t.lastScore = p;
      if (passed && !t.passedAt) t.passedAt = Date.now();
      if (passed) { t.done = true; t.doneAt = t.doneAt || Date.now(); }
      this._log({ type: 'verifica', topic: id, score: p, passed });
      save();
    },
    status(id) {
      const t = this.topic(id);
      if (t.passedAt) return 'passed';
      if (t.done) return 'done';
      if (t.visits) return 'seen';
      return 'todo';
    },

    /* ---- backup ---- */
    exportJSON() {
      return JSON.stringify({ app: 'zainetto', version: 1, exported: new Date().toISOString(), profiles: data.profiles }, null, 2);
    },
    importJSON(text) {
      const obj = JSON.parse(text);
      if (!obj || obj.app !== 'zainetto' || typeof obj.profiles !== 'object') throw new Error('bad');
      let n = 0;
      for (const [id, p] of Object.entries(obj.profiles)) {
        if (!p || !p.name) continue;
        p.topics = p.topics || {}; p.log = p.log || []; p.days = p.days || [];
        data.profiles[id] = p; n++;
      }
      save();
      return n;
    }
  };
  window.Store = Store;
})();
