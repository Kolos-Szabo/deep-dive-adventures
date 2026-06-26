import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Users, ClipboardCheck, Wrench, Radio, BookOpen, ArrowRight } from "lucide-react";
import practice from "@/assets/buvarfelszereles-ellenorzes-stegen.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Bubbles } from "@/components/site/Bubbles";

export const Route = createFileRoute("/biztonsag")({
  head: () => ({
    meta: [
      { title: "Biztonság & oktatás — Búvárkodás Erdély" },
      { name: "description", content: "NAUI biztonsági protokollok, buddy rendszer, felszerelés-ellenőrzés. Nálunk a biztonság nem opció — alapszabály." },
      { property: "og:title", content: "Biztonság & oktatás — Búvárkodás Erdély" },
      { property: "og:description", content: "Hogyan biztosítjuk minden merülés biztonságát." },
      { property: "og:url", content: "/biztonsag" },
    ],
    links: [{ rel: "canonical", href: "/biztonsag" }],
  }),
  component: Safety,
});

const protocols = [
  { icon: ClipboardCheck, t: "Részletes briefing", d: "Minden merülés előtt áttekintjük a tervet, jelzéseket, vészhelyzeti eljárást." },
  { icon: Wrench, t: "Felszerelés-ellenőrzés", d: "Buddy check — minden kulcsponton kétszer ellenőrzött eszközpark." },
  { icon: Users, t: "Buddy rendszer", d: "Soha nem merülünk egyedül. A pár az első biztonsági kör." },
  { icon: Radio, t: "Felszíni támogatás", d: "Folyamatos kapcsolattartás és gyors reagálás vészhelyzet esetén." },
  { icon: BookOpen, t: "NAUI standardok", d: "Minden eljárásunkat a NAUI nemzetközi protokollja vezérli." },
  { icon: ShieldCheck, t: "Biztonsági megálló", d: "Lassú felemelkedés, kötelező biztonsági megálló minden merülésnél." },
];

function Safety() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <img src={practice} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/75 via-deep/85 to-deep/95" />
        <Bubbles count={10} />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-white">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Biztonság &amp; oktatás</span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-balance max-w-4xl">
              A biztonság az <span className="text-secondary">első</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed">
              Egy jól szervezett merülés a legtöbb kockázatot a vízbe lépés előtt kezeli. Nálunk minden a tervezésnél kezdődik — és csak akkor merülünk, amikor minden rendben.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Protokolljaink</span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">Hat pillér, amire építünk.</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {protocols.map((p, i) => (
              <Reveal key={p.t} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-glow transition-all">
                  <p.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-5 font-display text-lg font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Oktatási szemléletünk</span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">
              „Egy magabiztos búvár biztonságos búvár.”
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
              Lépésről lépésre építjük fel a tudást, a készségeket és a magabiztosságot. Soha nem rohanunk — a búvárkodás öröm, nem versenyfutás.
            </p>
            <Link to="/szolgaltatasok" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-ocean px-7 py-4 text-base font-semibold text-white shadow-glow hover:-translate-y-0.5 transition-transform">
              Nézd meg tanfolyamainkat <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
