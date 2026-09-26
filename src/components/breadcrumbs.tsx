import Link from "next/link";
import { Icon } from "@/components/icons";

export interface Crumb {
  label: string;
  href?: string;
}

const ChevronRight = Icon["chevron-right"];

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="container-content flex items-center gap-1.5 pt-6 text-xs text-stone">
      {items.map((item, idx) => (
        <span key={item.label} className="flex items-center gap-1.5">
          {idx > 0 && <ChevronRight className="h-3 w-3" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ) : (
            <span className="text-ink">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
