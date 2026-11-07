/* Zainetto · Coding divertente (#/coding)
   - "Il robot" (primaria): mondo a griglia e programmi a blocchi.
   - "La tartaruga" (medie): Logo con interprete scritto a mano (niente eval/Function: va bene anche con CSP rigida).
   Livelli e sfide in data/coding/*.js (caricati quando servono); formati in data/coding/CODING.md. */
(function () {
  'use strict';
  const W = (typeof window !== 'undefined') ? window : globalThis;

  /* =====================================================================
     MOTORE DEL ROBOT
     ===================================================================== */
  const DIRS = [[0, -1], [1, 0], [0, 1], [-1, 0]]; // N E S O
  const DIR_OF = { N: 0, E: 1, S: 2, W: 3, O: 3 };
  const ROBOT_LIMIT = 800; // passi massimi prima che il robot "si stanchi"

  function makeWorld(lv) {
    const H = lv.map.length, Wd = Math.max(...lv.map.map((r) => r.length));
    const w = { W: Wd, H, cells: [], items: {}, coinsTotal: 0, coins: 0, keys: 0, opened: {}, x: 0, y: 0, d: DIR_OF[lv.dir || 'E'], won: false, fail: null, done: false };
    for (let y = 0; y < H; y++) {
      const row = [];
      for (let x = 0; x < Wd; x++) {
        let c = lv.map[y][x] || 'T';
        if (c === 'R') { w.x = x; w.y = y; c = '.'; }
        if (c === 'c' || c === 'k') { w.items[x + ',' + y] = c; if (c === 'c') w.coinsTotal++; c = '.'; }
        row.push(c);
      }
      w.cells.push(row);
    }
    return w;
  }
  const cellAt = (w, x, y) => (x < 0 || y < 0 || x >= w.W || y >= w.H) ? null : w.cells[y][x];
  const isObstacle = (c) => c === null || c === '#' || c === 'T';
  function ahead(w, turn) { const d = (w.d + (turn || 0) + 4) % 4; return [w.x + DIRS[d][0], w.y + DIRS[d][1]]; }
  function blockedAt(w, x, y) {
    const c = cellAt(w, x, y);
    if (isObstacle(c)) return true;
    if (c === 'D' && !w.opened[x + ',' + y] && w.keys === 0) return true;
    return false;
  }
  function cond(w, c) {
    const [ax, ay] = ahead(w);
    switch (c) {
      case 'wall': return blockedAt(w, ax, ay);
      case 'water': return cellAt(w, ax, ay) === '~';
      case 'coin': return !!w.items[w.x + ',' + w.y];
      case 'pathR': { const [x, y] = ahead(w, 1); return !blockedAt(w, x, y) && cellAt(w, x, y) !== '~'; }
      case 'pathL': { const [x, y] = ahead(w, -1); return !blockedAt(w, x, y) && cellAt(w, x, y) !== '~'; }
    }
    return false;
  }
  function checkWin(w) {
    if (cellAt(w, w.x, w.y) === '*' && w.coins === w.coinsTotal) { w.won = true; w.done = true; }
  }
  /* un'azione: restituisce l'evento da animare */
  function act(w, t) {
    if (t === 'left') { w.d = (w.d + 3) % 4; return { ev: 'turn', by: -1 }; }
    if (t === 'right') { w.d = (w.d + 1) % 4; return { ev: 'turn', by: 1 }; }
    if (t === 'pick') {
      const k = w.x + ',' + w.y, it = w.items[k];
      if (!it) { w.fail = 'nothing'; w.done = true; return { ev: 'fail', why: 'nothing' }; }
      delete w.items[k];
      if (it === 'c') w.coins++; else w.keys++;
      checkWin(w);
      return { ev: 'pick', item: it, x: w.x, y: w.y };
    }
    if (t === 'fwd') {
      const [nx, ny] = ahead(w), c = cellAt(w, nx, ny);
      if (isObstacle(c)) { w.fail = 'wall'; w.done = true; return { ev: 'fail', why: 'wall' }; }
      let opened = null;
      if (c === 'D' && !w.opened[nx + ',' + ny]) {
        if (!w.keys) { w.fail = 'door'; w.done = true; return { ev: 'fail', why: 'door' }; }
        w.keys--; w.opened[nx + ',' + ny] = true; opened = [nx, ny];
      }
      w.x = nx; w.y = ny;
      if (c === '~') { w.fail = 'water'; w.done = true; return { ev: 'fail', why: 'water', moved: true }; }
      checkWin(w);
      return { ev: 'move', opened };
    }
    return { ev: 'none' };
  }
  /* esecuzione a passi: generatore di eventi {node, ev, ...} */
  function* runRobot(w, prog) {
    const ctx = { ticks: 0, depth: 0 };
    const tick = () => { if (++ctx.ticks > ROBOT_LIMIT) { w.fail = 'tired'; w.done = true; return false; } return true; };
    function* list(arr) { for (const n of arr) { if (w.done) return; yield* stmt(n); } }
    function* stmt(n) {
      if (!tick()) { yield { node: n, ev: 'fail', why: 'tired' }; return; }
      switch (n.t) {
        case 'fwd': case 'left': case 'right': case 'pick': yield Object.assign({ node: n }, act(w, n.t)); return;
        case 'rep':
          for (let i = 0; i < n.n && !w.done; i++) { yield { node: n, ev: 'loop', i }; yield* list(n.body); if (!w.done && !tick()) { yield { node: n, ev: 'fail', why: 'tired' }; return; } }
          return;
        case 'until':
          while (!w.done) {
            yield { node: n, ev: 'loop' };
            if (!n.body.length) { w.fail = 'tired'; w.done = true; yield { node: n, ev: 'fail', why: 'tired' }; return; }
            yield* list(n.body);
            if (!w.done && !tick()) { yield { node: n, ev: 'fail', why: 'tired' }; return; }
          }
          return;
        case 'if': { const ok = cond(w, n.c); yield { node: n, ev: 'check', ok }; yield* list(ok ? n.then : n.else); return; }
        case 'call':
          if (++ctx.depth > 60) { w.fail = 'tired'; w.done = true; yield { node: n, ev: 'fail', why: 'tired' }; return; }
          yield { node: n, ev: 'call' }; yield* list(prog.fn || []); ctx.depth--; return;
      }
    }
    yield* list(prog.main);
  }
  const countBlocks = (arr) => arr.reduce((s, n) => s + 1 + (n.body ? countBlocks(n.body) : 0) + (n.then ? countBlocks(n.then) + countBlocks(n.else) : 0), 0);
  const progCount = (p) => countBlocks(p.main) + countBlocks(p.fn || []);
  /* soluzioni compatte dei livelli -> nodi del programma */
  const SHORT = { F: 'fwd', L: 'left', R: 'right', P: 'pick', C: 'call' };
  function fromShort(arr) {
    return (arr || []).map((s) => {
      if (typeof s === 'string') return { t: SHORT[s] };
      if (s[0] === 'rep') return { t: 'rep', n: s[1], body: fromShort(s[2]) };
      if (s[0] === 'until') return { t: 'until', body: fromShort(s[1]) };
      if (s[0] === 'if') return { t: 'if', c: s[1], then: fromShort(s[2]), else: fromShort(s[3]) };
      return null;
    }).filter(Boolean);
  }
  function solveRobot(lv, prog) { const w = makeWorld(lv); const g = runRobot(w, prog); while (!g.next().done && !w.done); return w; }

  /* =====================================================================
     INTERPRETE LOGO (italiano + inglese)
     ===================================================================== */
  const deacc = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const CMD = {
    avanti: 'fd', av: 'fd', forward: 'fd', fd: 'fd', indietro: 'bk', ind: 'bk', back: 'bk', bk: 'bk', backward: 'bk',
    destra: 'rt', de: 'rt', dx: 'rt', right: 'rt', rt: 'rt', sinistra: 'lt', si: 'lt', sx: 'lt', left: 'lt', lt: 'lt',
    pennasu: 'pu', alzapenna: 'pu', penup: 'pu', pu: 'pu', pennagiu: 'pd', abbassapenna: 'pd', pendown: 'pd', pd: 'pd',
    penna: 'pen', pen: 'pen',
    colore: 'color', color: 'color', setcolor: 'color', setpc: 'color', pc: 'color',
    spessore: 'width', width: 'width', setwidth: 'width', setpensize: 'width', pensize: 'width',
    ripeti: 'repeat', repeat: 'repeat', metti: 'make', make: 'make', assegna: 'make',
    per: 'to', to: 'to', fine: 'end', end: 'end', se: 'if', if: 'if', sealtrimenti: 'ifelse', ifelse: 'ifelse',
    altrimenti: 'else', else: 'else', stop: 'stop', ferma: 'stop',
    cancella: 'clear', pulisci: 'clear', clear: 'clear', cs: 'clear', clearscreen: 'clear',
    casa: 'home', home: 'home', centro: 'home',
    nascondi: 'ht', hideturtle: 'ht', ht: 'ht', mostra: 'st', showturtle: 'st', st: 'st',
    vai: 'setxy', vaia: 'setxy', setxy: 'setxy', setpos: 'setxy',
    direzione: 'seth', setheading: 'seth', seth: 'seth'
  };
  const FUNCS = {
    casuale: ['random', 1], random: ['random', 1], radice: ['sqrt', 1], radq: ['sqrt', 1], sqrt: ['sqrt', 1],
    seno: ['sin', 1], sen: ['sin', 1], sin: ['sin', 1], coseno: ['cos', 1], cos: ['cos', 1],
    arrotonda: ['round', 1], round: ['round', 1], intero: ['int', 1], int: ['int', 1], assoluto: ['abs', 1], abs: ['abs', 1],
    ripetizione: ['repcount', 0], repcount: ['repcount', 0]
  };
  const COLORS = {
    nero: '#1e293b', black: '#1e293b', bianco: '#ffffff', white: '#ffffff', rosso: '#ef4444', red: '#ef4444',
    verde: '#16a34a', green: '#16a34a', blu: '#2563eb', blue: '#2563eb', giallo: '#eab308', yellow: '#eab308',
    arancione: '#f97316', orange: '#f97316', viola: '#9333ea', purple: '#9333ea', violet: '#9333ea',
    rosa: '#ec4899', pink: '#ec4899', marrone: '#92400e', brown: '#92400e', grigio: '#64748b', gray: '#64748b', grey: '#64748b',
    azzurro: '#0ea5e9', cyan: '#06b6d4', celeste: '#38bdf8', lightblue: '#38bdf8', oro: '#d4a017', gold: '#d4a017',
    turchese: '#14b8a6', teal: '#14b8a6', magenta: '#d946ef', lime: '#84cc16', lilla: '#c084fc'
  };
  const PALETTE = ['#1e293b', '#2563eb', '#16a34a', '#06b6d4', '#ef4444', '#d946ef', '#eab308', '#ffffff', '#92400e', '#c2410c', '#84cc16', '#14b8a6', '#38bdf8', '#9333ea', '#f97316', '#64748b'];
  const KNOWN_WORDS = Object.keys(CMD).concat(Object.keys(FUNCS));

  class LogoError { constructor(line, key, vars) { this.line = line; this.key = key; this.vars = vars || {}; } }
  const STOP = { stop: true };

  function tokenize(src) {
    const toks = []; let i = 0, line = 1; const n = src.length;
    const isL = (c) => /[\p{L}_]/u.test(c), isLN = (c) => /[\p{L}\p{N}_]/u.test(c);
    while (i < n) {
      const c = src[i];
      if (c === '\n') { line++; i++; continue; }
      if (/\s/.test(c)) { i++; continue; }
      if (c === ';' || (c === '/' && src[i + 1] === '/')) { while (i < n && src[i] !== '\n') i++; continue; }
      if (/[0-9]/.test(c) || (c === '.' && /[0-9]/.test(src[i + 1] || ''))) {
        let j = i; while (j < n && /[0-9.,]/.test(src[j])) { if (src[j] === ',' && !/[0-9]/.test(src[j + 1] || '')) break; j++; }
        const raw = src.slice(i, j).replace(',', '.');
        const v = parseFloat(raw); if (isNaN(v) || /\..*\./.test(raw)) throw new LogoError(line, 'lg.err.badnum', { w: src.slice(i, j) });
        toks.push({ t: 'num', v, line }); i = j; continue;
      }
      if ('[]()'.includes(c)) { toks.push({ t: c, line }); i++; continue; }
      if ('+-*/%^'.includes(c)) {
        /* "avanti 10 -5": un meno attaccato al numero ma staccato da prima è un segno, non una sottrazione */
        const neg = c === '-' && i > 0 && /\s/.test(src[i - 1]) && /[0-9.:(]/.test(src[i + 1] || '');
        toks.push({ t: 'op', v: c, line, neg }); i++; continue;
      }
      if (c === '<' || c === '>' || c === '=' || c === '!') {
        const two = src.slice(i, i + 2);
        if (['<=', '>=', '<>', '!=', '=='].includes(two)) { toks.push({ t: 'op', v: two === '!=' ? '<>' : two === '==' ? '=' : two, line }); i += 2; continue; }
        if (c === '!') throw new LogoError(line, 'lg.err.char', { w: c });
        toks.push({ t: 'op', v: c, line }); i++; continue;
      }
      if (c === ':' || c === '"') {
        let j = i + 1; while (j < n && isLN(src[j])) j++;
        if (j === i + 1) throw new LogoError(line, c === ':' ? 'lg.err.colon' : 'lg.err.quote');
        toks.push({ t: c === ':' ? 'var' : 'quote', v: deacc(src.slice(i + 1, j)), line }); i = j; continue;
      }
      if (c === '#') {
        let j = i + 1; while (j < n && /[0-9a-fA-F]/.test(src[j])) j++;
        const hex = src.slice(i, j);
        if (hex.length !== 4 && hex.length !== 7) throw new LogoError(line, 'lg.err.hex', { w: hex });
        toks.push({ t: 'hex', v: hex, line }); i = j; continue;
      }
      if (isL(c)) {
        let j = i; while (j < n && isLN(src[j])) j++;
        const raw = src.slice(i, j);
        toks.push({ t: 'word', v: deacc(raw), raw, line }); i = j; continue;
      }
      throw new LogoError(line, 'lg.err.char', { w: c });
    }
    return toks;
  }

  function lev(a, b) {
    const m = a.length, n = b.length; const d = Array.from({ length: m + 1 }, (_, i) => [i]);
    for (let j = 1; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  }
  function suggest(w, extra) {
    let best = null, bd = 99;
    for (const k of KNOWN_WORDS.concat(extra)) { if (k.length < 3) continue; const d = lev(w, k); if (d < bd) { bd = d; best = k; } }
    return bd <= Math.max(1, Math.floor(w.length / 3)) ? best : null;
  }

  function parseLogo(src) {
    const toks = tokenize(src);
    const procs = {};
    const used = { repeat: false, to: false, make: false, if: false, recursion: false };
    /* pre-lettura: nomi e parametri delle procedure (si possono usare prima della definizione) */
    for (let i = 0; i < toks.length; i++) {
      if (toks[i].t === 'word' && CMD[toks[i].v] === 'to') {
        const nm = toks[i + 1];
        if (!nm || nm.t !== 'word') throw new LogoError(toks[i].line, 'lg.err.toname');
        if (CMD[nm.v] || FUNCS[nm.v]) throw new LogoError(nm.line, 'lg.err.toreserved', { w: nm.raw });
        const params = []; let j = i + 2;
        while (j < toks.length && toks[j].t === 'var' && toks[j].line === nm.line) params.push(toks[j++].v);
        procs[nm.v] = { name: nm.v, raw: nm.raw, params, body: null, line: toks[i].line };
      }
    }
    let p = 0, inProc = null;
    const peek = () => toks[p], next = () => toks[p++];
    const lastLine = () => (toks[p - 1] || toks[0] || { line: 1 }).line;

    function parseBlock(openTok) {
      const body = [];
      while (true) {
        const tk = peek();
        if (!tk) throw new LogoError(openTok.line, 'lg.err.noclose');
        if (tk.t === ']') { next(); return body; }
        const s = parseStatement(); if (s) body.push(s);
      }
    }
    function expectBlock(cmdWord) {
      const tk = peek();
      if (!tk || tk.t !== '[') throw new LogoError(tk ? tk.line : lastLine(), 'lg.err.needblock', { c: cmdWord });
      next(); return parseBlock(tk);
    }
    function parseStatement() {
      const tk = next();
      if (tk.t === ']') throw new LogoError(tk.line, 'lg.err.extraclose');
      if (tk.t === '[') throw new LogoError(tk.line, 'lg.err.strayopen');
      if (tk.t !== 'word') throw new LogoError(tk.line, 'lg.err.nocmd', { w: tk.t === 'num' ? tk.v : (tk.v || tk.t) });
      const w = tk.v, line = tk.line;
      let k = CMD[w];
      if (procs[w] && !k) {
        const pr = procs[w]; const args = [];
        for (let i = 0; i < pr.params.length; i++) args.push(parseExpr(tk.raw, line));
        if (inProc && inProc === pr) used.recursion = true;
        return { k: 'call', name: w, args, line };
      }
      if (!k) {
        if (FUNCS[w]) throw new LogoError(line, 'lg.err.funcalone', { w: tk.raw });
        const s = suggest(w, Object.keys(procs));
        throw new LogoError(line, s ? 'lg.err.unknownS' : 'lg.err.unknown', { w: tk.raw, s });
      }
      if (k === 'pen') {
        const a = next();
        const v = a && a.t === 'word' ? a.v : '';
        if (v === 'su' || v === 'up') k = 'pu'; else if (v === 'giu' || v === 'down') k = 'pd';
        else throw new LogoError(line, 'lg.err.pen');
      }
      switch (k) {
        case 'fd': case 'bk': case 'rt': case 'lt': case 'width': case 'seth':
          return { k, a: parseExpr(tk.raw, line), line };
        case 'setxy': return { k, a: parseExpr(tk.raw, line), b: parseExpr(tk.raw, line), line };
        case 'pu': case 'pd': case 'clear': case 'home': case 'ht': case 'st': case 'stop': return { k, line };
        case 'color': {
          const a = peek();
          if (a && a.t === 'hex') { next(); return { k, lit: a.v, line }; }
          if (a && (a.t === 'word' || a.t === 'quote') && COLORS[a.v]) { next(); return { k, lit: COLORS[a.v], line }; }
          if (a && a.t === 'word' && !FUNCS[a.v] && !CMD[a.v] && !procs[a.v] && a.line === line && a.v.length > 2) {
            const s = suggest(a.v, []) ; const c = Object.keys(COLORS).find((k) => lev(k, a.v) <= 2);
            throw new LogoError(line, c ? 'lg.err.colorS' : 'lg.err.color', { w: a.raw, s: c || s });
          }
          return { k, a: parseExpr(tk.raw, line), line };
        }
        case 'repeat': { used.repeat = true; const a = parseExpr(tk.raw, line); return { k, a, body: expectBlock(tk.raw), line }; }
        case 'make': {
          used.make = true;
          const a = next();
          if (!a || !(a.t === 'word' || a.t === 'quote' || a.t === 'var')) throw new LogoError(line, 'lg.err.makename');
          if (a.t === 'word' && CMD[a.v]) throw new LogoError(line, 'lg.err.makereserved', { w: a.raw });
          return { k, name: a.v, a: parseExpr(tk.raw, line), line };
        }
        case 'if': {
          used.if = true;
          const c = parseExpr(tk.raw, line); const body = expectBlock(tk.raw); let els = null;
          const e = peek(); if (e && e.t === 'word' && CMD[e.v] === 'else') { next(); els = expectBlock(e.raw); }
          return { k: 'if', c, body, els, line };
        }
        case 'ifelse': { used.if = true; const c = parseExpr(tk.raw, line); const body = expectBlock(tk.raw); const els = expectBlock(tk.raw); return { k: 'if', c, body, els, line }; }
        case 'else': throw new LogoError(line, 'lg.err.else');
        case 'to': {
          if (inProc) throw new LogoError(line, 'lg.err.tonested');
          used.to = true;
          const nm = next(); const pr = procs[nm.v];
          while (peek() && peek().t === 'var' && peek().line === nm.line) next();
          inProc = pr; const body = [];
          while (true) {
            const t2 = peek();
            if (!t2) throw new LogoError(line, 'lg.err.noend', { w: nm.raw });
            if (t2.t === 'word' && CMD[t2.v] === 'end') { next(); break; }
            const s = parseStatement(); if (s) body.push(s);
          }
          pr.body = body; inProc = null; return null;
        }
        case 'end': throw new LogoError(line, 'lg.err.endalone');
      }
      throw new LogoError(line, 'lg.err.unknown', { w: tk.raw });
    }
    /* espressioni: confronto < somma < prodotto < unario < primario */
    function parseExpr(cmd, line) { return parseCmp(cmd, line); }
    function parseCmp(cmd, line) {
      let l = parseAdd(cmd, line);
      while (peek() && peek().t === 'op' && ['<', '>', '=', '<=', '>=', '<>'].includes(peek().v)) { const op = next().v; l = { e: 'bin', op, l, r: parseAdd(cmd, line) }; }
      return l;
    }
    function parseAdd(cmd, line) {
      let l = parseMul(cmd, line);
      while (peek() && peek().t === 'op' && (peek().v === '+' || (peek().v === '-' && !peek().neg))) { const op = next().v; l = { e: 'bin', op, l, r: parseMul(cmd, line) }; }
      return l;
    }
    function parseMul(cmd, line) {
      let l = parseUnary(cmd, line);
      while (peek() && peek().t === 'op' && ['*', '/', '%', '^'].includes(peek().v)) { const op = next().v; l = { e: 'bin', op, l, r: parseUnary(cmd, line) }; }
      return l;
    }
    function parseUnary(cmd, line) {
      const tk = peek();
      if (tk && tk.t === 'op' && tk.v === '-') { next(); return { e: 'neg', a: parseUnary(cmd, line) }; }
      if (tk && tk.t === 'op' && tk.v === '+') { next(); return parseUnary(cmd, line); }
      return parsePrimary(cmd, line);
    }
    function parsePrimary(cmd, line) {
      const tk = peek();
      if (!tk || tk.t === ']' || tk.t === '[' || (tk.t === 'word' && (CMD[tk.v] || procs[tk.v]) && !FUNCS[tk.v])) throw new LogoError(tk && tk.t !== ']' ? Math.min(tk.line, line) : line, 'lg.err.neednum', { c: cmd });
      next();
      if (tk.t === 'num') return { e: 'num', v: tk.v };
      if (tk.t === 'var') return { e: 'var', name: tk.v, line: tk.line };
      if (tk.t === '(') {
        const x = parseExpr(cmd, line); const c = next();
        if (!c || c.t !== ')') throw new LogoError(tk.line, 'lg.err.paren');
        return x;
      }
      if (tk.t === 'word' && FUNCS[tk.v]) {
        const [fn, ar] = FUNCS[tk.v]; const args = [];
        for (let i = 0; i < ar; i++) args.push(parseUnary(tk.raw, tk.line));
        return { e: 'fn', fn, args, line: tk.line };
      }
      if (tk.t === 'word') return { e: 'var', name: tk.v, bare: true, line: tk.line };
      if (tk.t === 'quote') return { e: 'var', name: tk.v, line: tk.line };
      throw new LogoError(tk.line, 'lg.err.neednum', { c: cmd });
    }
    const prog = [];
    while (p < toks.length) { const s = parseStatement(); if (s) prog.push(s); }
    return { prog, procs, used };
  }

  const LOGO_MAX_STEPS = 300000, LOGO_MAX_OPS = 80000, LOGO_MAX_DEPTH = 400;
  /* esegue e restituisce le operazioni da disegnare (segmenti e giri) */
  function runLogo(src, opts) {
    opts = opts || {};
    const rnd = opts.random || Math.random;
    const st = { x: 0, y: 0, h: 0, pen: true, color: '#1e293b', width: 2, visible: true };
    const ops = []; let steps = 0, depth = 0; const reps = []; const globals = {};
    let parsed = null, error = null;
    try { parsed = parseLogo(src); } catch (e) { if (e instanceof LogoError) return { ops, error: e, state: st, used: {} }; throw e; }
    const { prog, procs } = parsed;
    function lookup(name, scopes, line, bare) {
      for (let i = scopes.length - 1; i >= 0; i--) if (name in scopes[i]) return scopes[i][name];
      if (name in globals) return globals[name];
      if (bare) { const s = suggest(name, Object.keys(procs)); throw new LogoError(line, s ? 'lg.err.unknownS' : 'lg.err.unknown', { w: name, s }); }
      throw new LogoError(line, 'lg.err.novar', { w: name });
    }
    function ev(x, sc, line) {
      switch (x.e) {
        case 'num': return x.v;
        case 'var': return lookup(x.name, sc, x.line || line, x.bare);
        case 'neg': return -ev(x.a, sc, line);
        case 'fn': {
          const a = x.args.map((y) => ev(y, sc, line));
          switch (x.fn) {
            case 'random': return Math.floor(rnd() * Math.max(0, Math.floor(a[0])));
            case 'sqrt': if (a[0] < 0) throw new LogoError(line, 'lg.err.sqrt'); return Math.sqrt(a[0]);
            case 'sin': return Math.sin(a[0] * Math.PI / 180);
            case 'cos': return Math.cos(a[0] * Math.PI / 180);
            case 'round': return Math.round(a[0]);
            case 'int': return Math.trunc(a[0]);
            case 'abs': return Math.abs(a[0]);
            case 'repcount': return reps.length ? reps[reps.length - 1] : 0;
          }
          return 0;
        }
        case 'bin': {
          const l = ev(x.l, sc, line), r = ev(x.r, sc, line);
          switch (x.op) {
            case '+': return l + r; case '-': return l - r; case '*': return l * r;
            case '/': if (r === 0) throw new LogoError(line, 'lg.err.div0'); return l / r;
            case '%': if (r === 0) throw new LogoError(line, 'lg.err.div0'); return ((l % r) + r) % r;
            case '^': return Math.pow(l, r);
            case '<': return l < r ? 1 : 0; case '>': return l > r ? 1 : 0; case '=': return Math.abs(l - r) < 1e-9 ? 1 : 0;
            case '<=': return l <= r ? 1 : 0; case '>=': return l >= r ? 1 : 0; case '<>': return Math.abs(l - r) >= 1e-9 ? 1 : 0;
          }
        }
      }
      return 0;
    }
    const num = (x, sc, s) => { const v = ev(x, sc, s.line); if (!isFinite(v)) throw new LogoError(s.line, 'lg.err.big'); return v; };
    function moveTo(nx, ny, line) {
      if (Math.abs(nx) > 1e6 || Math.abs(ny) > 1e6) throw new LogoError(line, 'lg.err.big');
      ops.push({ k: 'move', x0: st.x, y0: st.y, x1: nx, y1: ny, pen: st.pen, color: st.color, width: st.width, line });
      st.x = nx; st.y = ny;
      if (ops.length > LOGO_MAX_OPS) throw new LogoError(line, 'lg.err.toolong');
    }
    function turn(to, line) { ops.push({ k: 'turn', h0: st.h, h1: to, line }); st.h = to; }
    function exec(list, sc) {
      for (const s of list) {
        if (++steps > LOGO_MAX_STEPS) throw new LogoError(s.line, 'lg.err.toolong');
        switch (s.k) {
          case 'fd': case 'bk': {
            const d = num(s.a, sc, s) * (s.k === 'bk' ? -1 : 1); const r = st.h * Math.PI / 180;
            moveTo(st.x + d * Math.sin(r), st.y + d * Math.cos(r), s.line); break;
          }
          case 'rt': turn(st.h + num(s.a, sc, s), s.line); break;
          case 'lt': turn(st.h - num(s.a, sc, s), s.line); break;
          case 'seth': turn(num(s.a, sc, s), s.line); break;
          case 'setxy': moveTo(num(s.a, sc, s), num(s.b, sc, s), s.line); break;
          case 'home': moveTo(0, 0, s.line); turn(0, s.line); break;
          case 'pu': st.pen = false; break;
          case 'pd': st.pen = true; break;
          case 'ht': st.visible = false; ops.push({ k: 'vis', v: false }); break;
          case 'st': st.visible = true; ops.push({ k: 'vis', v: true }); break;
          case 'width': { const v = num(s.a, sc, s); if (v < 0 || v > 60) throw new LogoError(s.line, 'lg.err.width'); st.width = v; break; }
          case 'color': st.color = s.lit || PALETTE[((Math.floor(num(s.a, sc, s)) % 16) + 16) % 16]; break;
          case 'clear': ops.push({ k: 'clear' }); st.x = 0; st.y = 0; st.h = 0; break;
          case 'make': {
            const v = ev(s.a, sc, s.line);
            let done = false;
            for (let i = sc.length - 1; i >= 0; i--) if (s.name in sc[i]) { sc[i][s.name] = v; done = true; break; }
            if (!done) globals[s.name] = v;
            break;
          }
          case 'repeat': {
            const n = Math.floor(num(s.a, sc, s));
            if (n < 0) throw new LogoError(s.line, 'lg.err.negrep');
            for (let i = 1; i <= n; i++) { reps.push(i); try { exec(s.body, sc); } finally { reps.pop(); } }
            break;
          }
          case 'if': if (ev(s.c, sc, s.line)) exec(s.body, sc); else if (s.els) exec(s.els, sc); break;
          case 'stop': throw STOP;
          case 'call': {
            const pr = procs[s.name];
            const loc = {}; pr.params.forEach((nm, i) => { loc[nm] = ev(s.args[i], sc, s.line); });
            if (++depth > LOGO_MAX_DEPTH) throw new LogoError(s.line, 'lg.err.deep', { w: pr.raw });
            try { exec(pr.body, sc.concat([loc])); } catch (e) { if (e !== STOP) throw e; } finally { depth--; }
            break;
          }
        }
      }
    }
    try { exec(prog, []); } catch (e) { if (e === STOP) { /* stop nel programma principale */ } else if (e instanceof LogoError) error = e; else if (e instanceof RangeError) error = new LogoError(1, 'lg.err.deep', { w: '' }); else throw e; }
    return { ops, error, state: st, used: parsed.used };
  }
  /* segmenti disegnati (dopo l'ultimo "cancella") */
  function segmentsOf(ops) {
    let segs = [];
    for (const o of ops) {
      if (o.k === 'clear') segs = [];
      else if (o.k === 'move' && o.pen && Math.hypot(o.x1 - o.x0, o.y1 - o.y0) > 0.01) segs.push([o.x0, o.y0, o.x1, o.y1]);
    }
    return segs;
  }
  function sample(segs, step) {
    const pts = [];
    for (const [a, b, c, d] of segs) {
      const L = Math.hypot(c - a, d - b), n = Math.max(1, Math.ceil(L / step));
      for (let i = 0; i <= n; i++) pts.push([a + (c - a) * i / n, b + (d - b) * i / n]);
    }
    return pts;
  }
  function distSeg(px, py, s) {
    const [a, b, c, d] = s, vx = c - a, vy = d - b, L2 = vx * vx + vy * vy;
    let t = L2 ? ((px - a) * vx + (py - b) * vy) / L2 : 0; t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - a - t * vx, py - b - t * vy);
  }
  function coverage(pts, segs, tol) {
    if (!pts.length) return 0; let ok = 0;
    for (const [x, y] of pts) { for (const s of segs) if (distSeg(x, y, s) <= tol) { ok++; break; } }
    return ok / pts.length;
  }
  function bboxCenter(segs) {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const s of segs) { x0 = Math.min(x0, s[0], s[2]); x1 = Math.max(x1, s[0], s[2]); y0 = Math.min(y0, s[1], s[3]); y1 = Math.max(y1, s[1], s[3]); }
    return [(x0 + x1) / 2, (y0 + y1) / 2];
  }
  /* confronto con tolleranza: posizione libera, rotazioni di 90° e specchio ammessi */
  function compareDrawing(drawn, target, tol) {
    tol = tol || 5;
    if (!drawn.length || !target.length) return { ok: false, score: 0 };
    const [tcx, tcy] = bboxCenter(target), [dcx, dcy] = bboxCenter(drawn);
    const T = target.map((s) => [s[0] - tcx, s[1] - tcy, s[2] - tcx, s[3] - tcy]);
    const tp = sample(T, 3);
    let best = 0;
    const tf = [(x, y) => [x, y], (x, y) => [-y, x], (x, y) => [-x, -y], (x, y) => [y, -x]];
    for (const mirror of [1, -1]) for (const f of tf) {
      const D = drawn.map((s) => { const p = f((s[0] - dcx) * mirror, s[1] - dcy), q = f((s[2] - dcx) * mirror, s[3] - dcy); return [p[0], p[1], q[0], q[1]]; });
      const rec = coverage(tp, D, tol); if (rec < 0.8) { best = Math.max(best, rec * 0.9); continue; }
      const prec = coverage(sample(D, 3), T, tol);
      best = Math.max(best, Math.min(rec, prec));
      if (best >= 0.96) return { ok: true, score: best };
    }
    return { ok: best >= 0.96, score: best };
  }

  W.Coding = { makeWorld, runRobot, solveRobot, countBlocks, progCount, fromShort, cond, tokenize, parseLogo, runLogo, segmentsOf, compareDrawing, COLORS, PALETTE, LogoError };

  /* =====================================================================
     TESTI DELL'INTERFACCIA (5 lingue)
     ===================================================================== */
  const TXT = {
    it: {
      'cd.title': 'Coding divertente', 'cd.robot': 'Il robot', 'cd.turtle': 'La tartaruga',
      'cd.hub.lead': 'Impara a programmare giocando: guida un robot con i blocchi o fai disegnare una tartaruga scrivendo codice vero.',
      'cd.hub.rec': 'Consigliato per te', 'cd.hub.primaria': 'Scuola primaria · blocchi', 'cd.hub.medie': 'Scuola media · codice Logo',
      'cd.hub.robotDesc': 'Porta il robot sulla stella: sequenze, ripetizioni, condizioni e funzioni in 34 livelli.',
      'cd.hub.turtleDesc': 'Scrivi comandi come «avanti 100» e «ripeti 4 [ … ]» e disegna stelle, spirali, alberi e frattali.',
      'cd.levelsDone': '{n} livelli su {tot}', 'cd.challDone': '{n} sfide su {tot}', 'cd.play': 'Gioca', 'cd.continue': 'Continua', 'cd.open': 'Apri',
      'cd.what.title': 'Che cos’è il coding?', 'cd.what.seqT': 'Sequenza', 'cd.what.seq': 'Un programma è una lista di istruzioni eseguite una dopo l’altra, nell’ordine giusto.',
      'cd.what.loopT': 'Ciclo', 'cd.what.loop': 'Quando una cosa si ripete, la scrivi una volta sola e dici quante volte rifarla.',
      'cd.what.ifT': 'Condizione', 'cd.what.if': 'Il programma guarda la situazione e sceglie: se succede questo… altrimenti…',
      'cd.what.fnT': 'Funzione', 'cd.what.fn': 'Dai un nome a un gruppo di istruzioni e usalo come un comando nuovo.',
      'cd.robot.mapLead': 'Ogni livello ti insegna qualcosa di nuovo. Usa pochi blocchi per vincere 3 stelle!',
      'cd.level': 'Livello {n}', 'cd.run': 'Esegui', 'cd.pause': 'Pausa', 'cd.step': 'Passo', 'cd.stepT': 'Esegui un blocco alla volta', 'cd.resetT': 'Ricomincia',
      'cd.speed': 'Velocità', 'cd.blocks': 'Blocchi', 'cd.blocksHelp': 'tocca per aggiungere', 'cd.program': 'Programma',
      'cd.count': '{n} blocchi · ⭐⭐⭐ con {best}', 'cd.fnHelp': 'il comando che inventi tu', 'cd.addHere': 'aggiungi qui', 'cd.tapRemove': 'Tocca per togliere',
      'cd.progEmpty': 'Il programma è vuoto. Tocca i blocchi qui sopra!', 'cd.fnEmpty': 'Tocca qui e poi aggiungi i blocchi della funzione.',
      'cd.condT': 'Tocca per cambiare la condizione', 'cd.undo': 'Annulla', 'cd.clear': 'Svuota', 'cd.hint': 'Aiutino', 'cd.solution': 'Soluzione',
      'cd.prev': 'Precedente', 'cd.next': 'Successivo', 'cd.map': 'Mappa dei livelli',
      'cd.b.fwd': 'Avanti', 'cd.b.left': 'Gira a sinistra', 'cd.b.right': 'Gira a destra', 'cd.b.pick': 'Raccogli', 'cd.b.rep': 'Ripeti', 'cd.b.times': 'volte',
      'cd.b.until': 'Ripeti fino alla stella', 'cd.b.if': 'Se', 'cd.b.else': 'altrimenti', 'cd.b.fn': 'Funzione',
      'cd.c.wall': 'c’è un muro davanti', 'cd.c.water': 'c’è acqua davanti', 'cd.c.coin': 'c’è qualcosa qui', 'cd.c.pathR': 'c’è strada a destra', 'cd.c.pathL': 'c’è strada a sinistra',
      'cd.msg.start': 'Tocca i blocchi per costruire il programma, poi premi ▶ Esegui.', 'cd.msg.ready': 'Pronto! Premi ▶ Esegui o ⏭ Passo.', 'cd.msg.running': 'Il robot sta eseguendo il programma…',
      'cd.msg.paused': 'In pausa. Premi ▶ per continuare.', 'cd.msg.max': 'In questo livello puoi usare al massimo {n} blocchi.',
      'cd.msg.solution': 'Ecco una soluzione: guardala funzionare e poi prova a rifarla da solo!',
      'cd.fail.wall': 'Bum! Il robot ha sbattuto contro un ostacolo.', 'cd.fail.door': 'La porta è chiusa: prima serve una chiave!', 'cd.fail.water': 'Splash! Il robot è caduto in acqua.',
      'cd.fail.nothing': 'Qui non c’è niente da raccogliere.', 'cd.fail.tired': 'Il robot è stanco: troppi passi! Forse una ripetizione non finisce mai.',
      'cd.end.coins': 'Il programma è finito, ma mancano ancora {n} da raccogliere.', 'cd.end.star': 'Il programma è finito, ma il robot non è sulla stella.', 'cd.end.empty': 'Il programma è vuoto: aggiungi qualche blocco!',
      'cd.win': 'Evviva! Livello completato!', 'cd.win3': 'Perfetto! Tre stelle!', 'cd.winBlocks': 'Hai usato {n} blocchi.', 'cd.winBest': 'Si può fare con {n}: ci riprovi?', 'cd.winPerfect': 'Più corto di così non si può!',
      'cd.newRecord': '★ Nuovo record!', 'cd.again': 'Riprova',
      'cd.turtle.lead': 'Scrivi il codice, premi Disegna e confronta il disegno con la figura grigia.', 'cd.free': 'Disegno libero', 'cd.freeDesc': 'Disegna quello che vuoi, senza regole',
      'cd.challenge': 'Sfida {n}', 'cd.solved': 'Risolta', 'cd.allChall': 'Tutte le sfide', 'cd.draw': 'Disegna', 'cd.stop': 'Ferma', 'cd.examples': 'Esempi', 'cd.savePng': 'Salva immagine',
      'cd.ref': 'Comandi', 'cd.ref.move': 'Muoversi', 'cd.ref.pen': 'Penna', 'cd.ref.loop': 'Ripetere e contare', 'cd.ref.proc': 'Procedure e scelte',
      'cd.ref.note': 'Funzionano anche in inglese: forward, back, right, left, penup, pendown, color, width, repeat, make "x, to … end, if, random.',
      'cd.codeLabel': 'Codice', 'cd.codePh': 'Scrivi qui i comandi, per esempio:\navanti 100\ndestra 90', 'cd.targetLegend': 'il disegno da fare',
      'cd.heading': 'direzione', 'cd.penDown': 'penna giù', 'cd.penUp': 'penna su', 'cd.lineN': 'Riga {n}:',
      'cd.need.repeat': 'usa ripeti', 'cd.need.to': 'usa per … fine', 'cd.need.make': 'usa una variabile', 'cd.need.recursion': 'usa la ricorsione',
      'cd.t.ready': 'Scrivi il codice e premi ▶ Disegna (oppure Ctrl+Invio).', 'cd.t.empty': 'Scrivi almeno un comando, per esempio avanti 100.', 'cd.t.drawing': 'La tartaruga sta disegnando…',
      'cd.t.doneFree': 'Fatto! Che bel disegno.', 'cd.t.ok': 'Bravissimo! Il disegno è giusto.', 'cd.t.no': 'Non ancora: il tuo disegno somiglia al {p}% a quello grigio. Controlla misure e angoli.',
      'cd.t.needs': 'Il disegno è giusto! Però questa sfida ti chiede di {w}.', 'cd.t.stopped': 'Fermato.', 'cd.msg.solutionT': 'Ecco una soluzione. Leggila riga per riga e prova a cambiarla!',
      'cd.loadErr': 'Non riesco a caricare i livelli. Ricarica la pagina.',
      'lg.err.unknown': 'non conosco il comando «{w}».', 'lg.err.unknownS': 'non conosco «{w}». Forse volevi scrivere «{s}»?',
      'lg.err.neednum': 'dopo «{c}» serve un numero (per esempio {c} 50).', 'lg.err.nocmd': 'non so cosa fare con «{w}». Ogni riga deve iniziare con un comando, per esempio avanti.',
      'lg.err.noclose': 'manca la parentesi quadra di chiusura «]».', 'lg.err.extraclose': 'c’è una «]» di troppo.', 'lg.err.strayopen': 'una «[» deve venire dopo un comando come ripeti.',
      'lg.err.needblock': 'dopo «{c}» serve un blocco tra parentesi quadre [ … ].', 'lg.err.paren': 'manca la parentesi tonda di chiusura «)».',
      'lg.err.novar': 'la variabile :{w} non esiste. Creala prima con «metti {w} …» oppure controlla come l’hai scritta.',
      'lg.err.makename': 'dopo «metti» scrivi il nome della variabile e poi il valore, per esempio metti lato 50.', 'lg.err.makereserved': '«{w}» è un comando: scegli un altro nome per la variabile.',
      'lg.err.pen': 'scrivi «penna su» oppure «penna giù».', 'lg.err.color': 'non conosco il colore «{w}». Prova rosso, blu, verde… o un codice come #ff8800.', 'lg.err.colorS': 'non conosco il colore «{w}». Forse volevi «{s}»?',
      'lg.err.hex': 'il colore «{w}» non va bene: usa # e 3 o 6 cifre, per esempio #f80 o #ff8800.',
      'lg.err.toname': 'dopo «per» scrivi il nome della nuova procedura.', 'lg.err.toreserved': '«{w}» è già un comando: scegli un altro nome per la procedura.',
      'lg.err.noend': 'la procedura «{w}» non finisce mai: manca «fine».', 'lg.err.endalone': 'c’è un «fine» senza un «per» prima.', 'lg.err.tonested': 'non puoi creare una procedura dentro un’altra: chiudi prima con «fine».',
      'lg.err.else': '«altrimenti» va subito dopo il blocco [ … ] di un «se».', 'lg.err.funcalone': '«{w}» calcola un numero: usalo dentro un comando, per esempio avanti {w} 100.',
      'lg.err.div0': 'non si può dividere per zero!', 'lg.err.sqrt': 'non si fa la radice di un numero negativo.', 'lg.err.big': 'questo numero è troppo grande per la tela.',
      'lg.err.toolong': 'il disegno è troppo lungo: forse una ripetizione o una ricorsione non si ferma mai?', 'lg.err.deep': 'la procedura «{w}» chiama se stessa troppe volte: serve una regola per fermarsi, per esempio se :l < 5 [stop].',
      'lg.err.negrep': 'non si può ripetere un numero negativo di volte.', 'lg.err.width': 'lo spessore deve essere tra 0 e 60.',
      'lg.err.char': 'il simbolo «{w}» non si usa nel codice.', 'lg.err.colon': 'dopo «:» scrivi il nome di una variabile, per esempio :lato.', 'lg.err.quote': 'dopo «"» scrivi un nome, per esempio "lato.',
      'lg.err.badnum': '«{w}» non è un numero valido.'
    },
    en: {
      'cd.title': 'Fun coding', 'cd.robot': 'The robot', 'cd.turtle': 'The turtle',
      'cd.hub.lead': 'Learn to program by playing: guide a robot with blocks or make a turtle draw by writing real code.',
      'cd.hub.rec': 'Recommended for you', 'cd.hub.primaria': 'Primary school · blocks', 'cd.hub.medie': 'Middle school · Logo code',
      'cd.hub.robotDesc': 'Take the robot to the star: sequences, loops, conditions and functions in 34 levels.',
      'cd.hub.turtleDesc': 'Write commands like “forward 100” and “repeat 4 [ … ]” and draw stars, spirals, trees and fractals.',
      'cd.levelsDone': '{n} of {tot} levels', 'cd.challDone': '{n} of {tot} challenges', 'cd.play': 'Play', 'cd.continue': 'Continue', 'cd.open': 'Open',
      'cd.what.title': 'What is coding?', 'cd.what.seqT': 'Sequence', 'cd.what.seq': 'A program is a list of instructions carried out one after another, in the right order.',
      'cd.what.loopT': 'Loop', 'cd.what.loop': 'When something repeats, you write it once and say how many times to do it.',
      'cd.what.ifT': 'Condition', 'cd.what.if': 'The program looks at the situation and chooses: if this happens… else…',
      'cd.what.fnT': 'Function', 'cd.what.fn': 'Give a name to a group of instructions and use it like a new command.',
      'cd.robot.mapLead': 'Every level teaches you something new. Use few blocks to win 3 stars!',
      'cd.level': 'Level {n}', 'cd.run': 'Run', 'cd.pause': 'Pause', 'cd.step': 'Step', 'cd.stepT': 'Run one block at a time', 'cd.resetT': 'Start again',
      'cd.speed': 'Speed', 'cd.blocks': 'Blocks', 'cd.blocksHelp': 'tap to add', 'cd.program': 'Program',
      'cd.count': '{n} blocks · ⭐⭐⭐ with {best}', 'cd.fnHelp': 'the command you invent', 'cd.addHere': 'add here', 'cd.tapRemove': 'Tap to remove',
      'cd.progEmpty': 'The program is empty. Tap the blocks above!', 'cd.fnEmpty': 'Tap here, then add the function’s blocks.',
      'cd.condT': 'Tap to change the condition', 'cd.undo': 'Undo', 'cd.clear': 'Clear', 'cd.hint': 'Hint', 'cd.solution': 'Solution',
      'cd.prev': 'Previous', 'cd.next': 'Next', 'cd.map': 'Level map',
      'cd.b.fwd': 'Forward', 'cd.b.left': 'Turn left', 'cd.b.right': 'Turn right', 'cd.b.pick': 'Pick up', 'cd.b.rep': 'Repeat', 'cd.b.times': 'times',
      'cd.b.until': 'Repeat until the star', 'cd.b.if': 'If', 'cd.b.else': 'else', 'cd.b.fn': 'Function',
      'cd.c.wall': 'there is a wall ahead', 'cd.c.water': 'there is water ahead', 'cd.c.coin': 'there is something here', 'cd.c.pathR': 'there is a path on the right', 'cd.c.pathL': 'there is a path on the left',
      'cd.msg.start': 'Tap the blocks to build the program, then press ▶ Run.', 'cd.msg.ready': 'Ready! Press ▶ Run or ⏭ Step.', 'cd.msg.running': 'The robot is running the program…',
      'cd.msg.paused': 'Paused. Press ▶ to continue.', 'cd.msg.max': 'In this level you can use at most {n} blocks.',
      'cd.msg.solution': 'Here is a solution: watch it work, then try to build it yourself!',
      'cd.fail.wall': 'Bump! The robot hit an obstacle.', 'cd.fail.door': 'The door is locked: you need a key first!', 'cd.fail.water': 'Splash! The robot fell in the water.',
      'cd.fail.nothing': 'There is nothing to pick up here.', 'cd.fail.tired': 'The robot is tired: too many steps! Maybe a loop never ends.',
      'cd.end.coins': 'The program has ended, but {n} still need to be picked up.', 'cd.end.star': 'The program has ended, but the robot is not on the star.', 'cd.end.empty': 'The program is empty: add some blocks!',
      'cd.win': 'Hooray! Level complete!', 'cd.win3': 'Perfect! Three stars!', 'cd.winBlocks': 'You used {n} blocks.', 'cd.winBest': 'It can be done with {n}: try again?', 'cd.winPerfect': 'It can’t get any shorter!',
      'cd.newRecord': '★ New record!', 'cd.again': 'Try again',
      'cd.turtle.lead': 'Write the code, press Draw and compare your drawing with the grey shape.', 'cd.free': 'Free drawing', 'cd.freeDesc': 'Draw whatever you like, no rules',
      'cd.challenge': 'Challenge {n}', 'cd.solved': 'Solved', 'cd.allChall': 'All challenges', 'cd.draw': 'Draw', 'cd.stop': 'Stop', 'cd.examples': 'Examples', 'cd.savePng': 'Save image',
      'cd.ref': 'Commands', 'cd.ref.move': 'Moving', 'cd.ref.pen': 'Pen', 'cd.ref.loop': 'Repeating and counting', 'cd.ref.proc': 'Procedures and choices',
      'cd.ref.note': 'English works too: forward, back, right, left, penup, pendown, color, width, repeat, make "x, to … end, if, random.',
      'cd.codeLabel': 'Code', 'cd.codePh': 'Write your commands here, for example:\nforward 100\nright 90', 'cd.targetLegend': 'the drawing to make',
      'cd.heading': 'heading', 'cd.penDown': 'pen down', 'cd.penUp': 'pen up', 'cd.lineN': 'Line {n}:',
      'cd.need.repeat': 'use repeat', 'cd.need.to': 'use to … end', 'cd.need.make': 'use a variable', 'cd.need.recursion': 'use recursion',
      'cd.t.ready': 'Write the code and press ▶ Draw (or Ctrl+Enter).', 'cd.t.empty': 'Write at least one command, for example forward 100.', 'cd.t.drawing': 'The turtle is drawing…',
      'cd.t.doneFree': 'Done! What a nice drawing.', 'cd.t.ok': 'Well done! The drawing is right.', 'cd.t.no': 'Not yet: your drawing is {p}% like the grey one. Check lengths and angles.',
      'cd.t.needs': 'The drawing is right! But this challenge asks you to {w}.', 'cd.t.stopped': 'Stopped.', 'cd.msg.solutionT': 'Here is a solution. Read it line by line and try changing it!',
      'cd.loadErr': 'I can’t load the levels. Please reload the page.',
      'lg.err.unknown': 'I don’t know the command “{w}”.', 'lg.err.unknownS': 'I don’t know “{w}”. Did you mean “{s}”?',
      'lg.err.neednum': '“{c}” needs a number after it (for example {c} 50).', 'lg.err.nocmd': 'I don’t know what to do with “{w}”. Each line must start with a command, for example forward.',
      'lg.err.noclose': 'the closing square bracket “]” is missing.', 'lg.err.extraclose': 'there is one “]” too many.', 'lg.err.strayopen': 'a “[” must come after a command like repeat.',
      'lg.err.needblock': '“{c}” needs a block in square brackets [ … ].', 'lg.err.paren': 'the closing bracket “)” is missing.',
      'lg.err.novar': 'the variable :{w} doesn’t exist. Create it first with make "{w} … or check the spelling.',
      'lg.err.makename': 'after “make” write the variable name and then the value, for example make "side 50.', 'lg.err.makereserved': '“{w}” is a command: choose another name for the variable.',
      'lg.err.pen': 'write “pen up” or “pen down” (or penup / pendown).', 'lg.err.color': 'I don’t know the colour “{w}”. Try red, blue, green… or a code like #ff8800.', 'lg.err.colorS': 'I don’t know the colour “{w}”. Did you mean “{s}”?',
      'lg.err.hex': 'the colour “{w}” is not valid: use # and 3 or 6 digits, for example #f80 or #ff8800.',
      'lg.err.toname': 'after “to” write the name of the new procedure.', 'lg.err.toreserved': '“{w}” is already a command: choose another name for the procedure.',
      'lg.err.noend': 'the procedure “{w}” never ends: “end” is missing.', 'lg.err.endalone': 'there is an “end” with no “to” before it.', 'lg.err.tonested': 'you can’t create a procedure inside another one: close it first with “end”.',
      'lg.err.else': '“else” must come right after the [ … ] block of an “if”.', 'lg.err.funcalone': '“{w}” calculates a number: use it inside a command, for example forward {w} 100.',
      'lg.err.div0': 'you can’t divide by zero!', 'lg.err.sqrt': 'you can’t take the square root of a negative number.', 'lg.err.big': 'this number is too big for the canvas.',
      'lg.err.toolong': 'the drawing is too long: maybe a loop or a recursion never stops?', 'lg.err.deep': 'the procedure “{w}” calls itself too many times: it needs a rule to stop, for example if :l < 5 [stop].',
      'lg.err.negrep': 'you can’t repeat a negative number of times.', 'lg.err.width': 'the width must be between 0 and 60.',
      'lg.err.char': 'the symbol “{w}” is not used in code.', 'lg.err.colon': 'after “:” write a variable name, for example :side.', 'lg.err.quote': 'after “"” write a name, for example "side.',
      'lg.err.badnum': '“{w}” is not a valid number.'
    },
    fr: {
      'cd.title': 'Codage amusant', 'cd.robot': 'Le robot', 'cd.turtle': 'La tortue',
      'cd.hub.lead': 'Apprends à programmer en jouant : guide un robot avec des blocs ou fais dessiner une tortue en écrivant du vrai code.',
      'cd.hub.rec': 'Conseillé pour toi', 'cd.hub.primaria': 'École primaire · blocs', 'cd.hub.medie': 'Collège · code Logo',
      'cd.hub.robotDesc': 'Emmène le robot sur l’étoile : séquences, boucles, conditions et fonctions en 34 niveaux.',
      'cd.hub.turtleDesc': 'Écris des commandes comme « avanti 100 » et « ripeti 4 [ … ] » et dessine étoiles, spirales, arbres et fractales.',
      'cd.levelsDone': '{n} niveaux sur {tot}', 'cd.challDone': '{n} défis sur {tot}', 'cd.play': 'Jouer', 'cd.continue': 'Continuer', 'cd.open': 'Ouvrir',
      'cd.what.title': 'C’est quoi, le codage ?', 'cd.what.seqT': 'Séquence', 'cd.what.seq': 'Un programme est une liste d’instructions exécutées l’une après l’autre, dans le bon ordre.',
      'cd.what.loopT': 'Boucle', 'cd.what.loop': 'Quand une chose se répète, on l’écrit une seule fois et on dit combien de fois la refaire.',
      'cd.what.ifT': 'Condition', 'cd.what.if': 'Le programme regarde la situation et choisit : si ceci arrive… sinon…',
      'cd.what.fnT': 'Fonction', 'cd.what.fn': 'Donne un nom à un groupe d’instructions et utilise-le comme une nouvelle commande.',
      'cd.robot.mapLead': 'Chaque niveau t’apprend quelque chose de nouveau. Utilise peu de blocs pour gagner 3 étoiles !',
      'cd.level': 'Niveau {n}', 'cd.run': 'Lancer', 'cd.pause': 'Pause', 'cd.step': 'Pas', 'cd.stepT': 'Exécuter un bloc à la fois', 'cd.resetT': 'Recommencer',
      'cd.speed': 'Vitesse', 'cd.blocks': 'Blocs', 'cd.blocksHelp': 'touche pour ajouter', 'cd.program': 'Programme',
      'cd.count': '{n} blocs · ⭐⭐⭐ avec {best}', 'cd.fnHelp': 'la commande que tu inventes', 'cd.addHere': 'ajouter ici', 'cd.tapRemove': 'Touche pour enlever',
      'cd.progEmpty': 'Le programme est vide. Touche les blocs ci-dessus !', 'cd.fnEmpty': 'Touche ici puis ajoute les blocs de la fonction.',
      'cd.condT': 'Touche pour changer la condition', 'cd.undo': 'Annuler', 'cd.clear': 'Vider', 'cd.hint': 'Indice', 'cd.solution': 'Solution',
      'cd.prev': 'Précédent', 'cd.next': 'Suivant', 'cd.map': 'Carte des niveaux',
      'cd.b.fwd': 'Avance', 'cd.b.left': 'Tourne à gauche', 'cd.b.right': 'Tourne à droite', 'cd.b.pick': 'Ramasse', 'cd.b.rep': 'Répète', 'cd.b.times': 'fois',
      'cd.b.until': 'Répète jusqu’à l’étoile', 'cd.b.if': 'Si', 'cd.b.else': 'sinon', 'cd.b.fn': 'Fonction',
      'cd.c.wall': 'il y a un mur devant', 'cd.c.water': 'il y a de l’eau devant', 'cd.c.coin': 'il y a quelque chose ici', 'cd.c.pathR': 'il y a un chemin à droite', 'cd.c.pathL': 'il y a un chemin à gauche',
      'cd.msg.start': 'Touche les blocs pour construire le programme, puis appuie sur ▶ Lancer.', 'cd.msg.ready': 'Prêt ! Appuie sur ▶ Lancer ou ⏭ Pas.', 'cd.msg.running': 'Le robot exécute le programme…',
      'cd.msg.paused': 'En pause. Appuie sur ▶ pour continuer.', 'cd.msg.max': 'Dans ce niveau, tu peux utiliser au maximum {n} blocs.',
      'cd.msg.solution': 'Voici une solution : regarde-la fonctionner, puis essaie de la refaire tout seul !',
      'cd.fail.wall': 'Boum ! Le robot s’est cogné contre un obstacle.', 'cd.fail.door': 'La porte est fermée : il faut d’abord une clé !', 'cd.fail.water': 'Plouf ! Le robot est tombé à l’eau.',
      'cd.fail.nothing': 'Il n’y a rien à ramasser ici.', 'cd.fail.tired': 'Le robot est fatigué : trop de pas ! Une boucle ne finit peut-être jamais.',
      'cd.end.coins': 'Le programme est fini, mais il reste {n} à ramasser.', 'cd.end.star': 'Le programme est fini, mais le robot n’est pas sur l’étoile.', 'cd.end.empty': 'Le programme est vide : ajoute quelques blocs !',
      'cd.win': 'Bravo ! Niveau réussi !', 'cd.win3': 'Parfait ! Trois étoiles !', 'cd.winBlocks': 'Tu as utilisé {n} blocs.', 'cd.winBest': 'On peut le faire avec {n} : tu réessaies ?', 'cd.winPerfect': 'Impossible de faire plus court !',
      'cd.newRecord': '★ Nouveau record !', 'cd.again': 'Réessayer',
      'cd.turtle.lead': 'Écris le code, appuie sur Dessiner et compare ton dessin avec la forme grise.', 'cd.free': 'Dessin libre', 'cd.freeDesc': 'Dessine ce que tu veux, sans règles',
      'cd.challenge': 'Défi {n}', 'cd.solved': 'Réussi', 'cd.allChall': 'Tous les défis', 'cd.draw': 'Dessiner', 'cd.stop': 'Arrêter', 'cd.examples': 'Exemples', 'cd.savePng': 'Enregistrer l’image',
      'cd.ref': 'Commandes', 'cd.ref.move': 'Se déplacer', 'cd.ref.pen': 'Crayon', 'cd.ref.loop': 'Répéter et compter', 'cd.ref.proc': 'Procédures et choix',
      'cd.ref.note': 'Les commandes marchent en italien et en anglais : forward, back, right, left, penup, pendown, color, width, repeat, make "x, to … end, if, random.',
      'cd.codeLabel': 'Code', 'cd.codePh': 'Écris ici les commandes, par exemple :\navanti 100\ndestra 90', 'cd.targetLegend': 'le dessin à faire',
      'cd.heading': 'direction', 'cd.penDown': 'crayon baissé', 'cd.penUp': 'crayon levé', 'cd.lineN': 'Ligne {n} :',
      'cd.need.repeat': 'utiliser ripeti', 'cd.need.to': 'utiliser per … fine', 'cd.need.make': 'utiliser une variable', 'cd.need.recursion': 'utiliser la récursion',
      'cd.t.ready': 'Écris le code et appuie sur ▶ Dessiner (ou Ctrl+Entrée).', 'cd.t.empty': 'Écris au moins une commande, par exemple avanti 100.', 'cd.t.drawing': 'La tortue dessine…',
      'cd.t.doneFree': 'Fini ! Quel beau dessin.', 'cd.t.ok': 'Bravo ! Le dessin est juste.', 'cd.t.no': 'Pas encore : ton dessin ressemble à {p} % au dessin gris. Vérifie les longueurs et les angles.',
      'cd.t.needs': 'Le dessin est juste ! Mais ce défi te demande de {w}.', 'cd.t.stopped': 'Arrêté.', 'cd.msg.solutionT': 'Voici une solution. Lis-la ligne par ligne et essaie de la modifier !',
      'cd.loadErr': 'Impossible de charger les niveaux. Recharge la page.',
      'lg.err.unknown': 'je ne connais pas la commande « {w} ».', 'lg.err.unknownS': 'je ne connais pas « {w} ». Tu voulais écrire « {s} » ?',
      'lg.err.neednum': 'après « {c} » il faut un nombre (par exemple {c} 50).', 'lg.err.nocmd': 'je ne sais pas quoi faire de « {w} ». Chaque ligne doit commencer par une commande, par exemple avanti.',
      'lg.err.noclose': 'il manque le crochet fermant « ] ».', 'lg.err.extraclose': 'il y a un « ] » en trop.', 'lg.err.strayopen': 'un « [ » doit venir après une commande comme ripeti.',
      'lg.err.needblock': 'après « {c} » il faut un bloc entre crochets [ … ].', 'lg.err.paren': 'il manque la parenthèse fermante « ) ».',
      'lg.err.novar': 'la variable :{w} n’existe pas. Crée-la d’abord avec « metti {w} … » ou vérifie l’orthographe.',
      'lg.err.makename': 'après « metti », écris le nom de la variable puis la valeur, par exemple metti lato 50.', 'lg.err.makereserved': '« {w} » est une commande : choisis un autre nom de variable.',
      'lg.err.pen': 'écris « penna su » ou « penna giù » (ou penup / pendown).', 'lg.err.color': 'je ne connais pas la couleur « {w} ». Essaie rosso, blu, red, blue… ou un code comme #ff8800.', 'lg.err.colorS': 'je ne connais pas la couleur « {w} ». Tu voulais « {s} » ?',
      'lg.err.hex': 'la couleur « {w} » n’est pas valide : utilise # et 3 ou 6 chiffres, par exemple #f80 ou #ff8800.',
      'lg.err.toname': 'après « per » écris le nom de la nouvelle procédure.', 'lg.err.toreserved': '« {w} » est déjà une commande : choisis un autre nom.',
      'lg.err.noend': 'la procédure « {w} » ne finit jamais : il manque « fine ».', 'lg.err.endalone': 'il y a un « fine » sans « per » avant.', 'lg.err.tonested': 'tu ne peux pas créer une procédure dans une autre : ferme d’abord avec « fine ».',
      'lg.err.else': '« altrimenti » doit venir juste après le bloc [ … ] d’un « se ».', 'lg.err.funcalone': '« {w} » calcule un nombre : utilise-le dans une commande, par exemple avanti {w} 100.',
      'lg.err.div0': 'on ne peut pas diviser par zéro !', 'lg.err.sqrt': 'pas de racine carrée d’un nombre négatif.', 'lg.err.big': 'ce nombre est trop grand pour la toile.',
      'lg.err.toolong': 'le dessin est trop long : une boucle ou une récursion ne s’arrête peut-être jamais ?', 'lg.err.deep': 'la procédure « {w} » s’appelle trop de fois : il faut une règle d’arrêt, par exemple se :l < 5 [stop].',
      'lg.err.negrep': 'on ne peut pas répéter un nombre négatif de fois.', 'lg.err.width': 'l’épaisseur doit être entre 0 et 60.',
      'lg.err.char': 'le symbole « {w} » ne s’utilise pas dans le code.', 'lg.err.colon': 'après « : » écris un nom de variable, par exemple :lato.', 'lg.err.quote': 'après « " » écris un nom, par exemple "lato.',
      'lg.err.badnum': '« {w} » n’est pas un nombre valide.'
    },
    ru: {
      'cd.title': 'Весёлое программирование', 'cd.robot': 'Робот', 'cd.turtle': 'Черепашка',
      'cd.hub.lead': 'Учись программировать играя: управляй роботом с помощью блоков или заставь черепашку рисовать настоящим кодом.',
      'cd.hub.rec': 'Подходит тебе', 'cd.hub.primaria': 'Начальная школа · блоки', 'cd.hub.medie': 'Средняя школа · код Logo',
      'cd.hub.robotDesc': 'Доведи робота до звезды: последовательности, циклы, условия и функции — 34 уровня.',
      'cd.hub.turtleDesc': 'Пиши команды вроде «forward 100» и «repeat 4 [ … ]» и рисуй звёзды, спирали, деревья и фракталы.',
      'cd.levelsDone': 'уровней: {n} из {tot}', 'cd.challDone': 'заданий: {n} из {tot}', 'cd.play': 'Играть', 'cd.continue': 'Продолжить', 'cd.open': 'Открыть',
      'cd.what.title': 'Что такое программирование?', 'cd.what.seqT': 'Последовательность', 'cd.what.seq': 'Программа — это список команд, которые выполняются одна за другой в правильном порядке.',
      'cd.what.loopT': 'Цикл', 'cd.what.loop': 'Если что-то повторяется, пишешь это один раз и говоришь, сколько раз повторить.',
      'cd.what.ifT': 'Условие', 'cd.what.if': 'Программа смотрит на ситуацию и выбирает: если так… иначе…',
      'cd.what.fnT': 'Функция', 'cd.what.fn': 'Дай имя группе команд и используй её как новую команду.',
      'cd.robot.mapLead': 'Каждый уровень учит чему-то новому. Используй меньше блоков, чтобы получить 3 звезды!',
      'cd.level': 'Уровень {n}', 'cd.run': 'Пуск', 'cd.pause': 'Пауза', 'cd.step': 'Шаг', 'cd.stepT': 'Выполнять по одному блоку', 'cd.resetT': 'Начать заново',
      'cd.speed': 'Скорость', 'cd.blocks': 'Блоки', 'cd.blocksHelp': 'нажми, чтобы добавить', 'cd.program': 'Программа',
      'cd.count': 'блоков: {n} · ⭐⭐⭐ за {best}', 'cd.fnHelp': 'команда, которую придумаешь ты', 'cd.addHere': 'добавить сюда', 'cd.tapRemove': 'Нажми, чтобы убрать',
      'cd.progEmpty': 'Программа пустая. Нажимай на блоки выше!', 'cd.fnEmpty': 'Нажми сюда и добавь блоки функции.',
      'cd.condT': 'Нажми, чтобы сменить условие', 'cd.undo': 'Отменить', 'cd.clear': 'Очистить', 'cd.hint': 'Подсказка', 'cd.solution': 'Решение',
      'cd.prev': 'Назад', 'cd.next': 'Дальше', 'cd.map': 'Карта уровней',
      'cd.b.fwd': 'Вперёд', 'cd.b.left': 'Налево', 'cd.b.right': 'Направо', 'cd.b.pick': 'Подбери', 'cd.b.rep': 'Повтори', 'cd.b.times': 'раз',
      'cd.b.until': 'Повторяй до звезды', 'cd.b.if': 'Если', 'cd.b.else': 'иначе', 'cd.b.fn': 'Функция',
      'cd.c.wall': 'впереди стена', 'cd.c.water': 'впереди вода', 'cd.c.coin': 'здесь что-то есть', 'cd.c.pathR': 'справа есть путь', 'cd.c.pathL': 'слева есть путь',
      'cd.msg.start': 'Нажимай на блоки, чтобы собрать программу, потом нажми ▶ Пуск.', 'cd.msg.ready': 'Готово! Нажми ▶ Пуск или ⏭ Шаг.', 'cd.msg.running': 'Робот выполняет программу…',
      'cd.msg.paused': 'Пауза. Нажми ▶, чтобы продолжить.', 'cd.msg.max': 'На этом уровне можно использовать не больше {n} блоков.',
      'cd.msg.solution': 'Вот решение: посмотри, как оно работает, а потом собери его сам!',
      'cd.fail.wall': 'Бум! Робот врезался в препятствие.', 'cd.fail.door': 'Дверь заперта: сначала нужен ключ!', 'cd.fail.water': 'Плюх! Робот упал в воду.',
      'cd.fail.nothing': 'Здесь нечего подбирать.', 'cd.fail.tired': 'Робот устал: слишком много шагов! Может, цикл никогда не кончается.',
      'cd.end.coins': 'Программа закончилась, но осталось собрать ещё {n}.', 'cd.end.star': 'Программа закончилась, но робот не на звезде.', 'cd.end.empty': 'Программа пустая: добавь блоки!',
      'cd.win': 'Ура! Уровень пройден!', 'cd.win3': 'Отлично! Три звезды!', 'cd.winBlocks': 'Ты использовал блоков: {n}.', 'cd.winBest': 'Можно за {n}: попробуешь ещё?', 'cd.winPerfect': 'Короче уже не бывает!',
      'cd.newRecord': '★ Новый рекорд!', 'cd.again': 'Ещё раз',
      'cd.turtle.lead': 'Напиши код, нажми «Рисовать» и сравни рисунок с серой фигурой.', 'cd.free': 'Свободное рисование', 'cd.freeDesc': 'Рисуй что хочешь, без правил',
      'cd.challenge': 'Задание {n}', 'cd.solved': 'Решено', 'cd.allChall': 'Все задания', 'cd.draw': 'Рисовать', 'cd.stop': 'Стоп', 'cd.examples': 'Примеры', 'cd.savePng': 'Сохранить картинку',
      'cd.ref': 'Команды', 'cd.ref.move': 'Движение', 'cd.ref.pen': 'Перо', 'cd.ref.loop': 'Повторы и счёт', 'cd.ref.proc': 'Процедуры и выбор',
      'cd.ref.note': 'Команды работают на итальянском и английском: forward, back, right, left, penup, pendown, color, width, repeat, make "x, to … end, if, random.',
      'cd.codeLabel': 'Код', 'cd.codePh': 'Пиши команды здесь, например:\nforward 100\nright 90', 'cd.targetLegend': 'что нужно нарисовать',
      'cd.heading': 'направление', 'cd.penDown': 'перо опущено', 'cd.penUp': 'перо поднято', 'cd.lineN': 'Строка {n}:',
      'cd.need.repeat': 'использовать repeat', 'cd.need.to': 'использовать to … end', 'cd.need.make': 'использовать переменную', 'cd.need.recursion': 'использовать рекурсию',
      'cd.t.ready': 'Напиши код и нажми ▶ Рисовать (или Ctrl+Enter).', 'cd.t.empty': 'Напиши хотя бы одну команду, например forward 100.', 'cd.t.drawing': 'Черепашка рисует…',
      'cd.t.doneFree': 'Готово! Красивый рисунок.', 'cd.t.ok': 'Молодец! Рисунок правильный.', 'cd.t.no': 'Пока нет: твой рисунок похож на серый на {p}%. Проверь длины и углы.',
      'cd.t.needs': 'Рисунок правильный! Но в этом задании нужно {w}.', 'cd.t.stopped': 'Остановлено.', 'cd.msg.solutionT': 'Вот решение. Прочитай его строчка за строчкой и попробуй изменить!',
      'cd.loadErr': 'Не удаётся загрузить уровни. Обнови страницу.',
      'lg.err.unknown': 'я не знаю команду «{w}».', 'lg.err.unknownS': 'я не знаю «{w}». Может, ты хотел написать «{s}»?',
      'lg.err.neednum': 'после «{c}» нужно число (например, {c} 50).', 'lg.err.nocmd': 'не знаю, что делать с «{w}». Каждая строка должна начинаться с команды, например forward.',
      'lg.err.noclose': 'не хватает закрывающей квадратной скобки «]».', 'lg.err.extraclose': 'лишняя скобка «]».', 'lg.err.strayopen': 'скобка «[» должна стоять после команды, например repeat.',
      'lg.err.needblock': 'после «{c}» нужен блок в квадратных скобках [ … ].', 'lg.err.paren': 'не хватает закрывающей скобки «)».',
      'lg.err.novar': 'переменной :{w} нет. Сначала создай её: make "{w} … — или проверь, как она написана.',
      'lg.err.makename': 'после «make» напиши имя переменной и значение, например make "side 50.', 'lg.err.makereserved': '«{w}» — это команда: выбери другое имя для переменной.',
      'lg.err.pen': 'напиши «pen up» или «pen down» (или penup / pendown).', 'lg.err.color': 'я не знаю цвет «{w}». Попробуй red, blue, green… или код вроде #ff8800.', 'lg.err.colorS': 'я не знаю цвет «{w}». Может, «{s}»?',
      'lg.err.hex': 'цвет «{w}» записан неправильно: нужно # и 3 или 6 знаков, например #f80 или #ff8800.',
      'lg.err.toname': 'после «to» напиши имя новой процедуры.', 'lg.err.toreserved': '«{w}» — уже команда: выбери другое имя.',
      'lg.err.noend': 'процедура «{w}» не заканчивается: не хватает «end».', 'lg.err.endalone': 'есть «end», но перед ним нет «to».', 'lg.err.tonested': 'нельзя создавать процедуру внутри другой: сначала закрой её словом «end».',
      'lg.err.else': '«else» должно стоять сразу после блока [ … ] у «if».', 'lg.err.funcalone': '«{w}» вычисляет число: используй его внутри команды, например forward {w} 100.',
      'lg.err.div0': 'на ноль делить нельзя!', 'lg.err.sqrt': 'нельзя извлечь корень из отрицательного числа.', 'lg.err.big': 'это число слишком большое для холста.',
      'lg.err.toolong': 'рисунок слишком длинный: может, цикл или рекурсия никогда не останавливается?', 'lg.err.deep': 'процедура «{w}» вызывает себя слишком много раз: нужно правило остановки, например if :l < 5 [stop].',
      'lg.err.negrep': 'нельзя повторить отрицательное число раз.', 'lg.err.width': 'толщина должна быть от 0 до 60.',
      'lg.err.char': 'символ «{w}» в коде не используется.', 'lg.err.colon': 'после «:» напиши имя переменной, например :side.', 'lg.err.quote': 'после «"» напиши имя, например "side.',
      'lg.err.badnum': '«{w}» — неправильное число.'
    },
    ro: {
      'cd.title': 'Programare distractivă', 'cd.robot': 'Robotul', 'cd.turtle': 'Țestoasa',
      'cd.hub.lead': 'Învață să programezi jucându-te: ghidează un robot cu blocuri sau fă o țestoasă să deseneze scriind cod adevărat.',
      'cd.hub.rec': 'Recomandat pentru tine', 'cd.hub.primaria': 'Școala primară · blocuri', 'cd.hub.medie': 'Gimnaziu · cod Logo',
      'cd.hub.robotDesc': 'Du robotul la stea: secvențe, repetări, condiții și funcții în 34 de niveluri.',
      'cd.hub.turtleDesc': 'Scrie comenzi ca „forward 100” și „repeat 4 [ … ]” și desenează stele, spirale, copaci și fractali.',
      'cd.levelsDone': '{n} din {tot} niveluri', 'cd.challDone': '{n} din {tot} provocări', 'cd.play': 'Joacă', 'cd.continue': 'Continuă', 'cd.open': 'Deschide',
      'cd.what.title': 'Ce este programarea?', 'cd.what.seqT': 'Secvență', 'cd.what.seq': 'Un program este o listă de instrucțiuni executate una după alta, în ordinea potrivită.',
      'cd.what.loopT': 'Buclă', 'cd.what.loop': 'Când ceva se repetă, îl scrii o singură dată și spui de câte ori să se repete.',
      'cd.what.ifT': 'Condiție', 'cd.what.if': 'Programul privește situația și alege: dacă se întâmplă asta… altfel…',
      'cd.what.fnT': 'Funcție', 'cd.what.fn': 'Dă un nume unui grup de instrucțiuni și folosește-l ca pe o comandă nouă.',
      'cd.robot.mapLead': 'Fiecare nivel te învață ceva nou. Folosește puține blocuri ca să câștigi 3 stele!',
      'cd.level': 'Nivelul {n}', 'cd.run': 'Pornește', 'cd.pause': 'Pauză', 'cd.step': 'Pas', 'cd.stepT': 'Execută câte un bloc', 'cd.resetT': 'Ia de la capăt',
      'cd.speed': 'Viteză', 'cd.blocks': 'Blocuri', 'cd.blocksHelp': 'atinge ca să adaugi', 'cd.program': 'Program',
      'cd.count': '{n} blocuri · ⭐⭐⭐ cu {best}', 'cd.fnHelp': 'comanda inventată de tine', 'cd.addHere': 'adaugă aici', 'cd.tapRemove': 'Atinge ca să scoți',
      'cd.progEmpty': 'Programul e gol. Atinge blocurile de mai sus!', 'cd.fnEmpty': 'Atinge aici și apoi adaugă blocurile funcției.',
      'cd.condT': 'Atinge ca să schimbi condiția', 'cd.undo': 'Anulează', 'cd.clear': 'Golește', 'cd.hint': 'Indiciu', 'cd.solution': 'Soluție',
      'cd.prev': 'Înapoi', 'cd.next': 'Înainte', 'cd.map': 'Harta nivelurilor',
      'cd.b.fwd': 'Înainte', 'cd.b.left': 'La stânga', 'cd.b.right': 'La dreapta', 'cd.b.pick': 'Ia', 'cd.b.rep': 'Repetă', 'cd.b.times': 'ori',
      'cd.b.until': 'Repetă până la stea', 'cd.b.if': 'Dacă', 'cd.b.else': 'altfel', 'cd.b.fn': 'Funcție',
      'cd.c.wall': 'e un zid în față', 'cd.c.water': 'e apă în față', 'cd.c.coin': 'e ceva aici', 'cd.c.pathR': 'e drum la dreapta', 'cd.c.pathL': 'e drum la stânga',
      'cd.msg.start': 'Atinge blocurile ca să construiești programul, apoi apasă ▶ Pornește.', 'cd.msg.ready': 'Gata! Apasă ▶ Pornește sau ⏭ Pas.', 'cd.msg.running': 'Robotul execută programul…',
      'cd.msg.paused': 'Pauză. Apasă ▶ ca să continui.', 'cd.msg.max': 'La acest nivel poți folosi cel mult {n} blocuri.',
      'cd.msg.solution': 'Iată o soluție: privește cum funcționează, apoi încearcă s-o refaci singur!',
      'cd.fail.wall': 'Bum! Robotul s-a lovit de un obstacol.', 'cd.fail.door': 'Ușa e încuiată: mai întâi îți trebuie o cheie!', 'cd.fail.water': 'Pleosc! Robotul a căzut în apă.',
      'cd.fail.nothing': 'Aici nu e nimic de luat.', 'cd.fail.tired': 'Robotul e obosit: prea mulți pași! Poate o repetare nu se termină niciodată.',
      'cd.end.coins': 'Programul s-a terminat, dar mai sunt {n} de luat.', 'cd.end.star': 'Programul s-a terminat, dar robotul nu e pe stea.', 'cd.end.empty': 'Programul e gol: adaugă câteva blocuri!',
      'cd.win': 'Ura! Nivel terminat!', 'cd.win3': 'Perfect! Trei stele!', 'cd.winBlocks': 'Ai folosit {n} blocuri.', 'cd.winBest': 'Se poate și cu {n}: mai încerci?', 'cd.winPerfect': 'Mai scurt de atât nu se poate!',
      'cd.newRecord': '★ Record nou!', 'cd.again': 'Încearcă din nou',
      'cd.turtle.lead': 'Scrie codul, apasă Desenează și compară desenul cu forma gri.', 'cd.free': 'Desen liber', 'cd.freeDesc': 'Desenează ce vrei, fără reguli',
      'cd.challenge': 'Provocarea {n}', 'cd.solved': 'Rezolvată', 'cd.allChall': 'Toate provocările', 'cd.draw': 'Desenează', 'cd.stop': 'Oprește', 'cd.examples': 'Exemple', 'cd.savePng': 'Salvează imaginea',
      'cd.ref': 'Comenzi', 'cd.ref.move': 'Mișcare', 'cd.ref.pen': 'Creion', 'cd.ref.loop': 'Repetări și numărare', 'cd.ref.proc': 'Proceduri și alegeri',
      'cd.ref.note': 'Comenzile merg în italiană și engleză: forward, back, right, left, penup, pendown, color, width, repeat, make "x, to … end, if, random.',
      'cd.codeLabel': 'Cod', 'cd.codePh': 'Scrie aici comenzile, de exemplu:\nforward 100\nright 90', 'cd.targetLegend': 'desenul de făcut',
      'cd.heading': 'direcție', 'cd.penDown': 'creion jos', 'cd.penUp': 'creion sus', 'cd.lineN': 'Rândul {n}:',
      'cd.need.repeat': 'folosești repeat', 'cd.need.to': 'folosești to … end', 'cd.need.make': 'folosești o variabilă', 'cd.need.recursion': 'folosești recursivitatea',
      'cd.t.ready': 'Scrie codul și apasă ▶ Desenează (sau Ctrl+Enter).', 'cd.t.empty': 'Scrie cel puțin o comandă, de exemplu forward 100.', 'cd.t.drawing': 'Țestoasa desenează…',
      'cd.t.doneFree': 'Gata! Ce desen frumos.', 'cd.t.ok': 'Bravo! Desenul e corect.', 'cd.t.no': 'Încă nu: desenul tău seamănă {p}% cu cel gri. Verifică lungimile și unghiurile.',
      'cd.t.needs': 'Desenul e corect! Dar provocarea îți cere să {w}.', 'cd.t.stopped': 'Oprit.', 'cd.msg.solutionT': 'Iată o soluție. Citește-o rând cu rând și încearcă s-o schimbi!',
      'cd.loadErr': 'Nu pot încărca nivelurile. Reîncarcă pagina.',
      'lg.err.unknown': 'nu cunosc comanda „{w}”.', 'lg.err.unknownS': 'nu cunosc „{w}”. Poate ai vrut să scrii „{s}”?',
      'lg.err.neednum': 'după „{c}” trebuie un număr (de exemplu {c} 50).', 'lg.err.nocmd': 'nu știu ce să fac cu „{w}”. Fiecare rând trebuie să înceapă cu o comandă, de exemplu forward.',
      'lg.err.noclose': 'lipsește paranteza dreaptă de închidere „]”.', 'lg.err.extraclose': 'e o „]” în plus.', 'lg.err.strayopen': 'o „[” trebuie să vină după o comandă ca repeat.',
      'lg.err.needblock': 'după „{c}” trebuie un bloc între paranteze drepte [ … ].', 'lg.err.paren': 'lipsește paranteza de închidere „)”.',
      'lg.err.novar': 'variabila :{w} nu există. Creeaz-o mai întâi cu make "{w} … sau verifică cum ai scris-o.',
      'lg.err.makename': 'după „make” scrie numele variabilei și apoi valoarea, de exemplu make "lat 50.', 'lg.err.makereserved': '„{w}” e o comandă: alege alt nume pentru variabilă.',
      'lg.err.pen': 'scrie „pen up” sau „pen down” (sau penup / pendown).', 'lg.err.color': 'nu cunosc culoarea „{w}”. Încearcă red, blue, green… sau un cod ca #ff8800.', 'lg.err.colorS': 'nu cunosc culoarea „{w}”. Poate „{s}”?',
      'lg.err.hex': 'culoarea „{w}” nu e bună: folosește # și 3 sau 6 cifre, de exemplu #f80 sau #ff8800.',
      'lg.err.toname': 'după „to” scrie numele noii proceduri.', 'lg.err.toreserved': '„{w}” e deja o comandă: alege alt nume.',
      'lg.err.noend': 'procedura „{w}” nu se termină: lipsește „end”.', 'lg.err.endalone': 'e un „end” fără un „to” înainte.', 'lg.err.tonested': 'nu poți crea o procedură în alta: închide-o mai întâi cu „end”.',
      'lg.err.else': '„else” trebuie să vină imediat după blocul [ … ] al unui „if”.', 'lg.err.funcalone': '„{w}” calculează un număr: folosește-l într-o comandă, de exemplu forward {w} 100.',
      'lg.err.div0': 'nu se poate împărți la zero!', 'lg.err.sqrt': 'nu se poate scoate radicalul dintr-un număr negativ.', 'lg.err.big': 'numărul e prea mare pentru pânză.',
      'lg.err.toolong': 'desenul e prea lung: poate o repetare sau o recursivitate nu se oprește niciodată?', 'lg.err.deep': 'procedura „{w}” se cheamă singură de prea multe ori: trebuie o regulă de oprire, de exemplu if :l < 5 [stop].',
      'lg.err.negrep': 'nu se poate repeta de un număr negativ de ori.', 'lg.err.width': 'grosimea trebuie să fie între 0 și 60.',
      'lg.err.char': 'simbolul „{w}” nu se folosește în cod.', 'lg.err.colon': 'după „:” scrie numele unei variabile, de exemplu :lat.', 'lg.err.quote': 'după „"” scrie un nume, de exemplu "lat.',
      'lg.err.badnum': '„{w}” nu este un număr valid.'
    }
  };
  if (W.I18N) for (const l of Object.keys(TXT)) { W.I18N[l] = W.I18N[l] || {}; Object.assign(W.I18N[l], TXT[l]); }
  W.Coding.TXT = TXT;

  /* =====================================================================
     INTERFACCIA
     ===================================================================== */
  if (typeof document === 'undefined') return; // (test in Node: solo motori)
  const LANG_IDX = ['it', 'en', 'fr', 'ru', 'ro'];
  const L = (arr) => (arr ? (arr[Math.max(0, LANG_IDX.indexOf(i18n.lang))] || arr[0]) : '');
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const rid = (n) => 'code:robot:' + n, tid = (n) => 'code:turtle:' + n;
  const topic = (id) => Store.topic(id) || {};
  const isDone = (id) => !!topic(id).done;
  const starsOf = (n) => { const q = (topic(rid(n)).quizzes || {}).stars; return q ? Math.round(q / 100 * 3) : 0; };
  const reduced = () => window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* bozze (programmi lasciati a metà), per profilo */
  const DKEY = 'zainetto-coding-drafts';
  function draftAll() { try { return JSON.parse(localStorage.getItem(DKEY)) || {}; } catch (e) { return {}; } }
  function getDraft(k) { const p = Store.current(); return p ? draftAll()[p.id + ':' + k] : null; }
  function setDraft(k, v) { const p = Store.current(); if (!p) return; const d = draftAll(); if (v == null) delete d[p.id + ':' + k]; else d[p.id + ':' + k] = v; try { localStorage.setItem(DKEY, JSON.stringify(d)); } catch (e) { /* pieno */ } }

  async function loadData() {
    const jobs = [];
    if (!W.CODING_ROBOT) jobs.push(Z.loadScript('data/coding/robot-levels.js'));
    if (!W.CODING_TURTLE) jobs.push(Z.loadScript('data/coding/turtle-challenges.js'));
    await Promise.all(jobs);
  }
  const RL = () => W.CODING_ROBOT.levels, TC = () => W.CODING_TURTLE.challenges;
  const chapterOf = (n) => W.CODING_ROBOT.chapters.find((c) => n >= c.from && n <= c.to);
  const unlocked = (n) => n === 1 || isDone(rid(n)) || isDone(rid(n - 1));

  /* ---------- effetti ---------- */
  function confetti(n) {
    if (reduced()) return;
    const box = h('div', 'cd-confetti'); const cols = ['#f43f5e', '#f59e0b', '#22c55e', '#3b82f6', '#a855f7', '#ec4899', '#facc15'];
    for (let i = 0; i < (n || 90); i++) {
      const c = h('i'); c.style.left = Math.random() * 100 + 'vw'; c.style.background = cols[i % cols.length];
      c.style.animationDelay = (Math.random() * 0.6) + 's'; c.style.animationDuration = (1.8 + Math.random() * 1.6) + 's';
      c.style.setProperty('--dx', (Math.random() * 160 - 80) + 'px'); c.style.setProperty('--r', (Math.random() * 900 - 450) + 'deg');
      if (i % 3 === 0) c.style.borderRadius = '50%';
      box.appendChild(c);
    }
    document.body.appendChild(box); setTimeout(() => box.remove(), 4200);
  }
  function pop(host, text, x, y) {
    const p = h('div', 'cd-pop', text); p.style.left = x + '%'; p.style.top = y + '%'; host.appendChild(p); setTimeout(() => p.remove(), 1200);
  }
  const starRow = (k, max, cls) => `<span class="cd-stars ${cls || ''}">${Array.from({ length: max || 3 }, (_, i) => `<i class="${i < k ? 'on' : ''}">★</i>`).join('')}</span>`;

  /* ---------- illustrazioni ---------- */
  function robotSprite() {
    return `<ellipse cx="0" cy="24" rx="17" ry="4.5" fill="rgba(15,23,42,.18)"/>
      <g class="rb-inner">
        <line x1="0" y1="-21" x2="0" y2="-29" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
        <circle class="rb-led" cx="0" cy="-31" r="4" fill="#f43f5e"/>
        <rect x="-21" y="-1" width="6" height="13" rx="3" fill="#3b82f6"/><rect x="15" y="-1" width="6" height="13" rx="3" fill="#3b82f6"/>
        <rect x="-14" y="2" width="28" height="18" rx="6" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
        <circle cx="0" cy="11" r="3.6" fill="#facc15" stroke="#ca8a04" stroke-width="1.2"/>
        <rect x="-11" y="19" width="8" height="6" rx="3" fill="#334155"/><rect x="3" y="19" width="8" height="6" rx="3" fill="#334155"/>
        <rect x="-18" y="-22" width="36" height="25" rx="10" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>
        <rect x="-13.5" y="-18" width="27" height="16" rx="6" fill="#0f172a"/>
        <g class="rb-eyes"><circle cx="-6" cy="-11" r="3.3" fill="#67e8f9"/><circle cx="6" cy="-11" r="3.3" fill="#67e8f9"/></g>
        <path d="M-4 -6 q4 3 8 0" stroke="#67e8f9" stroke-width="1.6" fill="none" stroke-linecap="round"/>
        <circle cx="-20" cy="-10" r="2.5" fill="#1d4ed8"/><circle cx="20" cy="-10" r="2.5" fill="#1d4ed8"/>
      </g>`;
  }
  const robotIllu = (size) => `<svg class="cd-illu" viewBox="-40 -42 80 76" width="${size}" height="${size}" aria-hidden="true">${robotSprite()}</svg>`;
  const turtleIllu = (size) => `<svg class="cd-illu" viewBox="-44 -44 88 88" width="${size}" height="${size}" aria-hidden="true">
      <g transform="rotate(-20)"><ellipse cx="0" cy="-30" rx="9" ry="10" fill="#4ade80" stroke="#15803d" stroke-width="2"/>
      <circle cx="-3.5" cy="-33" r="1.8" fill="#0f172a"/><circle cx="3.5" cy="-33" r="1.8" fill="#0f172a"/>
      <ellipse cx="-20" cy="-14" rx="7" ry="5" fill="#4ade80" stroke="#15803d" stroke-width="2"/><ellipse cx="20" cy="-14" rx="7" ry="5" fill="#4ade80" stroke="#15803d" stroke-width="2"/>
      <ellipse cx="-19" cy="17" rx="7" ry="5" fill="#4ade80" stroke="#15803d" stroke-width="2"/><ellipse cx="19" cy="17" rx="7" ry="5" fill="#4ade80" stroke="#15803d" stroke-width="2"/>
      <path d="M-3 26 L0 34 L3 26z" fill="#4ade80" stroke="#15803d" stroke-width="1.5"/>
      <ellipse cx="0" cy="0" rx="21" ry="25" fill="#16a34a" stroke="#14532d" stroke-width="2.5"/>
      <path d="M0 -14 L10 -6 L10 7 L0 14 L-10 7 L-10 -6z" fill="#22c55e" stroke="#14532d" stroke-width="1.5"/>
      <path d="M0 -14 V-24 M10 -6 L19 -11 M10 7 L19 12 M0 14 V24 M-10 7 L-19 12 M-10 -6 L-19 -11" stroke="#14532d" stroke-width="1.5"/></g></svg>`;

  /* ---------- pagina principale ---------- */
  function crumbs(parts) { return `<div class="crumbs cd-crumbs"><a href="#/coding">💻 ${t('cd.title')}</a>${parts.map((p) => ` › ${p}`).join('')}</div>`; }
  function pageHub(m) {
    const p = Store.current(); const medie = p && /^m/.test(p.year || '');
    const nR = RL().length, nT = TC().length;
    let rDone = 0, rStars = 0, tDone = 0;
    for (let i = 1; i <= nR; i++) { if (isDone(rid(i))) rDone++; rStars += starsOf(i); }
    for (let i = 1; i <= nT; i++) if (isDone(tid(i))) tDone++;
    m.innerHTML = `<section class="cd-hero">
        <div class="cd-hero-txt"><h1>${t('cd.title')}</h1><p>${t('cd.hub.lead')}</p></div>
        <div class="cd-hero-art">${robotIllu(120)}${turtleIllu(110)}</div>
      </section>
      <div class="cd-tracks">
        <a class="cd-track cd-t-robot ${!medie ? 'rec' : ''}" href="#/coding/robot">
          ${!medie ? `<span class="cd-rec">✨ ${t('cd.hub.rec')}</span>` : ''}
          <div class="cd-track-art">${robotIllu(96)}</div>
          <div class="cd-track-txt"><small>${t('cd.hub.primaria')}</small><h2>${t('cd.robot')}</h2><p>${t('cd.hub.robotDesc')}</p>
          <div class="cd-meter"><i style="width:${Math.round(rDone / nR * 100)}%"></i></div>
          <div class="cd-track-stat"><span>${t('cd.levelsDone', { n: rDone, tot: nR })}</span><span class="cd-gold">★ ${rStars}/${nR * 3}</span></div>
          <span class="btn">${rDone ? t('cd.continue') : t('cd.play')} ▶</span></div>
        </a>
        <a class="cd-track cd-t-turtle ${medie ? 'rec' : ''}" href="#/coding/tartaruga">
          ${medie ? `<span class="cd-rec">✨ ${t('cd.hub.rec')}</span>` : ''}
          <div class="cd-track-art">${turtleIllu(96)}</div>
          <div class="cd-track-txt"><small>${t('cd.hub.medie')}</small><h2>${t('cd.turtle')}</h2><p>${t('cd.hub.turtleDesc')}</p>
          <div class="cd-meter"><i style="width:${Math.round(tDone / nT * 100)}%"></i></div>
          <div class="cd-track-stat"><span>${t('cd.challDone', { n: tDone, tot: nT })}</span></div>
          <span class="btn">${tDone ? t('cd.continue') : t('cd.play')} ▶</span></div>
        </a>
      </div>
      <div class="card cd-what"><h2>🤔 ${t('cd.what.title')}</h2>
        <div class="cd-what-grid">
          <div><b>📋</b><h3>${t('cd.what.seqT')}</h3><p>${t('cd.what.seq')}</p></div>
          <div><b>🔁</b><h3>${t('cd.what.loopT')}</h3><p>${t('cd.what.loop')}</p></div>
          <div><b>❓</b><h3>${t('cd.what.ifT')}</h3><p>${t('cd.what.if')}</p></div>
          <div><b>🧩</b><h3>${t('cd.what.fnT')}</h3><p>${t('cd.what.fn')}</p></div>
        </div></div>`;
  }

  /* ---------- mappa dei livelli del robot ---------- */
  function pageRobotMap(m) {
    const nR = RL().length; let stars = 0, done = 0;
    for (let i = 1; i <= nR; i++) { stars += starsOf(i); if (isDone(rid(i))) done++; }
    let nextN = 1; while (nextN <= nR && isDone(rid(nextN))) nextN++;
    m.innerHTML = crumbs([t('cd.robot')]) + `<div class="cd-maphead">${robotIllu(70)}<div><h1>${t('cd.robot')}</h1><p class="muted">${t('cd.robot.mapLead')}</p></div>
      <div class="cd-mapstat"><b class="cd-gold">★ ${stars}<small>/${nR * 3}</small></b><span>${t('cd.levelsDone', { n: done, tot: nR })}</span></div></div>`;
    for (const ch of W.CODING_ROBOT.chapters) {
      const sec = h('section', 'cd-chapter'); sec.style.setProperty('--cc', ch.color);
      let chDone = 0; for (let i = ch.from; i <= ch.to; i++) if (isDone(rid(i))) chDone++;
      sec.innerHTML = `<header><span class="cd-ch-ico">${ch.icon}</span><div><h2>${esc(L(ch.name))}</h2><p>${esc(L(ch.desc))}</p></div><span class="cd-ch-count">${chDone}/${ch.to - ch.from + 1}</span></header>`;
      const path = h('div', 'cd-path');
      for (let i = ch.from; i <= ch.to; i++) {
        const lv = RL()[i - 1]; const open = unlocked(i), st = starsOf(i), d = isDone(rid(i));
        const a = h(open ? 'a' : 'span', 'cd-node' + (d ? ' done' : '') + (open ? '' : ' locked') + (i === nextN ? ' next' : ''));
        if (open) a.href = '#/coding/robot/' + i;
        a.title = L(lv.name);
        a.innerHTML = `<span class="cd-node-b">${open ? i : '🔒'}</span>${starRow(st)}<small>${esc(L(lv.name))}</small>`;
        path.appendChild(a);
      }
      sec.appendChild(path); m.appendChild(sec);
    }
  }

  /* ---------- tavola del robot (SVG) ---------- */
  const S = 64;
  const DEFS = `<defs>
    <radialGradient id="cdStar" cx="50%" cy="40%" r="60%"><stop offset="0" stop-color="#fef08a"/><stop offset="1" stop-color="#f59e0b"/></radialGradient>
    <radialGradient id="cdGlow"><stop offset="0" stop-color="#fde047" stop-opacity=".75"/><stop offset="1" stop-color="#fde047" stop-opacity="0"/></radialGradient>
    <linearGradient id="cdWater" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7dd3fc"/><stop offset="1" stop-color="#0ea5e9"/></linearGradient>
    <linearGradient id="cdCoin" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset=".55" stop-color="#fbbf24"/><stop offset="1" stop-color="#d97706"/></linearGradient>
    <linearGradient id="cdStone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cbd5e1"/><stop offset="1" stop-color="#94a3b8"/></linearGradient>
  </defs>`;
  function tileSVG(c, x, y, w) {
    const X = x * S, Y = y * S, cx = X + S / 2, cy = Y + S / 2;
    const grass = `<rect x="${X}" y="${Y}" width="${S}" height="${S}" fill="${(x + y) % 2 ? '#d9f2b4' : '#cdeca1'}"/>`;
    switch (c) {
      case '#': return `<g><rect x="${X + 1}" y="${Y + 1}" width="${S - 2}" height="${S - 2}" rx="7" fill="url(#cdStone)" stroke="#64748b" stroke-width="2"/>
        <path d="M${X + 3} ${Y + S / 3} H${X + S - 3} M${X + 3} ${Y + 2 * S / 3} H${X + S - 3} M${cx} ${Y + 3} V${Y + S / 3} M${X + S / 4} ${Y + S / 3} V${Y + 2 * S / 3} M${X + 3 * S / 4} ${Y + S / 3} V${Y + 2 * S / 3} M${cx} ${Y + 2 * S / 3} V${Y + S - 3}" stroke="#64748b" stroke-width="1.6" opacity=".7"/></g>`;
      case 'T': return `${grass}<g class="cd-tree"><ellipse cx="${cx}" cy="${Y + S - 9}" rx="16" ry="4" fill="rgba(0,0,0,.13)"/><rect x="${cx - 4}" y="${cy + 4}" width="8" height="18" rx="3" fill="#92400e"/>
        <circle cx="${cx - 9}" cy="${cy + 2}" r="11" fill="#16a34a"/><circle cx="${cx + 9}" cy="${cy + 2}" r="11" fill="#16a34a"/><circle cx="${cx}" cy="${cy - 10}" r="14" fill="#22c55e"/>
        <circle cx="${cx - 5}" cy="${cy - 14}" r="4" fill="#4ade80" opacity=".8"/></g>`;
      case '~': return `<g><rect x="${X}" y="${Y}" width="${S}" height="${S}" fill="url(#cdWater)"/>
        <path class="cd-wave" d="M${X + 6} ${Y + 22} q8 -6 16 0 t16 0 t16 0" stroke="#e0f2fe" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".8"/>
        <path class="cd-wave b" d="M${X + 4} ${Y + 44} q8 -6 16 0 t16 0 t16 0" stroke="#e0f2fe" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".6"/></g>`;
      case 'D': {
        const open = w.opened[x + ',' + y];
        return grass + (open
          ? `<g class="cd-door open"><rect x="${X + 10}" y="${Y + 6}" width="${S - 20}" height="${S - 10}" rx="5" fill="#451a03" stroke="#78350f" stroke-width="3"/><path d="M${X + 10} ${Y + 6} L${X + 22} ${Y + 12} V${Y + S - 8} L${X + 10} ${Y + S - 4}z" fill="#b45309" stroke="#78350f" stroke-width="2"/></g>`
          : `<g class="cd-door"><rect x="${X + 10}" y="${Y + 6}" width="${S - 20}" height="${S - 10}" rx="5" fill="#b45309" stroke="#78350f" stroke-width="3"/>
            <rect x="${X + 16}" y="${Y + 12}" width="${S - 32}" height="16" rx="3" fill="none" stroke="#78350f" stroke-width="2" opacity=".6"/>
            <circle cx="${cx}" cy="${cy + 8}" r="4" fill="#1c1917"/><path d="M${cx - 2.5} ${cy + 9} h5 l1.5 8 h-8z" fill="#1c1917"/></g>`);
      }
      case '*': return `${grass}<circle class="cd-glow" cx="${cx}" cy="${cy}" r="28" fill="url(#cdGlow)"/>
        <polygon class="cd-star" points="${starPts(cx, cy, 21, 9)}" fill="url(#cdStar)" stroke="#d97706" stroke-width="2.5" stroke-linejoin="round"/>`;
      default: return grass;
    }
  }
  function starPts(cx, cy, R, r) { const p = []; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r : R; p.push((cx + rr * Math.cos(a)).toFixed(1) + ',' + (cy + rr * Math.sin(a)).toFixed(1)); } return p.join(' '); }
  function itemSVG(it, x, y) {
    const cx = x * S + S / 2, cy = y * S + S / 2;
    if (it === 'c') return `<g class="cd-item" data-k="${x},${y}"><g class="cd-coin" style="transform-origin:${cx}px ${cy}px"><circle cx="${cx}" cy="${cy}" r="12.5" fill="url(#cdCoin)" stroke="#b45309" stroke-width="2.2"/>
      <circle cx="${cx}" cy="${cy}" r="7.5" fill="none" stroke="#fef3c7" stroke-width="1.8" opacity=".9"/><path d="M${cx - 5} ${cy - 6} q3 -3 7 -2" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></g></g>`;
    return `<g class="cd-item" data-k="${x},${y}"><g class="cd-key" style="transform-origin:${cx}px ${cy}px"><circle cx="${cx - 8}" cy="${cy}" r="7" fill="none" stroke="#eab308" stroke-width="4.5"/>
      <path d="M${cx - 1} ${cy} H${cx + 15} M${cx + 9} ${cy} V${cy + 7} M${cx + 14} ${cy} V${cy + 6}" stroke="#eab308" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="${cx - 8}" cy="${cy}" r="7" fill="none" stroke="#a16207" stroke-width="1.2"/></g></g>`;
  }
  function boardSVG(w) {
    let tiles = '';
    for (let y = 0; y < w.H; y++) for (let x = 0; x < w.W; x++) tiles += tileSVG(w.cells[y][x], x, y, w);
    let items = ''; for (const k in w.items) { const [x, y] = k.split(',').map(Number); items += itemSVG(w.items[k], x, y); }
    return `<svg class="cd-board" viewBox="-4 -4 ${w.W * S + 8} ${w.H * S + 8}" role="img" aria-label="${esc(t('cd.robot'))}">${DEFS}
      <rect x="-4" y="-4" width="${w.W * S + 8}" height="${w.H * S + 8}" rx="16" fill="#a3d977"/>
      <g class="cd-tiles">${tiles}</g><g class="cd-items">${items}</g>
      <g class="cd-rpos"><g class="cd-dir"><path d="M0 -41 l8 10 h-16z" fill="#f97316" stroke="#fff" stroke-width="2" stroke-linejoin="round"/></g>${robotSprite()}</g></svg>`;
  }

  /* ---------- palette e blocchi ---------- */
  const BLOCKS = {
    fwd: { ico: '⬆', cls: 'move' }, left: { ico: '↺', cls: 'turn' }, right: { ico: '↻', cls: 'turn' }, pick: { ico: '✋', cls: 'pick' },
    rep: { ico: '🔁', cls: 'loop' }, until: { ico: '⭐', cls: 'until' }, if: { ico: '❓', cls: 'cond' }, fn: { ico: '🧩', cls: 'fn' }
  };
  function newNode(type, lv) {
    switch (type) {
      case 'rep': return { t: 'rep', n: 3, body: [] };
      case 'until': return { t: 'until', body: [] };
      case 'if': return { t: 'if', c: (lv.conds || ['wall'])[0], then: [], else: [] };
      case 'fn': return { t: 'call' };
      default: return { t: type };
    }
  }
  const blockLabel = (type) => t('cd.b.' + type);

  /* ---------- livello del robot ---------- */
  const SPEEDS = [1000, 650, 420, 250, 110];
  function pageRobotLevel(m, n) {
    const lv = RL()[n - 1];
    if (!lv) { location.hash = '#/coding/robot'; return; }
    if (!unlocked(n)) { location.hash = '#/coding/robot'; return; }
    Store.visit(rid(n));
    const ch = chapterOf(n); const hasFn = lv.blocks.includes('fn');
    const best = Coding.progCount({ main: Coding.fromShort(lv.sol.main), fn: Coding.fromShort(lv.sol.fn) });
    let prog = getDraft('robot:' + n) || { main: [], fn: [] };
    if (!prog.fn) prog.fn = [];
    const S0 = { prog, target: prog.main, undo: [], running: false, gen: null, world: null, timer: null, fails: 0, rot: 0, stepMode: false, els: new Map(), speed: +(getDraft('speed') || 3) };
    m.style.setProperty('--cc', ch.color);
    m.innerHTML = crumbs([`<a href="#/coding/robot">${t('cd.robot')}</a>`, t('cd.level', { n })]) +
      `<div class="cd-lvhead"><span class="cd-lvnum">${n}</span><div><small style="color:${ch.color}">${ch.icon} ${esc(L(ch.name))}</small><h1>${esc(L(lv.name))}</h1></div>
        <div class="cd-lvstars">${starRow(starsOf(n))}</div></div>
      <div class="cd-rb">
        <div class="cd-stage">
          <div class="cd-goal"><b>🎯</b><span>${esc(L(lv.goal))}</span></div>
          <div class="cd-hud"><span class="cd-h-coins"></span><span class="cd-h-keys"></span><span class="cd-h-blocks"></span></div>
          <div class="cd-boardwrap"></div>
          <div class="cd-msg" aria-live="polite"></div>
          <div class="cd-ctl">
            <button class="btn cd-run">▶ ${t('cd.run')}</button>
            <button class="btn btn-ghost cd-step" title="${t('cd.stepT')}">⏭ ${t('cd.step')}</button>
            <button class="btn btn-ghost cd-reset" title="${t('cd.resetT')}">↺</button>
            <label class="cd-speed" title="${t('cd.speed')}"><span>🐢</span><input type="range" min="1" max="5" value="${S0.speed}" aria-label="${t('cd.speed')}"><span>🐇</span></label>
          </div>
        </div>
        <div class="cd-side">
          <div class="cd-panel"><div class="cd-panel-h">🧱 ${t('cd.blocks')}<small>${t('cd.blocksHelp')}</small></div><div class="cd-palette"></div></div>
          <div class="cd-progs"></div>
          <div class="cd-tools">
            <button class="btn btn-ghost btn-small cd-undo">↶ ${t('cd.undo')}</button>
            <button class="btn btn-ghost btn-small cd-clear">🗑 ${t('cd.clear')}</button>
            <button class="btn btn-ghost btn-small cd-hintb">💡 ${t('cd.hint')}</button>
            <button class="btn btn-ghost btn-small cd-solb" hidden>👀 ${t('cd.solution')}</button>
          </div>
          <div class="cd-hint" hidden></div>
        </div>
      </div>
      <div class="cd-foot">${n > 1 ? `<a class="btn btn-ghost" href="#/coding/robot/${n - 1}">← ${t('cd.prev')}</a>` : '<span></span>'}
        <a class="btn btn-ghost" href="#/coding/robot">🗺️ ${t('cd.map')}</a>
        ${n < RL().length ? `<a class="btn btn-ghost cd-nextl ${unlocked(n + 1) ? '' : 'disabled'}" href="#/coding/robot/${n + 1}">${t('cd.next')} →</a>` : '<span></span>'}</div>`;
    const $ = (s) => m.querySelector(s);
    const wrap = $('.cd-boardwrap'), msg = $('.cd-msg');
    const setMsg = (txt, kind) => { msg.className = 'cd-msg' + (kind ? ' ' + kind : ''); msg.innerHTML = txt; };

    /* -- mondo -- */
    function placeRobot(w, instant) {
      const g = wrap.querySelector('.cd-rpos'); if (!g) return;
      if (instant) g.style.transition = 'none';
      g.style.transform = `translate(${w.x * S + S / 2}px, ${w.y * S + S / 2}px)`;
      wrap.querySelector('.cd-dir').style.transform = `rotate(${S0.rot}deg)`;
      const D = [[0, -1], [1, 0], [0, 1], [-1, 0]][w.d];
      wrap.querySelector('.rb-eyes').style.transform = `translate(${D[0] * 2.6}px, ${D[1] * 2}px)`;
      if (instant) { g.getBoundingClientRect(); g.style.transition = ''; }
    }
    function hud(w) {
      $('.cd-h-coins').innerHTML = w.coinsTotal ? `<i class="cd-mini-coin"></i> ${w.coins}/${w.coinsTotal}` : '';
      $('.cd-h-keys').innerHTML = (lv.map.join('').includes('k')) ? `🔑 ${w.keys}` : '';
      const c = Coding.progCount(S0.prog);
      $('.cd-h-blocks').innerHTML = `🧱 ${c}${lv.max ? '/' + lv.max : ''}`;
      $('.cd-h-blocks').classList.toggle('full', !!lv.max && c >= lv.max);
    }
    function resetWorld() {
      stop();
      S0.world = Coding.makeWorld(lv); S0.rot = S0.world.d * 90; S0.gen = null; S0.stepMode = false;
      wrap.innerHTML = boardSVG(S0.world);
      wrap.querySelector('svg').style.setProperty('--dur', SPEEDS[S0.speed - 1] * 0.8 + 'ms');
      placeRobot(S0.world, true); hud(S0.world); clearRunMarks();
      m.querySelector('.cd-rb').classList.remove('running');
      setMsg(Coding.progCount(S0.prog) ? t('cd.msg.ready') : t('cd.msg.start'));
      const win = m.querySelector('.cd-win'); if (win) win.remove();
    }
    function clearRunMarks() { m.querySelectorAll('.cd-blk.run, .cd-blk.ok, .cd-blk.no').forEach((e) => e.classList.remove('run', 'ok', 'no')); }

    /* -- editor dei programmi -- */
    function snapshot() { S0.undo.push(JSON.stringify(S0.prog)); if (S0.undo.length > 60) S0.undo.shift(); }
    function changed() { setDraft('robot:' + n, Coding.progCount(S0.prog) ? S0.prog : null); renderProgs(); resetWorld(); }
    function contains(node, list) {
      for (const k of ['body', 'then', 'else']) if (node[k]) { if (node[k] === list) return true; for (const c of node[k]) if (contains(c, list)) return true; }
      return false;
    }
    function add(type) {
      if (S0.running) return;
      if (lv.max && Coding.progCount(S0.prog) >= lv.max) { setMsg(t('cd.msg.max', { n: lv.max }), 'bad'); $('.cd-h-blocks').classList.remove('shake'); void $('.cd-h-blocks').offsetWidth; $('.cd-h-blocks').classList.add('shake'); return; }
      snapshot();
      const node = newNode(type, lv); S0.target.push(node);
      if (node.body) S0.target = node.body; else if (node.then) S0.target = node.then;
      S0.lastAdded = node;
      changed();
    }
    function removeNode(node, list) {
      if (S0.running) return;
      snapshot();
      const i = list.indexOf(node); if (i >= 0) list.splice(i, 1);
      if (contains(node, S0.target)) S0.target = list;
      changed();
    }
    function renderList(list, area) {
      const box = h('div', 'cd-list');
      for (const node of list) box.appendChild(renderNode(node, list, area));
      const slot = h('button', 'cd-slot' + (S0.target === list ? ' on' : ''), S0.target === list ? `＋ ${t('cd.addHere')}` : '＋');
      slot.type = 'button'; slot.title = t('cd.addHere');
      slot.onclick = (e) => { e.stopPropagation(); if (S0.running) return; S0.target = list; renderProgs(); };
      box.appendChild(slot);
      return box;
    }
    function renderNode(node, list, area) {
      const type = node.t === 'call' ? 'fn' : node.t, B = BLOCKS[type];
      const el = h('div', `cd-blk b-${B.cls}`);
      S0.els.set(node, el);
      if (node === S0.lastAdded) { el.classList.add('new'); S0.lastAdded = null; }
      const head = h('div', 'cd-bh', `<span class="cd-ico">${B.ico}</span><span class="cd-bl">${blockLabel(type)}</span>`);
      head.title = t('cd.tapRemove');
      head.onclick = (e) => { e.stopPropagation(); removeNode(node, list); };
      el.appendChild(head);
      if (node.t === 'rep') {
        const num = h('span', 'cd-num', `<button type="button" aria-label="-">−</button><b>${node.n}</b><button type="button" aria-label="+">+</button>`);
        const [minus, plus] = num.querySelectorAll('button');
        minus.onclick = (e) => { e.stopPropagation(); if (S0.running || node.n <= 2) return; snapshot(); node.n--; changed(); };
        plus.onclick = (e) => { e.stopPropagation(); if (S0.running || node.n >= 12) return; snapshot(); node.n++; changed(); };
        num.onclick = (e) => e.stopPropagation();
        head.appendChild(num); head.appendChild(h('span', 'cd-bl', t('cd.b.times')));
      }
      if (node.t === 'if') {
        const conds = lv.conds || ['wall'];
        const cb = h('button', 'cd-cond', `${t('cd.c.' + node.c)}${conds.length > 1 ? ' ▾' : ''}`); cb.type = 'button';
        cb.title = t('cd.condT');
        cb.onclick = (e) => { e.stopPropagation(); if (S0.running || conds.length < 2) return; snapshot(); node.c = conds[(conds.indexOf(node.c) + 1) % conds.length]; changed(); };
        head.appendChild(cb);
      }
      if (node.body) el.appendChild(withGutter(renderList(node.body, area)));
      if (node.then) {
        el.appendChild(withGutter(renderList(node.then, area)));
        el.appendChild(h('div', 'cd-bmid', t('cd.b.else')));
        el.appendChild(withGutter(renderList(node.else, area)));
      }
      if (node.body || node.then) el.appendChild(h('div', 'cd-bfoot'));
      return el;
    }
    const withGutter = (list) => { const b = h('div', 'cd-bbody'); b.appendChild(list); return b; };
    function renderProgs() {
      S0.els = new Map();
      const box = $('.cd-progs'); box.innerHTML = '';
      const areas = [['main', '📜 ' + t('cd.program')]]; if (hasFn) areas.push(['fn', '🧩 ' + t('cd.b.fn')]);
      for (const [area, title] of areas) {
        const list = S0.prog[area];
        const p = h('div', 'cd-panel cd-prog' + (area === 'fn' ? ' cd-fnarea' : '') + (contains({ body: list }, S0.target) || S0.target === list ? ' active' : ''));
        p.innerHTML = `<div class="cd-panel-h">${title}${area === 'fn' ? `<small>${t('cd.fnHelp')}</small>` : `<small>${t('cd.count', { n: Coding.progCount(S0.prog), best })}</small>`}</div>`;
        const lst = renderList(list, area); lst.classList.add('cd-root');
        if (!list.length) lst.insertAdjacentHTML('afterbegin', `<div class="cd-empty">${area === 'fn' ? t('cd.fnEmpty') : t('cd.progEmpty')}</div>`);
        p.appendChild(lst);
        p.onclick = () => { if (!S0.running && S0.target !== list && !contains({ body: list }, S0.target)) { S0.target = list; renderProgs(); } };
        box.appendChild(p);
      }
      hud(S0.world || Coding.makeWorld(lv));
    }
    function renderPalette() {
      const pal = $('.cd-palette'); pal.innerHTML = '';
      for (const type of lv.blocks) {
        const B = BLOCKS[type];
        const b = h('button', `cd-pb b-${B.cls}`, `<span class="cd-ico">${B.ico}</span><span>${blockLabel(type)}</span>`); b.type = 'button';
        b.onclick = () => add(type);
        pal.appendChild(b);
      }
    }

    /* -- esecuzione -- */
    function stop() { clearTimeout(S0.timer); S0.running = false; const b = $('.cd-run'); if (b) b.innerHTML = `▶ ${t('cd.run')}`; }
    function start(stepMode) {
      if (!Coding.progCount(S0.prog)) { setMsg(t('cd.end.empty'), 'bad'); return false; }
      resetWorld();
      S0.gen = Coding.runRobot(S0.world, S0.prog); S0.stepMode = stepMode; S0.finishedShown = false;
      m.querySelector('.cd-rb').classList.add('running');
      setMsg(t('cd.msg.running'));
      return true;
    }
    function tickOnce() {
      const r = S0.gen.next();
      clearRunMarks();
      if (r.done) { finish(); return null; }
      const e = r.value, w = S0.world, el = S0.els.get(e.node);
      if (el) { el.classList.add('run'); if (e.ev === 'check') el.classList.add(e.ok ? 'ok' : 'no'); scrollIntoViewIfNeeded(el); }
      const inner = wrap.querySelector('.rb-inner');
      switch (e.ev) {
        case 'move':
          placeRobot(w);
          if (e.opened) { const tiles = wrap.querySelector('.cd-tiles'); tiles.innerHTML = ''; let s = ''; for (let y = 0; y < w.H; y++) for (let x = 0; x < w.W; x++) s += tileSVG(w.cells[y][x], x, y, w); tiles.innerHTML = s; popBoard('🔓', e.opened[0], e.opened[1]); hud(w); }
          break;
        case 'turn': S0.rot += e.by * 90; placeRobot(w); break;
        case 'pick': {
          const it = wrap.querySelector(`.cd-item[data-k="${e.x},${e.y}"]`);
          if (it) { it.classList.add('got'); setTimeout(() => it.remove(), 500); }
          popBoard(e.item === 'c' ? '+1' : '🔑', e.x, e.y); hud(w); break;
        }
        case 'fail':
          if (e.moved) placeRobot(w);
          inner.classList.remove('bump', 'sink', 'shrug'); void inner.getBBox();
          inner.classList.add(e.why === 'water' ? 'sink' : e.why === 'wall' || e.why === 'door' ? 'bump' : 'shrug');
          popBoard({ wall: '💥', door: '🔒', water: '💦', nothing: '❔', tired: '💤' }[e.why] || '❔', w.x, w.y);
          break;
      }
      if (w.done) setTimeout(finish, e.ev === 'fail' ? 300 : SPEEDS[S0.speed - 1] * 0.8);
      return e;
    }
    function popBoard(txt, x, y) { pop(wrap, txt, (x + 0.5) / S0.world.W * 100, (y + 0.2) / S0.world.H * 100); }
    function scrollIntoViewIfNeeded(el) {
      const root = el.closest('.cd-root'); if (!root || root.scrollHeight <= root.clientHeight) return;
      const r = el.getBoundingClientRect(), rr = root.getBoundingClientRect();
      if (r.top < rr.top || r.bottom > rr.bottom) root.scrollTop += r.top - rr.top - rr.height / 3;
    }
    function loop() {
      if (!S0.running) return;
      const e = tickOnce();
      if (!e || S0.world.done) { S0.running = false; return; }
      const quick = e.ev === 'loop' || e.ev === 'check' || e.ev === 'call';
      S0.timer = setTimeout(loop, SPEEDS[S0.speed - 1] * (quick ? 0.45 : 1));
    }
    function finish() {
      if (S0.finishedShown) return; S0.finishedShown = true;
      stop(); S0.gen = null; m.querySelector('.cd-rb').classList.remove('running');
      const w = S0.world;
      if (w.won) return win();
      S0.fails++;
      if (w.fail) setMsg(t('cd.fail.' + w.fail), 'bad');
      else if (w.coins < w.coinsTotal && w.x >= 0) setMsg(t('cd.end.coins', { n: w.coinsTotal - w.coins }), 'bad');
      else setMsg(t('cd.end.star'), 'bad');
      if (S0.fails >= 3) $('.cd-solb').hidden = false;
      if (S0.fails === 2) $('.cd-hint').hidden = false, $('.cd-hint').innerHTML = `💡 ${esc(L(lv.hint))}`;
    }
    function win() {
      const used = Coding.progCount(S0.prog);
      const stars = used <= best ? 3 : used <= best + 2 ? 2 : 1;
      const before = starsOf(n);
      Store.quizResult(rid(n), 'stars', stars, 3);
      if (!isDone(rid(n))) Store.markDone(rid(n), true);
      setMsg(t('cd.win'), 'good');
      wrap.querySelector('.rb-inner').classList.add('dance');
      const star = wrap.querySelector('.cd-star'); if (star) star.classList.add('burst');
      confetti(stars === 3 ? 120 : 70);
      const ov = h('div', 'cd-win');
      ov.innerHTML = `<div class="cd-win-box"><div class="cd-win-stars">${[0, 1, 2].map((i) => `<i class="${i < stars ? 'on' : ''}" style="animation-delay:${0.25 + i * 0.25}s">★</i>`).join('')}</div>
        <h2>${t(stars === 3 ? 'cd.win3' : 'cd.win')}</h2>
        <p>${t('cd.winBlocks', { n: used })} ${stars < 3 ? t('cd.winBest', { n: best }) : t('cd.winPerfect')}</p>
        ${stars > before && before ? `<p class="cd-gold">${t('cd.newRecord')}</p>` : ''}
        <div class="cd-win-btns"><button class="btn btn-ghost cd-again">↺ ${t('cd.again')}</button>
        ${n < RL().length ? `<a class="btn" href="#/coding/robot/${n + 1}">${t('cd.next')} →</a>` : `<a class="btn" href="#/coding/robot">🏆 ${t('cd.map')}</a>`}</div></div>`;
      $('.cd-stage').appendChild(ov);
      ov.querySelector('.cd-again').onclick = () => resetWorld();
      m.querySelector('.cd-lvstars').innerHTML = starRow(Math.max(before, stars));
      const nx = m.querySelector('.cd-nextl'); if (nx) nx.classList.remove('disabled');
    }

    $('.cd-run').onclick = () => {
      if (S0.running) { stop(); setMsg(t('cd.msg.paused')); return; }
      if (!S0.gen) { if (!start(false)) return; }
      S0.running = true; $('.cd-run').innerHTML = `⏸ ${t('cd.pause')}`; loop();
    };
    $('.cd-step').onclick = () => {
      if (S0.running) stop();
      if (!S0.gen) { if (!start(true)) return; }
      tickOnce();
    };
    $('.cd-reset').onclick = () => resetWorld();
    $('.cd-speed input').oninput = (e) => { S0.speed = +e.target.value; setDraft('speed', S0.speed); const sv = wrap.querySelector('svg'); if (sv) sv.style.setProperty('--dur', SPEEDS[S0.speed - 1] * 0.8 + 'ms'); };
    $('.cd-undo').onclick = () => { if (S0.running || !S0.undo.length) return; S0.prog = JSON.parse(S0.undo.pop()); S0.target = S0.prog.main; changed(); };
    $('.cd-clear').onclick = () => { if (S0.running || !Coding.progCount(S0.prog)) return; snapshot(); S0.prog = { main: [], fn: [] }; S0.target = S0.prog.main; changed(); };
    $('.cd-hintb').onclick = () => { const hb = $('.cd-hint'); hb.hidden = !hb.hidden; hb.innerHTML = `💡 ${esc(L(lv.hint))}`; };
    $('.cd-solb').onclick = () => {
      if (S0.running) return; snapshot();
      S0.prog = { main: Coding.fromShort(lv.sol.main), fn: Coding.fromShort(lv.sol.fn) }; S0.target = S0.prog.main; changed();
      setMsg(t('cd.msg.solution'));
    };
    renderPalette(); resetWorld(); renderProgs();
  }

  /* =====================================================================
     TARTARUGA
     ===================================================================== */
  const WORLD = 210; // la tela va da -210 a +210
  const targetCache = {};
  function targetOf(i) { if (!targetCache[i]) { const r = Coding.runLogo(TC()[i - 1].sol, { random: () => 0.5 }); targetCache[i] = { segs: Coding.segmentsOf(r.ops), ops: r.ops }; } return targetCache[i]; }

  function drawThumb(cv, segs) {
    const dpr = window.devicePixelRatio || 1, size = cv.clientWidth || 120;
    cv.width = size * dpr; cv.height = size * dpr;
    const c = cv.getContext('2d'); c.setTransform(dpr, 0, 0, dpr, 0, 0);
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const s of segs) { x0 = Math.min(x0, s[0], s[2]); x1 = Math.max(x1, s[0], s[2]); y0 = Math.min(y0, s[1], s[3]); y1 = Math.max(y1, s[1], s[3]); }
    const k = (size - 18) / Math.max(40, x1 - x0, y1 - y0), mx = (x0 + x1) / 2, my = (y0 + y1) / 2;
    c.lineCap = 'round'; c.lineJoin = 'round'; c.strokeStyle = '#16a34a'; c.lineWidth = 2;
    c.beginPath();
    for (const s of segs) { c.moveTo(size / 2 + (s[0] - mx) * k, size / 2 - (s[1] - my) * k); c.lineTo(size / 2 + (s[2] - mx) * k, size / 2 - (s[3] - my) * k); }
    c.stroke();
  }

  function pageTurtleList(m) {
    const nT = TC().length; let done = 0; for (let i = 1; i <= nT; i++) if (isDone(tid(i))) done++;
    m.innerHTML = crumbs([t('cd.turtle')]) + `<div class="cd-maphead">${turtleIllu(70)}<div><h1>${t('cd.turtle')}</h1><p class="muted">${t('cd.turtle.lead')}</p></div>
      <div class="cd-mapstat"><b class="cd-gold">✓ ${done}<small>/${nT}</small></b><span>${t('cd.challDone', { n: done, tot: nT })}</span></div></div>
      <a class="cd-free" href="#/coding/tartaruga/libero"><span>🎨</span><div><b>${t('cd.free')}</b><small>${t('cd.freeDesc')}</small></div><span class="btn">${t('cd.open')} →</span></a>
      <div class="cd-tgrid"></div>`;
    const grid = m.querySelector('.cd-tgrid'); const thumbs = [];
    TC().forEach((c, k) => {
      const i = k + 1, d = isDone(tid(i));
      const a = h('a', 'cd-tcard' + (d ? ' done' : ''));
      a.href = '#/coding/tartaruga/' + i;
      a.innerHTML = `<canvas></canvas><div><small>${t('cd.challenge', { n: i })}${c.need ? ` · <em>${c.need.map((x) => t('cd.need.' + x)).join(', ')}</em>` : ''}</small><b>${esc(L(c.name))}</b></div>${d ? '<span class="cd-tick">✓</span>' : ''}`;
      grid.appendChild(a); thumbs.push([a.querySelector('canvas'), i]);
    });
    requestAnimationFrame(() => thumbs.forEach(([cv, i]) => drawThumb(cv, targetOf(i).segs)));
  }

  function turtlePainter(canvas) {
    const layer = document.createElement('canvas');
    let size = 400, dpr = 1, k = 1;
    const P = { target: null, turtle: { x: 0, y: 0, h: 0, visible: true }, grid: true };
    const X = (x) => size / 2 + x * k, Y = (y) => size / 2 - y * k;
    function resize() {
      dpr = window.devicePixelRatio || 1; size = Math.round(canvas.clientWidth) || 400; k = size / (2 * WORLD);
      const old = layer.width ? layer : null; let copy = null;
      if (old) { copy = document.createElement('canvas'); copy.width = old.width; copy.height = old.height; copy.getContext('2d').drawImage(old, 0, 0); }
      canvas.width = layer.width = size * dpr; canvas.height = layer.height = size * dpr;
      if (copy) layer.getContext('2d').drawImage(copy, 0, 0, layer.width, layer.height);
      compose();
    }
    function clearLayer() { const c = layer.getContext('2d'); c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, layer.width, layer.height); }
    function seg(x0, y0, x1, y1, color, width) {
      const c = layer.getContext('2d'); c.setTransform(dpr, 0, 0, dpr, 0, 0);
      c.strokeStyle = color; c.lineWidth = Math.max(0.5, width * k * 1.05); c.lineCap = 'round'; c.lineJoin = 'round';
      c.beginPath(); c.moveTo(X(x0), Y(y0)); c.lineTo(X(x1), Y(y1)); c.stroke();
    }
    function drawTurtle(c, tu) {
      if (!tu.visible) return;
      c.save(); c.translate(X(tu.x), Y(tu.y)); c.rotate(tu.h * Math.PI / 180); const s = Math.max(0.7, size / 520);
      c.scale(s, s);
      c.lineWidth = 1.6; c.strokeStyle = '#14532d';
      c.fillStyle = '#4ade80';
      for (const [lx, ly] of [[-10, -7], [10, -7], [-10, 8], [10, 8]]) { c.beginPath(); c.ellipse(lx, ly, 4.5, 3.2, 0, 0, 7); c.fill(); c.stroke(); }
      c.beginPath(); c.ellipse(0, -15, 4.8, 5.4, 0, 0, 7); c.fill(); c.stroke();
      c.fillStyle = '#0f172a'; c.beginPath(); c.arc(-1.8, -16.5, 1, 0, 7); c.arc(1.8, -16.5, 1, 0, 7); c.fill();
      c.fillStyle = '#16a34a'; c.beginPath(); c.ellipse(0, 0, 10.5, 12.5, 0, 0, 7); c.fill(); c.stroke();
      c.fillStyle = '#22c55e'; c.beginPath(); c.moveTo(0, -6.5); c.lineTo(5, -3); c.lineTo(5, 3); c.lineTo(0, 6.5); c.lineTo(-5, 3); c.lineTo(-5, -3); c.closePath(); c.fill(); c.stroke();
      c.restore();
    }
    function compose() {
      const c = canvas.getContext('2d'); c.setTransform(dpr, 0, 0, dpr, 0, 0);
      c.fillStyle = '#ffffff'; c.fillRect(0, 0, size, size);
      if (P.grid) {
        c.lineWidth = 1;
        for (let v = -200; v <= 200; v += 50) {
          c.strokeStyle = v === 0 ? '#dbe3ee' : '#eef2f7';
          c.beginPath(); c.moveTo(X(v), 0); c.lineTo(X(v), size); c.moveTo(0, Y(v)); c.lineTo(size, Y(v)); c.stroke();
        }
      }
      if (P.target) {
        c.strokeStyle = 'rgba(148,163,184,.42)'; c.lineWidth = Math.max(5, 9 * k); c.lineCap = 'round'; c.lineJoin = 'round';
        c.beginPath(); for (const s of P.target) { c.moveTo(X(s[0]), Y(s[1])); c.lineTo(X(s[2]), Y(s[3])); } c.stroke();
      }
      c.setTransform(1, 0, 0, 1, 0, 0); c.drawImage(layer, 0, 0); c.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawTurtle(c, P.turtle);
    }
    /* animazione delle operazioni; budget = unità di disegno per fotogramma */
    let raf = null;
    function play(ops, budget, onLine, onDone) {
      cancel(); clearLayer(); P.turtle = { x: 0, y: 0, h: 0, visible: true };
      let i = 0, part = 0;
      const step = () => {
        let b = budget;
        while (i < ops.length && b > 0) {
          const o = ops[i];
          if (o.line && onLine) onLine(o.line);
          if (o.k === 'move') {
            const L0 = Math.hypot(o.x1 - o.x0, o.y1 - o.y0);
            const take = Math.min(L0 - part, b); const f0 = L0 ? part / L0 : 1, f1 = L0 ? (part + take) / L0 : 1;
            const ax = o.x0 + (o.x1 - o.x0) * f0, ay = o.y0 + (o.y1 - o.y0) * f0, bx = o.x0 + (o.x1 - o.x0) * f1, by = o.y0 + (o.y1 - o.y0) * f1;
            if (o.pen && take > 0) seg(ax, ay, bx, by, o.color, o.width);
            P.turtle.x = bx; P.turtle.y = by; part += take; b -= Math.max(take, 0.5);
            if (part >= L0 - 1e-9) { i++; part = 0; }
          } else if (o.k === 'turn') { P.turtle.h = o.h1; b -= budget === Infinity ? 0 : Math.min(8, Math.abs(o.h1 - o.h0) / 15 + 1); i++; }
          else if (o.k === 'clear') { clearLayer(); P.turtle.x = 0; P.turtle.y = 0; P.turtle.h = 0; i++; }
          else if (o.k === 'vis') { P.turtle.visible = o.v; i++; }
          else i++;
        }
        compose();
        if (i < ops.length) raf = requestAnimationFrame(step); else { raf = null; onDone && onDone(); }
      };
      if (budget === Infinity) step(); else raf = requestAnimationFrame(step);
    }
    function cancel() { if (raf) cancelAnimationFrame(raf); raf = null; }
    function reset() { cancel(); clearLayer(); P.turtle = { x: 0, y: 0, h: 0, visible: true }; compose(); }
    return { P, resize, compose, play, cancel, reset, busy: () => !!raf };
  }

  const REF = [
    ['cd.ref.move', ['avanti 50', 'indietro 50', 'destra 90', 'sinistra 90', 'vai 0 0', 'casa']],
    ['cd.ref.pen', ['penna su', 'penna giù', 'colore rosso', 'colore #ff8800', 'spessore 4', 'nascondi', 'cancella']],
    ['cd.ref.loop', ['ripeti 4 [ ]', 'metti lato 50', ':lato', 'ripetizione', 'casuale 100']],
    ['cd.ref.proc', ['per nome :x\n  \nfine', 'se :x > 10 [ stop ]', 'se :x < 5 [ ] altrimenti [ ]']]
  ];
  const SPEEDS_T = [2.5, 7, 18, 55, Infinity];

  function pageTurtle(m, key) {
    const free = key === 'libero', i = free ? 0 : parseInt(key, 10);
    const ch = free ? null : TC()[i - 1];
    if (!free && !ch) { location.hash = '#/coding/tartaruga'; return; }
    const id = free ? 'code:turtle:free' : tid(i);
    Store.visit(id);
    const draftKey = 'turtle:' + (free ? 'free' : i);
    const startCode = getDraft(draftKey) || (free ? W.CODING_TURTLE.examples[0].code : '');
    let fails = 0, speed = +(getDraft('tspeed') || 3), lastRun = null;
    m.innerHTML = crumbs([`<a href="#/coding/tartaruga">${t('cd.turtle')}</a>`, free ? t('cd.free') : t('cd.challenge', { n: i })]) +
      `<div class="cd-lvhead cd-tu-head"><span class="cd-lvnum t">${free ? '🎨' : i}</span><div><small>${free ? t('cd.freeDesc') : (ch.need ? '⚙️ ' + ch.need.map((x) => t('cd.need.' + x)).join(', ') : t('cd.turtle'))}</small><h1>${free ? t('cd.free') : esc(L(ch.name))}</h1></div>
        ${free ? '' : `<div class="cd-lvstars">${isDone(id) ? `<span class="cd-done-badge">✓ ${t('cd.solved')}</span>` : ''}</div>`}</div>
      ${free ? '' : `<div class="cd-goal"><b>🎯</b><span>${esc(L(ch.goal))}</span></div>`}
      <div class="cd-tu">
        <div class="cd-tu-code">
          <div class="cd-editor"><div class="cd-gutter" aria-hidden="true"></div><div class="cd-edwrap"><div class="cd-hl" hidden></div><div class="cd-hl run" hidden></div>
            <textarea spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" aria-label="${t('cd.codeLabel')}" placeholder="${esc(t('cd.codePh'))}"></textarea></div></div>
          <div class="cd-ctl">
            <button class="btn cd-draw">▶ ${t('cd.draw')}</button>
            <button class="btn btn-ghost cd-tstop" title="${t('cd.stop')}">⏹</button>
            <button class="btn btn-ghost cd-tclear" title="${t('cd.resetT')}">↺</button>
            <label class="cd-speed" title="${t('cd.speed')}"><span>🐢</span><input type="range" min="1" max="5" value="${speed}" aria-label="${t('cd.speed')}"><span>⚡</span></label>
          </div>
          <div class="cd-msg" aria-live="polite"></div>
          <div class="cd-tools">
            ${free ? `<select class="cd-ex" aria-label="${t('cd.examples')}"><option value="">📚 ${t('cd.examples')}…</option>${W.CODING_TURTLE.examples.map((e, k) => `<option value="${k}">${esc(L(e.name))}</option>`).join('')}</select>
              <button class="btn btn-ghost btn-small cd-png">📷 ${t('cd.savePng')}</button>`
              : `<button class="btn btn-ghost btn-small cd-hintb">💡 ${t('cd.hint')}</button><button class="btn btn-ghost btn-small cd-solb" hidden>👀 ${t('cd.solution')}</button>`}
            <button class="btn btn-ghost btn-small cd-refb">📖 ${t('cd.ref')}</button>
          </div>
          <div class="cd-hint" hidden></div>
          <div class="cd-ref" hidden>${REF.map(([k, items]) => `<div><b>${t(k)}</b>${items.map((s) => `<button type="button" class="cd-chip" data-ins="${esc(s)}">${esc(s.replace(/\n\s*\n/, ' … '))}</button>`).join('')}</div>`).join('')}
            <p class="small muted">${t('cd.ref.note')}</p></div>
        </div>
        <div class="cd-tu-canvas"><div class="cd-canvasbox"><canvas aria-label="${t('cd.turtle')}"></canvas>${free ? '' : `<span class="cd-legend"><i></i>${t('cd.targetLegend')}</span>`}</div>
          <div class="cd-tstate small muted"></div></div>
      </div>
      <div class="cd-foot">${!free && i > 1 ? `<a class="btn btn-ghost" href="#/coding/tartaruga/${i - 1}">← ${t('cd.prev')}</a>` : '<span></span>'}
        <a class="btn btn-ghost" href="#/coding/tartaruga">🐢 ${t('cd.allChall')}</a>
        ${!free && i < TC().length ? `<a class="btn btn-ghost" href="#/coding/tartaruga/${i + 1}">${t('cd.next')} →</a>` : '<span></span>'}</div>`;
    const $ = (s) => m.querySelector(s);
    const ta = $('textarea'), gutter = $('.cd-gutter'), hlErr = $('.cd-hl:not(.run)'), hlRun = $('.cd-hl.run'), msg = $('.cd-msg');
    ta.value = startCode;
    const painter = turtlePainter($('canvas'));
    if (!free) painter.P.target = targetOf(i).segs;
    const setMsg = (txt, kind) => { msg.className = 'cd-msg' + (kind ? ' ' + kind : ''); msg.innerHTML = txt; };
    let errLine = 0;
    const lineH = () => parseFloat(getComputedStyle(ta).lineHeight) || 22;
    function gutterUpdate() {
      const n = ta.value.split('\n').length;
      gutter.innerHTML = Array.from({ length: n }, (_, k) => `<div${k + 1 === errLine ? ' class="err"' : ''}>${k + 1}</div>`).join('');
      gutter.scrollTop = ta.scrollTop; placeHl();
    }
    function placeHl() {
      const pt = parseFloat(getComputedStyle(ta).paddingTop) || 0;
      for (const [elx, ln] of [[hlErr, errLine], [hlRun, hlRun.dataset.l | 0]]) {
        if (!ln) { elx.hidden = true; continue; }
        elx.hidden = false; elx.style.top = (pt + (ln - 1) * lineH() - ta.scrollTop) + 'px'; elx.style.height = lineH() + 'px';
      }
    }
    const setRunLine = (ln) => { if ((hlRun.dataset.l | 0) !== ln) { hlRun.dataset.l = ln; placeHl(); } };
    ta.addEventListener('input', () => { errLine = 0; gutterUpdate(); setDraft(draftKey, ta.value || null); });
    ta.addEventListener('scroll', () => { gutter.scrollTop = ta.scrollTop; placeHl(); });
    ta.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); draw(); return; }
      if (e.key === 'Tab' && !e.shiftKey) { e.preventDefault(); insert('  '); }
      if (e.key === 'Enter' && !e.ctrlKey) {
        const before = ta.value.slice(0, ta.selectionStart); const ind = (before.split('\n').pop().match(/^\s*/) || [''])[0];
        const extra = /\[\s*$/.test(before) || /^\s*(per|to)\b/i.test(before.split('\n').pop()) ? '  ' : '';
        if (ind || extra) { e.preventDefault(); insert('\n' + ind + extra); }
      }
    });
    function insert(s) {
      const a = ta.selectionStart, b = ta.selectionEnd;
      ta.setRangeText(s, a, b, 'end'); ta.dispatchEvent(new Event('input'));
      const c = s.indexOf('\n  \n'); if (c >= 0) { ta.selectionStart = ta.selectionEnd = a + c + 3; }
      ta.focus();
    }
    function showErr(err) {
      errLine = err.line; gutterUpdate();
      const vars = Object.assign({ line: err.line }, err.vars);
      for (const k in vars) vars[k] = esc(vars[k]);
      setMsg(`⚠️ <b>${t('cd.lineN', { n: err.line })}</b> ${t(err.key, vars)}`, 'bad');
    }
    function stateText(st) { return `x ${Math.round(st.x)} · y ${Math.round(st.y)} · ${t('cd.heading')} ${Math.round(((st.h % 360) + 360) % 360)}° · ${t(st.pen ? 'cd.penDown' : 'cd.penUp')}`; }
    function draw() {
      errLine = 0; gutterUpdate();
      const src = ta.value;
      if (!src.trim()) { setMsg(t('cd.t.empty'), 'bad'); return; }
      const r = Coding.runLogo(src); lastRun = r;
      $('.cd-draw').disabled = true;
      setMsg(r.error ? '' : t('cd.t.drawing'));
      painter.play(r.ops, SPEEDS_T[speed - 1], setRunLine, () => {
        setRunLine(0); $('.cd-draw').disabled = false;
        $('.cd-tstate').textContent = stateText(r.state);
        if (r.error) { showErr(r.error); fails++; afterFail(); return; }
        if (free) { setMsg(t('cd.t.doneFree'), 'good'); return; }
        check(r);
      });
      if (r.error) showErr(r.error);
    }
    function afterFail() { if (!free && fails >= 2) $('.cd-solb').hidden = false; }
    function check(r) {
      const res = Coding.compareDrawing(Coding.segmentsOf(r.ops), targetOf(i).segs, 5);
      const missing = (ch.need || []).filter((x) => !r.used[x]);
      if (res.ok && !missing.length) {
        const first = !isDone(id);
        Store.quizResult(id, 'check', 1, 1); if (first) Store.markDone(id, true);
        setMsg(`🎉 <b>${t('cd.t.ok')}</b> ${i < TC().length ? `<a class="btn btn-small" href="#/coding/tartaruga/${i + 1}">${t('cd.next')} →</a>` : ''}`, 'good');
        m.querySelector('.cd-lvstars').innerHTML = `<span class="cd-done-badge pop">✓ ${t('cd.solved')}</span>`;
        $('.cd-canvasbox').classList.add('win'); setTimeout(() => $('.cd-canvasbox').classList.remove('win'), 1600);
        confetti(first ? 110 : 50);
      } else if (res.ok) {
        setMsg(`🙂 ${t('cd.t.needs', { w: missing.map((x) => t('cd.need.' + x)).join(', ') })}`, 'warn'); fails++; afterFail();
      } else {
        setMsg(`🤔 ${t('cd.t.no', { p: Math.round(res.score * 100) })}`, 'bad'); fails++; afterFail();
      }
    }
    $('.cd-draw').onclick = draw;
    $('.cd-tstop').onclick = () => { painter.cancel(); setRunLine(0); $('.cd-draw').disabled = false; painter.compose(); setMsg(t('cd.t.stopped')); };
    $('.cd-tclear').onclick = () => { painter.reset(); setRunLine(0); errLine = 0; gutterUpdate(); $('.cd-draw').disabled = false; setMsg(''); $('.cd-tstate').textContent = ''; };
    $('.cd-speed input').oninput = (e) => { speed = +e.target.value; setDraft('tspeed', speed); };
    $('.cd-refb').onclick = () => { $('.cd-ref').hidden = !$('.cd-ref').hidden; };
    m.querySelectorAll('.cd-chip').forEach((b) => (b.onclick = () => {
      const s = b.dataset.ins; const pre = ta.value.slice(0, ta.selectionStart);
      insert((pre && !/\s$/.test(pre) ? '\n' : '') + s + (s.endsWith('fine') ? '\n' : ' '));
    }));
    if (free) {
      $('.cd-ex').onchange = (e) => { const k = e.target.value; if (k === '') return; ta.value = W.CODING_TURTLE.examples[k].code; ta.dispatchEvent(new Event('input')); e.target.value = ''; draw(); };
      $('.cd-png').onclick = () => { const a = document.createElement('a'); a.download = 'tartaruga.png'; a.href = $('canvas').toDataURL('image/png'); a.click(); };
    } else {
      $('.cd-hintb').onclick = () => { const hb = $('.cd-hint'); hb.hidden = !hb.hidden; hb.innerHTML = `💡 ${esc(L(ch.hint))}`; };
      $('.cd-solb').onclick = () => { ta.value = ch.sol; ta.dispatchEvent(new Event('input')); setMsg(t('cd.msg.solutionT')); };
    }
    gutterUpdate();
    const ro = new ResizeObserver(() => painter.resize()); ro.observe($('.cd-canvasbox'));
    const unhook = () => { if (!document.body.contains(ta)) { ro.disconnect(); painter.cancel(); window.removeEventListener('hashchange', unhook); } };
    window.addEventListener('hashchange', () => setTimeout(unhook, 0));
    painter.resize();
    if (free && startCode) draw();
    else if (!free) setMsg(t('cd.t.ready'));
  }

  /* ---------- registrazione ---------- */
  ZPages.coding = function (m, a, b) {
    m.innerHTML = `<div class="cd-loading">${robotIllu(64)}<span>…</span></div>`;
    loadData().then(() => {
      if (location.hash.replace(/^#\/?/, '').split('/')[0] !== 'coding') return;
      m.innerHTML = ''; m.classList.add('cd-page');
      if (a === 'robot') return b ? pageRobotLevel(m, parseInt(b, 10)) : pageRobotMap(m);
      if (a === 'tartaruga') return b ? pageTurtle(m, b) : pageTurtleList(m);
      return pageHub(m);
    }).catch(() => { m.innerHTML = `<div class="card">⚠️ ${t('cd.loadErr')}</div>`; });
  };
  window.addEventListener('hashchange', () => { const m = document.getElementById('main'); if (m && !/^#\/coding/.test(location.hash)) m.classList.remove('cd-page'); });
  if (W.Z) {
    for (let n = 1; n <= 60; n++) {
      Z.registerTitle(rid(n), '#/coding/robot/' + n, () => `🤖 ${t('cd.robot')} · ${t('cd.level', { n })}${W.CODING_ROBOT && RL()[n - 1] ? ' – ' + L(RL()[n - 1].name) : ''}`);
      Z.registerTitle(tid(n), '#/coding/tartaruga/' + n, () => `🐢 ${t('cd.turtle')} · ${t('cd.challenge', { n })}${W.CODING_TURTLE && TC()[n - 1] ? ' – ' + L(TC()[n - 1].name) : ''}`);
    }
    Z.registerTitle('code:turtle:free', '#/coding/tartaruga/libero', () => `🐢 ${t('cd.turtle')} · ${t('cd.free')}`);
  }
})();
