"use client";

import Link from "@/i18n/link";
import { useEffect, useState } from "react";
import { useT } from "@/i18n/provider";

/** Desinscription en un clic (le lien seul ne desinscrit pas : evite les clics automatiques des messageries). */
export function UnsubscribeForm() {
  const t = useT();
  const [token, setToken] = useState<string | null>(null);
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setToken(new URLSearchParams(window.location.search).get("t"));
  }, []);

  const unsubscribe = async () => {
    if (!token) return;
    setState("loading");
    try {
      const res = await fetch("/api/newsletter/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? t("Désinscription impossible."));
      setState("done");
    } catch (e) {
      setMessage(e instanceof Error ? e.message : t("Désinscription impossible."));
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <>
        <p className="mt-4 max-w-md text-stone">
          {t("Vous êtes bien désinscrit(e) : vous ne recevrez plus nos communications marketing.")}</p>
        <Link href="/" className="btn-primary mt-8">
          {t("Retour à la boutique")}</Link>
      </>
    );
  }

  return (
    <>
      <p className="mt-4 max-w-md text-stone">
        {token
          ? t("Confirmez pour ne plus recevoir la newsletter de Maison Loravie.")
          : t("Ce lien de désinscription est incomplet. Utilisez le lien présent dans le dernier e-mail reçu, ou écrivez-nous à info@maisonloravie.com.")}
      </p>
      {token && (
        <button type="button" onClick={unsubscribe} disabled={state === "loading"} className="btn-primary mt-8 disabled:cursor-wait">
          {state === "loading" ? t("Désinscription…") : t("Me désinscrire")}
        </button>
      )}
      {state === "error" && (
        <p role="alert" className="mt-4 text-sm text-terracottaText">
          {message}
        </p>
      )}
    </>
  );
}
