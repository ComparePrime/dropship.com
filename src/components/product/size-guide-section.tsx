import Image from "next/image";
import { SizeGuide } from "@/lib/types";
import { SizeGuideTable } from "@/components/product/size-guide-table";
import { getT } from "@/i18n/server";

/** Guide des tailles en pleine page (texte lisible par les moteurs de recherche et les lecteurs d'ecran). */
export function SizeGuideSection({ guide }: { guide: SizeGuide }) {
  const t = getT();
  return (
    <section className="container-content scroll-mt-24 py-16 md:py-24" id="guide-des-tailles">
      <h2 className="section-title text-center">{guide.title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-ink/70">{guide.intro}</p>

      {guide.image && (
        <figure className="mx-auto mt-10 max-w-md">
          <Image
            src={guide.image.src}
            alt={guide.image.alt}
            width={1254}
            height={1254}
            sizes="(min-width: 768px) 448px, 90vw"
            className="rounded-xl2"
          />
          <figcaption className="mt-2 text-center text-xs text-ink/60">
            {t("Les trois mesures à prendre : longueur du dos, tour de cou, tour de poitrail.")}</figcaption>
        </figure>
      )}

      <div className="mx-auto mt-10 max-w-5xl md:overflow-hidden md:rounded-xl2 md:border md:border-ink/10 md:bg-white/50">
        <SizeGuideTable guide={guide} />
      </div>

      <ul className="mx-auto mt-6 max-w-5xl list-disc space-y-1.5 pl-5 text-sm text-ink/70">
        {guide.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  );
}
