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
import pSurface from "@/assets/buvar-felszinre-erkezes-maszkban-tonal.jpg.asset.json";
import pWineCrate from "@/assets/viz-alatti-borpince-buvar-ladaval.jpg.asset.json";
import pCommunity from "@/assets/merulohely-steg-kozosseg-nyari-nap.jpg.asset.json";
import pInstructor from "@/assets/buvaroktato-viz-alatti-kutatokozpont-portre.jpg.asset.json";
import pWineDeep from "@/assets/viz-alatti-borladak-buvar-melyben.jpg.asset.json";
import pEntry from "@/assets/ket-buvar-belepes-a-vizbe-felulnezet.jpg.asset.json";
import pTrio from "@/assets/harom-buvar-stegen-merules-utan.jpg.asset.json";
import pPairDock from "@/assets/buvarpar-teljes-felszerelesben-stegen-napsutes.jpg.asset.json";
import pBeer from "@/assets/buvar-viz-alatti-soros-koccintas-elmeny.jpg.asset.json";
import pBuddy from "@/assets/buddy-paros-buvarok-felszinen-szelfi.jpg.asset.json";
import { Reveal } from "@/components/site/Reveal";
import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
  { src: pPairDock.url, alt: "Két búvár teljes felszerelésben a stégen, napsütésben, erdélyi hegyek háttérrel", title: "Indulás előtt — napsütéses merülőnap", span: "md:col-span-2" },
  { src: pSurface.url, alt: "Búvár sárga maszkban a felszínre érkezik, mögötte a búvárpárja a tó vizében", title: "Felszínre érkezés — a pár együtt jön fel" },
  { src: pEntry.url, alt: "Két búvár felszereléssel a sekély vízbe lép, felülnézetből fotózva", title: "Belépés a vízbe — felkészült páros" },
  { src: pWineCrate.url, alt: "Búvár víz alatti borpince rekeszét nyitja meg palackokkal a tófenéken", title: "Víz alatti borpince — palackok a mélyben", span: "md:col-span-2" },
  { src: pWineDeep.url, alt: "Víz alatti borládák a tófenéken, búvár a háttérben rekeszt emel", title: "Berăria Subacvatică — a víz alatti raktár" },
  { src: pBeer.url, alt: "Búvár sörösüveggel koccint a víz alatt, buborékokkal a maszk felett", title: "Koccintás a víz alatt" },
  { src: pBuddy.url, alt: "Búvárpáros a felszínen szelfit készít merülés előtt, kék éggel a háttérben", title: "Buddy páros a felszínen" },
  { src: pTrio.url, alt: "Három búvár teljes felszerelésben a stégen merülés után, erdélyi táj háttérrel", title: "Merülés után — jókedvű csapat", span: "md:col-span-2" },
  { src: pCommunity.url, alt: "Merülőhely stégjei nyári napon, fürdőző és merülésre készülő közösséggel", title: "Nyári nap a merülőhelyen" },
  { src: pInstructor.url, alt: "Búvároktató a víz alatti kutatóközpont mezében a merülés utáni eligazításnál", title: "A csapat mögötti szakértelem" },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((c) => (c === null ? c : (c + d + images.length) % images.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  const active = open === null ? null : images[open];

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
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={`Nagyítás: ${img.title ?? img.alt}`}
                  className="block h-full w-full cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary rounded-2xl"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    title={img.title ?? img.alt}
                    loading={i < 4 ? "eager" : "lazy"}
                    decoding="async"
                    width={1800}
                    height={1200}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title ?? active.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-surface/95 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Galéria bezárása"
            className="absolute right-4 top-4 rounded-full bg-background/15 p-3 text-surface-foreground hover:bg-background/25 focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Előző kép"
            className="absolute left-2 sm:left-6 rounded-full bg-background/15 p-3 text-surface-foreground hover:bg-background/25 focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Következő kép"
            className="absolute right-2 sm:right-6 rounded-full bg-background/15 p-3 text-surface-foreground hover:bg-background/25 focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.src}
              alt={active.alt}
              className="mx-auto max-h-[80vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-surface-foreground/85">
              {active.title ?? active.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
