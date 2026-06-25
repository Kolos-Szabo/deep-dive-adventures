import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import experience from "@/assets/experience.jpg";
import course from "@/assets/course.jpg";
import group from "@/assets/group.jpg";
import practice from "@/assets/practice.jpg";
import gear from "@/assets/gear.jpg";
import g1 from "@/assets/gallery1.jpg";
import g2 from "@/assets/gallery2.jpg";
import g3 from "@/assets/gallery3.jpg";
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
  { src: hero, alt: "Búvár ereszkedik le", span: "md:col-span-2 md:row-span-2" },
  { src: g1, alt: "Búvár sziluett" },
  { src: experience, alt: "Korallzátony", span: "md:col-span-2" },
  { src: g2, alt: "Búvármaszk közelről" },
  { src: course, alt: "NAUI képzés" },
  { src: group, alt: "Csoportos merülés", span: "md:col-span-2" },
  { src: practice, alt: "Gyakorló merülés" },
  { src: g3, alt: "Buborékok" },
  { src: gear, alt: "Búvárfelszerelés", span: "md:col-span-2" },
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
