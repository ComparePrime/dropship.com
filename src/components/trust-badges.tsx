import { siteConfig } from "@/lib/site-config";
import { Icon, IconName } from "@/components/icons";
import clsx from "clsx";

export function TrustBadges({ compact = false }: { compact?: boolean }) {
  return (
    <ul
      className={clsx(
        "grid gap-x-6 gap-y-3 text-sm text-ink/80",
        compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-5"
      )}
    >
      {siteConfig.shippingTrust.map((item) => {
        const IconComp = Icon[item.icon as IconName];
        return (
          <li key={item.label} className="flex items-center gap-2">
            <IconComp className="h-4 w-4 flex-shrink-0 text-accent" strokeWidth={1.5} />
            <span>{item.label}</span>
          </li>
        );
      })}
    </ul>
  );
}
