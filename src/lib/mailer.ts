import nodemailer, { Transporter } from "nodemailer";
import { siteConfig } from "./site-config";

/**
 * Envoi d'e-mails depuis la boite Infomaniak de la boutique (info@maisonloravie.com) par SMTP.
 *
 * Variables d'environnement (a creer dans Netlify, jamais dans le code ni dans le chat) :
 *   SMTP_USER   adresse complete de la boite (ex. info@maisonloravie.com)
 *   SMTP_PASS   mot de passe de la boite (ou mot de passe d'application Infomaniak)
 *   SMTP_HOST   optionnel, defaut : mail.infomaniak.com
 *   SMTP_PORT   optionnel, defaut : 587 (STARTTLS) ; 465 pour SSL direct
 *
 * Sans SMTP_USER et SMTP_PASS, aucun e-mail n'est envoye (rien n'est simule : la fonction renvoie false).
 * Cet envoi sert aux e-mails transactionnels (confirmation de bienvenue). Pour des campagnes a toute la
 * liste, utilisez l'outil Newsletter d'Infomaniak (limites d'envoi d'une boite, desinscription geree).
 */
let transporter: Transporter | null = null;

export function isMailConfigured(): boolean {
  return !!(process.env.SMTP_USER && process.env.SMTP_PASS);
}

function getTransporter(): Transporter {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT ?? 587);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "mail.infomaniak.com",
      port,
      secure: port === 465,
      requireTLS: port !== 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 12000,
    });
  }
  return transporter;
}

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** E-mail de bienvenue : rappelle le code personnel (a usage unique) et contient le lien de desinscription. */
export async function sendWelcomeEmail(input: {
  to: string;
  code: string;
  percent: number;
  unsubscribeUrl: string;
}): Promise<boolean> {
  if (!isMailConfigured()) return false;

  const { to, code, percent, unsubscribeUrl } = input;
  const shopUrl = siteConfig.domain;
  const subject = `Votre code de bienvenue Maison Loravie : −${percent} %`;

  const text = [
    "Bienvenue chez Maison Loravie,",
    "",
    "Merci de votre inscription à notre newsletter. Voici votre code de bienvenue :",
    "",
    code,
    "",
    `−${percent} % sur votre première commande, à usage unique. Saisissez-le dans le panier ou appliquez-le depuis la fenêtre de bienvenue du site. Il ne se cumule pas avec une autre remise : la plus avantageuse s'applique.`,
    "",
    `Découvrir la boutique : ${shopUrl}`,
    "",
    "Une question ? Répondez simplement à cet e-mail ou écrivez-nous à " + siteConfig.supportEmail + ".",
    "",
    `Vous recevez ce message car vous vous êtes inscrit(e) à la newsletter de ${siteConfig.legalName}.`,
    `Se désinscrire : ${unsubscribeUrl}`,
  ].join("\n");

  const html = `<!doctype html>
<html lang="fr"><body style="margin:0;background:#F8F5EF;font-family:Helvetica,Arial,sans-serif;color:#292722;">
  <div style="max-width:520px;margin:0 auto;padding:32px 20px;">
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#6F7663;">Maison Loravie</p>
    <h1 style="margin:0 0 16px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.25;font-weight:600;">Bienvenue, voici votre code</h1>
    <p style="margin:0 0 20px;font-size:16px;line-height:1.6;">Merci de votre inscription à notre newsletter. Profitez de <strong>−${percent} %</strong> sur votre première commande avec ce code personnel :</p>
    <p style="margin:0 0 20px;padding:16px;text-align:center;border:1px dashed #A56B52;border-radius:12px;background:#EEE7DC;font-family:'Courier New',monospace;font-size:22px;font-weight:bold;letter-spacing:3px;color:#7A4A37;">${escapeHtml(code)}</p>
    <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:#4a4740;">Valable une seule fois. Saisissez-le dans le panier, ou appliquez-le depuis la fenêtre de bienvenue du site. Il ne se cumule pas avec une autre remise : la plus avantageuse s'applique.</p>
    <p style="margin:0 0 32px;"><a href="${escapeHtml(shopUrl)}" style="display:inline-block;padding:14px 28px;border-radius:999px;background:#6F7663;color:#ffffff;text-decoration:none;font-size:15px;font-weight:bold;">Découvrir la boutique</a></p>
    <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:#4a4740;">Une question ? Répondez simplement à cet e-mail ou écrivez-nous à <a href="mailto:${escapeHtml(siteConfig.supportEmail)}" style="color:#7A4A37;">${escapeHtml(siteConfig.supportEmail)}</a>.</p>
    <hr style="border:none;border-top:1px solid #d9d2c5;margin:0 0 16px;">
    <p style="margin:0;font-size:12px;line-height:1.6;color:#7a766d;">Vous recevez ce message car vous vous êtes inscrit(e) à la newsletter de ${escapeHtml(siteConfig.legalName)}.<br><a href="${escapeHtml(unsubscribeUrl)}" style="color:#7a766d;">Se désinscrire</a></p>
  </div>
</body></html>`;

  await getTransporter().sendMail({
    from: { name: siteConfig.name, address: process.env.SMTP_USER as string },
    to,
    replyTo: siteConfig.supportEmail,
    subject,
    text,
    html,
    headers: { "List-Unsubscribe": `<${unsubscribeUrl}>` },
  });
  return true;
}
