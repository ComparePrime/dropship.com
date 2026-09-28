import { StorytellingContent } from "@/lib/types";

/** Transition émotionnelle après le hero : avant de reparler produit, on installe une idée. */
export function StorytellingSection({ content }: { content: StorytellingContent }) {
  return (
    <section className="container-content max-w-2xl py-16 text-center md:py-20">
      <span className="text-xs font-medium uppercase tracking-widest text-sage">
        {content.eyebrow}
      </span>
      <h2 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
        {content.title}
      </h2>
      <div className="mx-auto mt-5 flex max-w-xl flex-col gap-3 text-ink/75">
        {content.paragraphs.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </section>
  );
}
