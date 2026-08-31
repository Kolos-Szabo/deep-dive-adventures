import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Waves, GraduationCap, Award, Sparkles, Backpack, Phone } from "lucide-react";
import practice from "@/assets/buvarfelszereles-ellenorzes-stegen.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Bubbles } from "@/components/site/Bubbles";

export const Route = createFileRoute("/arak")({
  head: () => ({
    meta: [
      { title: "Árak | Mylake – Búvárkodás és búvártanfolyamok" },
      {
        name: "description",
        content:
          "Búvárkodás, Try Scuba programok, NAUI búvártanfolyamok, specializált képzések, merülések és búvárfelszerelés-bérlés árai a Mylake-nél.",
      },
      { property: "og:title", content: "Árak | Mylake – Búvárkodás és búvártanfolyamok" },
      {
        property: "og:description",
        content:
          "Try Scuba, merülések, NAUI tanfolyamok, specializált képzések és felszerelésbérlés árlistája euróban.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/arak" },
    ],
    links: [{ rel: "canonical", href: "/arak" }],
  }),
  component: Prices,
});

type Item = { name: string; note?: string; price: string };
type Group = { id: string; title: string; icon: typeof Waves; items: Item[]; dark?: boolean };

const groups: Group[] = [
  {
    id: "try-scuba",
    title: "Try Scuba és merülések",
    icon: Waves,
    items: [
      { name: "Try Scuba (bevezető búvárkodás), felszereléssel együtt", note: "1 merülés", price: "84 €" },
      { name: "Try Scuba a Paradisul Acvaticban, felszereléssel együtt", note: "1 merülés", price: "84 €" },
      { name: "A víz alatti söröző meglátogatása (búvárminősítés nélkül)", note: "1 merülés", price: "84 €" },
      { name: "A víz alatti kiállítás meglátogatása (búvárminősítés nélkül)", note: "1 merülés", price: "84 €" },
      {
        name: "1 merülés minősített búvár számára a Mylake / Paradisul Acvatic Brassó helyszíneken, felszereléssel együtt",
        price: "60 €",
      },
      {
        name: "1 merülés minősített búvár számára saját felszereléssel a Mylake / Paradisul Acvatic Brassó helyszíneken",
        price: "50 €",
      },
      { name: "Snorkeling a Mylake / Paradisul Acvatic Brassó helyszíneken, felszereléssel együtt", price: "25 €" },
    ],
  },
  {
    id: "naui-tanfolyamok",
    title: "NAUI tanfolyamok",
    icon: GraduationCap,
    items: [
      { name: "NAUI Scuba Diver tanfolyam", note: "Felszereléssel együtt", price: "563 €" },
      { name: "Advanced Scuba Diver tanfolyam", note: "Felszereléssel együtt", price: "550 € + 45 €" },
      { name: "Master Scuba Diver tanfolyam", note: "Felszereléssel együtt", price: "900 € + 45 €" },
      { name: "Rescue Diver tanfolyam", note: "Felszereléssel együtt", price: "590 € + 45 €" },
      { name: "Medic First Aid tanfolyam", note: "Felszereléssel együtt", price: "300 € + 45 €" },
      { name: "Nitrox tanfolyam", note: "Felszereléssel együtt", price: "200 € + 45 €" },
    ],
  },
  {
    id: "professzionalis",
    title: "Professzionális tanfolyamok",
    icon: Award,
    dark: true,
    items: [
      { name: "Dive Master", price: "1400 €" },
      { name: "Assistant Instructor", price: "1900 €" },
      { name: "Instructor", price: "2700 €" },
    ],
  },
  {
    id: "specializalt",
    title: "Egyéb specializált tanfolyamok",
    icon: Sparkles,
    items: [
      { name: "Night Diver – éjszakai búvár", price: "200 € + 45 €" },
      { name: "Search and Recover – keresés és kiemelés", price: "200 € + 45 €" },
      { name: "Navigation – víz alatti navigáció", price: "200 € + 45 €" },
      { name: "Altitude Diver – magashegyi búvárkodás", price: "200 € + 45 €" },
      { name: "Underwater Photographer – víz alatti fotózás", price: "250 € + 45 €" },
      { name: "Wreck Diver – roncsmerülés", price: "250 € + 45 €" },
      { name: "Cavern Diver – barlangi üregben történő merülés", price: "250 € + 45 €" },
      { name: "Drift Diver – sodrásos merülés", price: "250 € + 45 €" },
      { name: "Ice Diver – jég alatti merülés", price: "250 € + 45 €" },
      { name: "Deep Diver – mélymerülés", price: "250 € + 45 €" },
      { name: "Underwater Archaeologist – víz alatti régészet", price: "250 € + 45 €" },
    ],
  },
  {
    id: "felszerelesberles",
    title: "Búvárfelszerelés bérlése / merülés",
    icon: Backpack,
    items: [
      { name: "Snorkeling szett", note: "Maszk, légzőcső, uszony", price: "7 €" },
      { name: "BCD – lebegtető mellény", price: "7 €" },
      { name: "Légzőautomata Octopusszal és konzollal", price: "7 €" },
      { name: "Nedves búvárruha", price: "7 €" },
      { name: "Búvárkomputer", price: "9 €" },
      {
        name: "Teljes búvárfelszerelés",
        note: "Légzőautomata / konzol, BCD, nedves búvárruha, maszk, uszony",
        price: "50 €",
      },
      { name: "Palacktöltés – 12 literes palack, levegő", price: "25 €" },
      { name: "Palacktöltés – 15 / 18 literes palack", price: "35 €" },
    ],
  },
];

