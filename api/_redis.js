// Client Redis minimo (Upstash REST) senza dipendenze.
// Variabili create da Vercel collegando "Upstash for Redis": KV_REST_API_URL/KV_REST_API_TOKEN oppure UPSTASH_REDIS_REST_URL/UPSTASH_REDIS_REST_TOKEN.
let URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
let TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
// se c'è solo REDIS_URL / KV_URL (rediss://default:<token>@<host>:<porta>) di Upstash, ricava l'indirizzo REST
if (!(URL_ && TOKEN)) {
  const raw = process.env.REDIS_URL || process.env.KV_URL || '';
  const m = raw.match(/^rediss?:\/\/[^:]*:([^@]+)@([^:/]+)/);
  if (m && /upstash\.io$/.test(m[2])) { URL_ = 'https://' + m[2]; TOKEN = decodeURIComponent(m[1]); }
}
const ready = () => !!(URL_ && TOKEN);
async function pipeline(cmds) {
  const r = await fetch(URL_.replace(/\/$/, '') + '/pipeline', {
    method: 'POST', headers: { Authorization: 'Bearer ' + TOKEN, 'Content-Type': 'application/json' }, body: JSON.stringify(cmds)
  });
  if (!r.ok) throw new Error('redis ' + r.status);
  return (await r.json()).map((x) => x.result);
}
module.exports = { ready, pipeline };
