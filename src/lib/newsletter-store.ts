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

/** Aucune operation de stockage ne doit bloquer la requete : au-dela du delai, on echoue vite (et on le journalise). */
const KV_TIMEOUT_MS = 5000;
function withTimeout<T>(operation: string, promise: Promise<T>, key = ""): Promise<T> {
  let timer: ReturnType<typeof setTimeout>;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error(`kv-timeout:${operation}:${key.split("-")[0]}`)), KV_TIMEOUT_MS);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

export const kv = {
  async get<T>(key: string): Promise<T | null> {
    if (!onNetlify) {
      const raw = memory.get(key);
      return raw ? (JSON.parse(raw) as T) : null;
    }
    return ((await withTimeout("get", store().get(key, { type: "json" }), key)) as T | null) ?? null;
  },

  async set(key: string, value: unknown): Promise<void> {
    if (!onNetlify) {
      memory.set(key, JSON.stringify(value));
      return;
    }
    await withTimeout("set", store().setJSON(key, value as Record<string, unknown>), key);
  },

  /** Cree la cle seulement si elle n'existe pas (renvoie false sinon) : base de l'anti-doublon. */
  async setIfNew(key: string, value: unknown): Promise<boolean> {
    if (!onNetlify) {
      if (memory.has(key)) return false;
      memory.set(key, JSON.stringify(value));
      return true;
    }
    // Lecture, ecriture, puis relecture : si une inscription simultanee a ecrit une autre valeur, on perd.
    // (Evite les ecritures conditionnelles, plus lentes et moins fiables sur ce stockage.)
    if ((await withTimeout("get", store().get(key, { type: "json" }), key)) !== null) return false;
    const serialized = JSON.stringify(value);
    await withTimeout("set", store().setJSON(key, value as Record<string, unknown>), key);
    const check = await withTimeout("get", store().get(key, { type: "json" }), key);
    return JSON.stringify(check) === serialized;
  },

  async delete(key: string): Promise<void> {
    if (!onNetlify) {
      memory.delete(key);
      return;
    }
    await withTimeout("delete", store().delete(key));
  },

  async list(prefix: string): Promise<string[]> {
    if (!onNetlify) return [...memory.keys()].filter((k) => k.startsWith(prefix));
    const keys: string[] = [];
    const { blobs } = await withTimeout("list", store().list({ prefix }));
    for (const blob of blobs) keys.push(blob.key);
    return keys;
  },
};

/**
 * Diagnostic temporaire (journal uniquement, aucune donnee) : appele quand le stockage depasse son delai,
 * pour savoir si Netlify Blobs est lent partout ou seulement pour ce stockage.
 */
export async function diagnoseStorage(): Promise<string> {
  if (!onNetlify) return "local";
  const probe = async (name: string, key: string) => {
    const t = Date.now();
    try {
      await Promise.race([
        getStore({ name, consistency: "strong" }).get(key, { type: "json" }),
        new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 2500)),
      ]);
      return `${name}:${key} ok ${Date.now() - t}ms`;
    } catch (error) {
      return `${name}:${key} ${error instanceof Error ? error.message : "erreur"} ${Date.now() - t}ms`;
    }
  };
  const results = await Promise.all([
    probe("presence", "diag"),
    probe("newsletter", "diag"),
    probe("newsletter", "rl-diag-abc"),
  ]);
  return `ctx=${!!process.env.NETLIFY_BLOBS_CONTEXT} ${results.join(" | ")}`;
}
