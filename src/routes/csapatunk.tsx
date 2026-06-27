import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Waves, Wrench, Mountain, GraduationCap, Leaf, Users, Heart, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { YouTubeFacade } from "@/components/site/YouTubeFacade";
import portraitAsset from "@/assets/buvar-portre-viz-alatt-kozelrol.jpg.asset.json";
import briefingAsset from "@/assets/naui-oktato-briefing-medenceben.jpg.asset.json";

const portrait = portraitAsset.url;
const briefing = briefingAsset.url;

const YT_ID = "-UY_NnQgjYU";

export const Route = createFileRoute("/csapatunk")({
  head: () => ({
    meta: [
      { title: "Szabó Kolos — Alapító & NAUI búvároktató | Búvárkodás Erdély" },
      { name: "description", content: "Ismerd meg Szabó Kolost, a Transilvanian Dive Center alapítóját — NAUI búvároktató, ipari búvár, barlangi és technikai merülő szakember Erdélyben." },
      { name: "keywords", content: "Szabó Kolos, búvároktató Románia, NAUI oktató, scuba diving Transylvania, Transilvanian Dive Center, ipari búvár Románia, barlangi merülés" },
      { property: "og:title", content: "Szabó Kolos — Alapító & NAUI búvároktató" },
      { property: "og:description", content: "Találkozz Szabó Kolossal — alapító, búvároktató és ipari búvár. Transilvanian Dive Center, Erdély." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/csapatunk" },
      { property: "og:image", content: portrait },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: portrait },
    ],
    links: [{ rel: "canonical", href: "/csapatunk" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Szabó Kolos",
          jobTitle: "Búvároktató, alapító, ipari búvár",
          description:
            "A Transilvanian Dive Center alapítója, NAUI búvároktató, ipari búvár, barlangi és technikai merülő.",
          image: portrait,
          worksFor: {
            "@type": "Organization",
            name: "Transilvanian Dive Center",
          },
          knowsAbout: [
            "Scuba Diving",
            "NAUI Instruction",
            "Commercial Diving",
            "Cave Diving",
            "Technical Diving",
            "Underwater Education",
          ],
          url: "/csapatunk",
        }),
      },
    ],
  }),
  component: TeamPage,
});

const cards = [
  { icon: Waves, t: "Szakmai búvárkodási tapasztalat", d: "Több mint egy évtizednyi merülési tapasztalat hazai és nemzetközi vizeken — tavak, folyók, tenger és barlangok." },
  { icon: Award, t: "Búvároktatói minősítések", d: "NAUI minősítésű búvároktató, folyamatos szakmai továbbképzéssel és nemzetközi standardokkal." },
  { icon: Wrench, t: "Ipari búvár projektek", d: "Tapasztalat víz alatti szerkezeti munkákban, vizsgálatokban és kereskedelmi búvár feladatokban." },
  { icon: Mountain, t: "Barlangi & technikai merülés", d: "Cave diving és tech diving szakértelem — speciális felszerelés, gázkeverékek és protokollok." },
  { icon: GraduationCap, t: "A Transilvanian Dive Center küldetése", d: "Biztonságos, magas színvonalú búvárképzés Erdélyben — közösség, tudás és élmény egy helyen." },
  { icon: Heart, t: "Szenvedély a víz alatti oktatás iránt", d: "Türelmes, személyre szabott oktatás — minden tanítvány saját ritmusában fejlődik." },
  { icon: Leaf, t: "Környezetvédelmi projektek", d: "Aktív részvétel víz alatti tisztítási akciókban és tóökoszisztémák védelmében." },
  { icon: Users, t: "Gyermekek és nonprofit munka", d: "Programok gyerekeknek és nonprofit kezdeményezések — a búvárkodás öröme mindenkié." },
];

function TeamPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden text-white">
        <img
          src={portrait}
          alt="Szabó Kolos NAUI búvároktató víz alatti portréja"
          title="Szabó Kolos — alapító, búvároktató"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031024]/95 via-[#031024]/70 to-[#031024]/30" />
        <div className="relative mx-auto max-w-7xl w-full px-5 lg:px-8 pb-20 lg:pb-32 pt-32">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Ismerd meg az alapítót</span>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight max-w-4xl text-balance">
              Találkozz <span className="text-secondary">Szabó Kolossal</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed">
              A Transilvanian Dive Center alapítója — NAUI búvároktató és ipari búvár, aki Erdély vizeit és a víz alatti oktatás szenvedélyét egyetlen küldetésbe foglalja.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/kapcsolat" className="inline-flex items-center gap-2 rounded-full bg-gradient-ocean px-7 py-4 text-base font-semibold text-white shadow-glow hover:-translate-y-0.5 transition-transform">
                Vedd fel a kapcsolatot <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/szolgaltatasok" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-7 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors">
                Merülési programok
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1100px] px-5 lg:px-8">
          <Reveal className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Videó bemutatkozás</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              Egy pillantás Szabó Kolos világába
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <YouTubeFacade id={YT_ID} title="Szabó Kolos — Transilvanian Dive Center bemutatkozó videó" />
          </Reveal>
        </div>
      </section>

      {/* PROFILE / BIO */}
      <section className="bg-muted py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-2">
            <img
              src={briefing}
              alt="Szabó Kolos NAUI oktatóként eligazítást tart a medence szélén"
              title="Szabó Kolos — NAUI oktató eligazítás közben"
              loading="lazy"
              className="rounded-2xl shadow-deep w-full"
            />
          </Reveal>
          <Reveal delay={150} className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Az alapító</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Szabó Kolos
            </h2>
            <p className="mt-2 text-secondary font-semibold">Alapító · NAUI búvároktató · ipari búvár</p>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Szabó Kolos a Transilvanian Dive Center alapítója és vezető búvároktatója. Pályája évek óta a víz alatti világnak szól: szabadidős búvárkodás, oktatás, ipari merülések és technikai diving — mindegyik területen mély gyakorlati tapasztalattal.
              </p>
              <p>
                NAUI minősítésű oktatóként hisz abban, hogy a biztonság és a tudás kéz a kézben jár. Tanítványait türelmesen, lépésről lépésre vezeti be a búvárkodás világába — legyen szó az első levegővételről a medencében vagy egy mélyebb merülésről egy erdélyi tóban.
              </p>
              <p>
                A merülésen túl elkötelezett a természetvédelem és a közösségépítés iránt: rendszeresen szervez víz alatti tisztítási akciókat, és szívesen dolgozik gyerekekkel, nonprofit kezdeményezésekkel — hogy a búvárkodás öröme valóban mindenkihez eljusson.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CARDS */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Szakterületek</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance">
              Tapasztalat, amire építhetsz.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 70}>
                <article className="h-full rounded-2xl bg-card p-7 shadow-sm hover:shadow-glow transition-shadow border border-border/60">
                  <c.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{c.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-surface text-surface-foreground py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-deep" />
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              Szeretnél Szabó Kolossal <span className="text-secondary">merülni</span>?
            </h2>
            <p className="mt-5 text-lg text-surface-foreground/80 max-w-2xl mx-auto">
              Foglalj egy élménymerülést, vagy vedd fel velünk a kapcsolatot — segítünk megtalálni a számodra ideális programot.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link to="/szolgaltatasok" className="inline-flex items-center gap-2 rounded-full bg-gradient-ocean px-7 py-4 text-base font-semibold text-white shadow-glow hover:-translate-y-0.5 transition-transform">
                Élménymerülés foglalása <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/kapcsolat" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-7 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors">
                Kapcsolatfelvétel
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function YouTubeFacade({ id, title }: { id: string; title: string }) {
  const [active, setActive] = useState(false);
  return (
    <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-2xl shadow-deep bg-black">
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Videó lejátszása: ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          <img
            src={YT_THUMB}
            alt={title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-white/95 shadow-glow transition-transform duration-300 group-hover:scale-110">
            <Play className="h-9 w-9 sm:h-11 sm:w-11 text-primary fill-primary translate-x-0.5" />
          </span>
        </button>
      )}
    </div>
  );
}
