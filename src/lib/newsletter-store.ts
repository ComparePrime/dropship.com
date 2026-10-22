import { getStore } from "@netlify/blobs";

/**
 * Stockage cle/valeur des inscriptions a la newsletter, des codes de bienvenue et des compteurs
 * anti-abus. Netlify Blobs en production (aucun service externe a configurer : les donnees
 * restent dans votre compte Netlify, jamais exposees publiquement). En local (hors Netlify),
 * repli sur une Map en memoire pour pouvoir tester.
 */
const onNetlify = !!(process.env.NETLIFY_BLOBS_CONTEXT || process.env.NETLIFY);
const memory = new Map<string, string>();

const store = () => getStore({ name: "newsletter", consistency: "strong" });

export const kv = {
  async get<T>(key: string): Promise<T | null> {
    if (!onNetlify) {
      const raw = memory.get(key);
      return raw ? (JSON.parse(raw) as T) : null;
    }
    return ((await store().get(key, { type: "json" })) as T | null) ?? null;
  },

  async set(key: string, value: unknown): Promise<void> {
    if (!onNetlify) {
      memory.set(key, JSON.stringify(value));
      return;
    }
    await store().setJSON(key, value as Record<string, unknown>);
  },

  /** Cree la cle seulement si elle n'existe pas (renvoie false sinon) : base de l'anti-doublon. */
  async setIfNew(key: string, value: unknown): Promise<boolean> {
    if (!onNetlify) {
      if (memory.has(key)) return false;
      memory.set(key, JSON.stringify(value));
      return true;
    }
    const result = await store().setJSON(key, value as Record<string, unknown>, { onlyIfNew: true });
    return result.modified;
  },

  async delete(key: string): Promise<void> {
    if (!onNetlify) {
      memory.delete(key);
      return;
    }
    await store().delete(key);
  },

  async list(prefix: string): Promise<string[]> {
    if (!onNetlify) return [...memory.keys()].filter((k) => k.startsWith(prefix));
    const keys: string[] = [];
    const { blobs } = await store().list({ prefix });
    for (const blob of blobs) keys.push(blob.key);
    return keys;
  },
};
