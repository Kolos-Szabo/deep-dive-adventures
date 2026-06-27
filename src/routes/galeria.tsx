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
import nTeam from "@/assets/buvarcsapat-stegen-teli-merules.jpg.asset.json";
import nStruct from "@/assets/buvar-viz-alatti-szerkezet-mellett.jpg.asset.json";
import nCsiki from "@/assets/viz-alatti-csiki-sor-elmenymerules.jpg.asset.json";
import nBeraria from "@/assets/viz-alatti-beraria-subacvatica-merules.jpg.asset.json";
import nPortrait from "@/assets/buvar-portre-viz-alatt-kozelrol.jpg.asset.json";
import nSign from "@/assets/buvar-viz-alatti-tabla-sas-jelzes.jpg.asset.json";
import nNight from "@/assets/ejszakai-merules-buvar-medenceben.jpg.asset.json";
import nBriefing from "@/assets/naui-oktato-briefing-medenceben.jpg.asset.json";
import nPointing from "@/assets/naui-oktato-tanitvanyok-medencei-eligazitas.jpg.asset.json";
import nNewMask from "@/assets/naui-medencei-kepzes-maszk-gyakorlat.jpg.asset.json";
import nNewUW from "@/assets/buvartanfolyam-medence-viz-alatti-kepzes.jpg.asset.json";
import nNewConfined from "@/assets/naui-buvarfelszereles-medence-konfined.jpg.asset.json";
import nNewSidemount from "@/assets/technikai-buvar-sidemount-melyben-napsugarak.jpg.asset.json";
import nNewTechPortrait from "@/assets/technikai-buvar-portre-szabalyozo-maszk.jpg.asset.json";
import nNewAdvanced from "@/assets/advanced-merulok-ereszkedes-paros-melyviz.jpg.asset.json";
import nNewDock from "@/assets/naui-buvarok-stegen-erdelyi-tonal.jpg.asset.json";
import nNewTechTeam from "@/assets/technikai-merules-tankok-csapat-melyben.jpg.asset.json";
import nNewGear from "@/assets/buvar-szabalyozok-felszereles-asztalon.jpg.asset.json";
import nNewSea from "@/assets/buvarcsoport-dahab-tengeri-merules.jpg.asset.json";
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
  { src: nTeam.url, alt: "Búvárcsapat felszerelésben a stégen, téli merülés előtt", title: "Téli merülés — csapat a stégen" },
  { src: experience, alt: "NAUI búvároktató személyre szabott gyakorlatot vezet a tanítványnak", span: "md:col-span-2" },
  { src: nBriefing.url, alt: "NAUI oktató eligazítást tart a tanítványoknak a medencében", title: "Eligazítás a medencében" },
  { src: g3, alt: "Búvár OK jelzéssel a víz felszínén, sikeres merülés után" },
  { src: course, alt: "NAUI búvártanfolyam — csoportos medencei oktatás" },
  { src: nPointing.url, alt: "NAUI oktató irányt mutat a tanítványoknak a vízbe ereszkedés előtt", span: "md:col-span-2", title: "Indulás előtti utolsó instrukciók" },
  { src: nPortrait.url, alt: "Búvár portré víz alatt, közelről — maszk és légzőautomata", title: "Búvár portré a mélyben" },
  { src: nStruct.url, alt: "Búvár víz alatti acélszerkezet mellett ereszkedés közben", title: "Felfedezés a mélyben" },
  { src: group, alt: "Búvárcsoport teljes felszerelésben egy erdélyi tó partján", span: "md:col-span-2" },
  { src: nCsiki.url, alt: "Víz alatti élménymerülés — Csíki Sör koccintás a mélyben", title: "Víz alatti pillanat — Csíki Sör" },
  { src: nBeraria.url, alt: "Berăria Subacvatică — víz alatti sörözés élménymerülés közben", title: "Berăria Subacvatică élmény" },
  { src: practice, alt: "Búvárpalack és BCD a medence szélén gyakorló merülés előtt" },
  { src: nSign.url, alt: "Búvár a víz alatti tájékozódási táblát vizsgálja sas ábrázolással", title: "Víz alatti tájékozódási gyakorlat" },
  { src: g2, alt: "Búvárfelszerelés-ellenőrzés a stégen, briefing közben" },
  { src: nNight.url, alt: "Éjszakai merülés — búvár felszerelést igazít a medence sötét vizében", span: "md:col-span-2", title: "Éjszakai merülés gyakorlat" },
  { src: gear, alt: "Búvárfelszerelés sorba rendezve a medence szélén", span: "md:col-span-2" },
  { src: nNewDock.url, alt: "NAUI búvárok teljes felszerelésben a stégen, erdélyi tó és hegyek háttérrel", title: "Készen állunk a merülésre — erdélyi tó", span: "md:col-span-2" },
  { src: nNewMask.url, alt: "NAUI oktató kezdő tanítvánnyal medencei maszkgyakorlat közben", title: "Maszk-skill a medencében" },
  { src: nNewUW.url, alt: "Búvártanfolyam víz alatti pillanata — oktató és tanítvány a medencében", title: "Víz alatti képzés a medencében" },
  { src: nNewConfined.url, alt: "Zárt vízi NAUI képzés — BCD-k és palackok sorban a medence szélén", title: "Zárt vízi felkészülés", span: "md:col-span-2" },
  { src: nNewAdvanced.url, alt: "Két Advanced Open Water búvár együtt ereszkedik a mélybe", title: "Advanced Open Water — közös ereszkedés" },
  { src: nNewSidemount.url, alt: "Technikai búvár sidemount felszerelésben napsugarak között a nyílt tengerben", title: "Technikai merülés — sidemount" },
  { src: nNewTechPortrait.url, alt: "Tapasztalt technikai búvár közeli portréja maszkban és szabályozóval", title: "Technikai búvár portré" },
  { src: nNewTechTeam.url, alt: "Twinset palackos technikai búvárok csoportja a nyílt tengerben homokfenék felett", title: "Technikai csapatmerülés", span: "md:col-span-2" },
  { src: nNewGear.url, alt: "NAUI búvárszabályozók és felszerelés a Transilvanian Dive Center asztalán", title: "Minőségi szabályozók" },
  { src: nNewSea.url, alt: "NAUI búvárcsoport tengeri merülés előtt — Dahab, profi képzés", title: "Tengeri profi merülés — Dahab", span: "md:col-span-2" },
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
              <Reveal key={i} delay={i * 40} className={`overflow-hidden rounded-2xl group ${img.span ?? ""}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  title={img.title ?? img.alt}
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