function PriceRow({ item, dark }: { item: Item; dark?: boolean }) {
  return (
    <li
      className={`flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
        dark ? "border-b border-white/10 last:border-0" : "border-b border-border/70 last:border-0"
      }`}
    >
      <div className="min-w-0">
        <h3 className={`font-display text-base font-semibold leading-snug ${dark ? "text-white" : "text-foreground"}`}>
          {item.name}
        </h3>
        {item.note && (
          <p className={`mt-1 text-sm ${dark ? "text-white/70" : "text-muted-foreground"}`}>{item.note}</p>
        )}
      </div>
      <span
        className={`shrink-0 self-start rounded-full px-4 py-1.5 font-display text-lg font-bold sm:self-auto ${
          dark ? "bg-white/10 text-secondary" : "bg-muted text-primary"
        }`}
      >
        {item.price}
      </span>
    </li>
  );
}

function Prices() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <img src={practice} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/75 via-deep/85 to-deep/95" />
        <Bubbles count={10} />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-white">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Árlista</span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-balance">
              Árak
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed">
              Válassza ki az Ön számára megfelelő búvárprogramot, tanfolyamot vagy szolgáltatást.
            </p>
            <nav aria-label="Árkategóriák" className="mt-8 flex flex-wrap gap-2">
              {groups.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors"
                >
                  {g.title}
                </a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {groups.map((g, gi) => (
        <section
          key={g.id}
          id={g.id}
          className={`scroll-mt-24 py-16 lg:py-24 ${
            g.dark ? "bg-surface text-surface-foreground" : gi % 2 === 0 ? "bg-background" : "bg-muted"
          }`}
        >
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <Reveal>
              <div className="flex items-center gap-3">
                <g.icon className={`h-7 w-7 ${g.dark ? "text-secondary" : "text-primary"}`} />
                <h2
                  className={`font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl text-balance ${
                    g.dark ? "text-white" : "text-foreground"
                  }`}
                >
                  {g.title}
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ul
                className={`mt-8 rounded-2xl px-5 sm:px-7 ${
                  g.dark ? "bg-white/5 border border-white/10" : "bg-card shadow-sm border border-border/60"
                }`}
              >
                {g.items.map((item) => (
                  <PriceRow key={item.name} item={item} dark={g.dark} />
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-border/60 bg-muted p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Speciális csoportos és csapatépítő programok
              </h2>
              <ul className="mt-5 space-y-3 text-base text-foreground/85 leading-relaxed">
                <li>Speciális búvárcsoportok számára egyedi árak és kedvezmények érhetők el.</li>
                <li>Csapatépítő programok esetén kérjen egyedi árajánlatot.</li>
              </ul>
              <a
                href="mailto:info@mylake.ro"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-ocean px-6 py-3 text-sm font-semibold text-white shadow-glow hover:-translate-y-0.5 transition-transform"
              >
                <Mail className="h-4 w-4" /> info@mylake.ro
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-24 lg:pb-32">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-ocean p-10 sm:p-14 shadow-glow">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl text-balance">
                  Kérdése van az árakkal kapcsolatban?
                </h2>
                <p className="mt-4 max-w-xl text-lg text-white/90">
                  Segítünk kiválasztani a megfelelő programot vagy tanfolyamot.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="tel:+40755011497"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary hover:-translate-y-0.5 transition-transform"
                  >
                    <Phone className="h-4 w-4" /> Hívjon most
                  </a>
                  <Link
                    to="/kapcsolat"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    Kapcsolat <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
          <p className="mt-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Az árak az áfát nem tartalmazzák.
          </p>
        </div>
      </section>
    </>
  );
}
