// Client Redis minimo (Upstash REST) senza dipendenze.
// Variabili create da Vercel collegando "Upstash for Redis": KV_REST_API_URL/KV_REST_API_TOKEN oppure UPSTASH_REDIS_REST_URL/UPSTASH_REDIS_REST_TOKEN.
const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const ready = () => !!(URL_ && TOKEN);
async function pipeline(cmds) {
  const r = await fetch(URL_.replace(/\/$/, '') + '/pipeline', {
    method: 'POST', headers: { Authorization: 'Bearer ' + TOKEN, 'Content-Type': 'application/json' }, body: JSON.stringify(cmds)
  });
  if (!r.ok) throw new Error('redis ' + r.status);
  return (await r.json()).map((x) => x.result);
}
module.exports = { ready, pipeline };
