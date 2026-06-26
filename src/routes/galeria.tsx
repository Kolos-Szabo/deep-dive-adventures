import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/csoportos-merules-erdelyi-tonal.jpg";
import experience from "@/assets/naui-buvaroktato-tanitvany-gyakorlat.jpg";
import course from "@/assets/naui-buvartanfolyam-medencei-oktatas.jpg";
import group from "@/assets/buvarcsoport-erdelyi-to-parton.jpg";
import practice from "@/assets/buvarpalack-bcd-medencei-gyakorlas.jpg";
import gear from "@/assets/buvarfelszereles-medence-szelen.jpg";
import g1 from "@/assets/buvarcsapat-csoportkep-erdely.jpg";
import g2 from "@/assets/buvarfelszereles-ellenorzes-stegen.jpg";
import g3 from "@/assets/buvar-ok-jelzes-felszinen.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galéria — Búvárkodás Erdély" },
      { name: "description", content: "Pillanatok a víz alatti világból: NAUI tanfolyamok, élménymerülések és kalandprogramok galériája." },
      { property: "og:title", content: "Galéria — Búvárkodás Erdély" },
      { property: "og:description", content: "Inspiráló képek a mélyből." },
      { property: "og:url", content: "/galeria" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: Gallery,
});

const images = [
  { src: hero, alt: "Csoportos búvármerülés egy erdélyi tó tükörsima vizén", span: "md:col-span-2 md:row-span-2" },
  { src: g1, alt: "Búvárkodás Erdély csapata neoprén ruhában, hegyek előtt" },
  { src: experience, alt: "NAUI búvároktató személyre szabott gyakorlatot vezet a tanítványnak", span: "md:col-span-2" },
  { src: g3, alt: "Búvár OK jelzéssel a víz felszínén, sikeres merülés után" },
  { src: course, alt: "NAUI búvártanfolyam — csoportos medencei oktatás" },
  { src: group, alt: "Búvárcsoport teljes felszerelésben egy erdélyi tó partján", span: "md:col-span-2" },
  { src: practice, alt: "Búvárpalack és BCD a medence szélén gyakorló merülés előtt" },
  { src: g2, alt: "Búvárfelszerelés-ellenőrzés a stégen, briefing közben" },
  { src: gear, alt: "Búvárfelszerelés sorba rendezve a medence szélén", span: "md:col-span-2" },
];

function Gallery() {
  return (
    <>
      <section className="relative bg-surface text-surface-foreground pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-deep" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Galéria</span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-balance max-w-4xl">
              Pillanatok a <span className="text-secondary">mélyből</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-surface-foreground/80 leading-relaxed">
              Néhány kép, ami jobban beszél, mint bármi más. A víz alatti világ szépsége, ahogy mi látjuk.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] sm:auto-rows-[240px]">
            {images.map((img, i) => (
              <Reveal key={i} delay={i * 60} className={`overflow-hidden rounded-2xl group ${img.span ?? ""}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
