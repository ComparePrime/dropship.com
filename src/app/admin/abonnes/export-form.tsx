"use client";

import { FormEvent, useState } from "react";

/** Le mot de passe (ADMIN_EXPORT_TOKEN) n'est jamais stocke : il n'est envoye que pour cette demande. */
export function ExportForm() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/subscribers", { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Export impossible.");
      }
      const blob = await res.blob();
      const count = res.headers.get("X-Subscriber-Count") ?? "0";
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `abonnes-maison-loravie-${new Date().toISOString().slice(0, 10)}.csv`;
      link.click();
      URL.revokeObjectURL(link.href);
      setMessage(`${count} abonné(s) exporté(s).`);
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "Export impossible.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={submit} className="mt-8 flex w-full max-w-sm flex-col gap-3">
      <label htmlFor="export-token" className="sr-only">
        Mot de passe d&apos;export
      </label>
      <input
        id="export-token"
        type="password"
        autoComplete="off"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Mot de passe d'export"
        className="rounded-full border border-ink/15 bg-white/70 px-5 py-3 text-base text-ink focus:border-sage focus:outline-none"
      />
      <button type="submit" disabled={loading || token.length < 8} className="btn-primary disabled:cursor-not-allowed">
        {loading ? "Export…" : "Télécharger le CSV"}
      </button>
      {message && (
        <p role="status" className="text-sm text-stone">
          {message}
        </p>
      )}
    </form>
  );
}
