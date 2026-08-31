import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Compass, Waves, Award, Check, Tag, Mail } from "lucide-react";
import courseAsset from "@/assets/naui-oktato-briefing-medenceben.jpg.asset.json";
import experienceAsset from "@/assets/viz-alatti-csiki-sor-elmenymerules.jpg.asset.json";
import practiceAsset from "@/assets/ejszakai-merules-buvar-medenceben.jpg.asset.json";
import groupAsset from "@/assets/buvarcsapat-stegen-teli-merules.jpg.asset.json";
import { Reveal } from "@/components/site/Reveal";

const course = courseAsset.url;
const experience = experienceAsset.url;
const practice = practiceAsset.url;
const group = groupAsset.url;

export const services = [
  {
    slug: "naui-tanfolyam",
    priceCta: "Tanfolyamok és árak",
    title: "NAUI Búvártanfolyamok",
    short: "Try Scuba-tól Instructor-ig: NAUI búvárképzés Erdélyben kis csoportban, élethosszig érvényes nemzetközi minősítéssel.",
    img: course,
    icon: GraduationCap,
    benefits: [
      "Nemzetközileg elismert NAUI minősítés",
      "Kis csoportok, személyre szabott figyelem",
      "Sok vízi gyakorlat — valódi tudás",
      "Élethosszig érvényes kártya",
      "Rekreációs, profi és technikai szintek",
      "Környezettudatos szemlélet",
    ],
    long: "A Try Scuba bevezetőtől az Open Water Diver-en, Advanced-en és Rescue-n át a Divemaster, Instructor és technikai szintekig — a NAUI rendszer szerinti teljes képzési pálya egy helyen. Minden szinten személyre szabott ütemmel, online vagy tantermi elmélettel, medencés (zárt vízi) gyakorlással és nyíltvízi merülésekkel.",
  },
  {
    slug: "elmenymerules",
    priceCta: "Élménymerülések árai",
    title: "Élménybúvárkodás",
    short: "Vezetett merülések a régió legszebb víz alatti helyszínein.",
    img: experience,
    icon: Compass,
    benefits: [
      "Tapasztalt vezető búvár",
      "Helyi merülőhelyek ismerete",
      "Felszerelés biztosítva",
      "Briefing és debriefing",
    ],
    long: "Akár első búvárélményre vágysz, akár tapasztalt merülőként új helyszíneket fedeznél fel — élménymerüléseink ezt nyújtják. Megmutatjuk a régió rejtett vízi gyöngyszemeit, miközben minden részletre figyelünk.",
  },
  {
    slug: "gyakorlo-merules",
    priceCta: "Árak megtekintése",
    title: "Gyakorló merülések",
    short: "Frissítsd készségeidet ellenőrzött, biztonságos körülmények között.",
    img: practice,
    icon: Waves,
    benefits: [
      "Skill refresh oktatóval",
      "Felszerelés ellenőrzés",
      "Magabiztosság építés",
      "Egyéni fókuszú gyakorlás",
    ],
    long: "Régen merültél utoljára? Vagy egy konkrét készségen szeretnél finomítani? Gyakorló merüléseinken biztonságos környezetben, oktató felügyelete mellett építheted vissza a rutint.",
  },
  {
    slug: "csoportos-program",
    title: "Csoportos kalandprogramok",
    short: "Csapatépítők, baráti társaságok, születésnapi élmények.",
    img: group,
    icon: Award,
    benefits: [
      "Teljes szervezés",
      "Csapatra szabott program",
      "Fotó és videó dokumentáció",
      "Élmény, ami összehoz",
    ],
    long: "A közös merülés egészen más szintre emeli a csapatélményt. Cégek, baráti társaságok és családok számára állítunk össze kalandprogramokat — minden szintre, minden hangulatra.",
  },
];

export const Route = createFileRoute("/szolgaltatasok/")({
  head: () => ({
    meta: [
      { title: "Szolgáltatások — Búvárkodás Erdély" },
      { name: "description", content: "NAUI búvártanfolyamok, élménymerülések, gyakorló merülések és csoportos kalandprogramok Erdélyben." },
      { property: "og:title", content: "Szolgáltatások — Búvárkodás Erdély" },
      { property: "og:description", content: "Tanfolyamok, élmény- és gyakorlómerülések, csoportos programok." },
      { property: "og:url", content: "/szolgaltatasok" },
    ],
    links: [{ rel: "canonical", href: "/szolgaltatasok" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="relative bg-surface text-surface-foreground pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-deep" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Szolgáltatások</span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-balance max-w-4xl">
              Tanulj. Merülj. <span className="text-secondary">Fedezd fel.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-surface-foreground/80 leading-relaxed">
              A teljes búvárélmény — egy helyen. Bármelyik szolgáltatást válaszd, ugyanaz a szakmaiság és biztonságszemlélet vár.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-20">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <div className={`grid gap-10 lg:grid-cols-2 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-ocean rounded-3xl blur-3xl opacity-20" />
                  <img src={s.img} alt={s.title} loading="lazy" className="relative rounded-2xl shadow-deep w-full aspect-[4/3] object-cover" />
                </div>
                <div>
                  <s.icon className="h-9 w-9 text-primary" />
                  <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance">{s.title}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{s.long}</p>
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/szolgaltatasok/$slug" params={{ slug: s.slug }} className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
                    Tovább a részletekhez <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
