import { getStore } from "@netlify/blobs";

/**
 * Comptage reel des visiteurs actifs par fiche produit.
 *
 * Chaque fiche ouverte envoie un signal de presence toutes les ~20 s avec un
 * identifiant anonyme de session (aucune donnee personnelle). On compte les
 * identifiants vus dans les PRESENCE_WINDOW_MS dernieres millisecondes.
 *
 * Stockage : Netlify Blobs en production (aucun service externe a configurer).
 * En local (hors Netlify), repli sur une Map en memoire pour pouvoir tester.
 * Limite connue : la mise a jour est du type lecture-modification-ecriture ;
 * deux signaux strictement simultanes peuvent s'ecraser. L'erreur reste de
 * quelques unites au plus, acceptable pour un compteur indicatif de presence.
 */
export const PRESENCE_WINDOW_MS = 45_000;

type PresenceMap = Record<string, number>;

const memory = new Map<string, PresenceMap>();

const onNetlify = !!(process.env.NETLIFY_BLOBS_CONTEXT || process.env.NETLIFY);

async function read(slug: string): Promise<PresenceMap> {
  if (!onNetlify) return memory.get(slug) ?? {};
  const store = getStore({ name: "presence", consistency: "strong" });
  return ((await store.get(slug, { type: "json" })) as PresenceMap | null) ?? {};
}

async function write(slug: string, data: PresenceMap): Promise<void> {
  if (!onNetlify) {
    memory.set(slug, data);
    return;
  }
  const store = getStore({ name: "presence", consistency: "strong" });
  await store.setJSON(slug, data);
}

/** Enregistre la presence du visiteur et renvoie le nombre de visiteurs actifs sur ce produit. */
export async function touchPresence(slug: string, visitorId: string): Promise<number> {
  const now = Date.now();
  const current = await read(slug);
  const active: PresenceMap = {};
  for (const [id, ts] of Object.entries(current)) {
    if (now - ts <= PRESENCE_WINDOW_MS) active[id] = ts;
  }
  active[visitorId] = now;
  await write(slug, active);
  return Object.keys(active).length;
}
