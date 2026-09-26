import { Icon } from "@/components/icons";

/** Etoiles decoratives. N'affiche jamais de note ou de nombre d'avis invente. */
export function RatingStars({ value = 5 }: { value?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon.star
          key={i}
          className={i < value ? "h-4 w-4 fill-terracotta text-terracotta" : "h-4 w-4 text-ink/20"}
        />
      ))}
    </div>
  );
}
