import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Compass, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import teamPhoto from "@/assets/buvarcsapat-csoportkep-erdely.jpg";
import portraitAsset from "@/assets/buvar-portre-viz-alatt-kozelrol.jpg.asset.json";
import { Reveal } from "@/components/site/Reveal";

const portrait = portraitAsset.url;

export const Route = createFileRoute("/rolunk")({
  head: () => ({
    meta: [
      { title: "Rólunk — Búvárkodás Erdély" },
      { name: "description", content: "Ismerd meg a Búvárkodás Erdély csapatát: NAUI minősítésű oktatók, sportos kalandszemlélet, kompromisszummentes biztonság." },
      { property: "og:title", content: "Rólunk — Búvárkodás Erdély" },
      { property: "og:description", content: "Sportos kalandszemlélet, NAUI standardok, valódi élmények." },
      { property: "og:url", content: "/rolunk" },
    ],
    links: [{ rel: "canonical", href: "/rolunk" }],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, t: "Biztonság az első", d: "Nemzetközi standardok, gondos tervezés, gyakorolt protokollok." },
  { icon: Award, t: "NAUI minősítés", d: "Az iparág egyik legmagasabb oktatási standardja." },
  { icon: Compass, t: "Kalandszemlélet", d: "A sport, a felfedezés és a természet szeretete vezet." },
  { icon: Heart, t: "Emberközpontú oktatás", d: "Minden búvár saját ritmusában fejlődik nálunk." },
];

function About() {
  return (
    <>
      <section className="relative bg-surface text-surface-foreground pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-deep" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Rólunk</span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-balance max-w-4xl">
              Egy csapat, egy szenvedély: a <span className="text-secondary">mélység</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-surface-foreground/80 leading-relaxed">
              A Búvárkodás Erdély a régió szenvedélyes búvároktató közössége. Tanfolyamokat, élménymerüléseket és kalandprogramokat szervezünk — sportos szemlélettel, biztonsági fókusszal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img src={teamPhoto} alt="Búvárkodás Erdély csapata neoprén ruhában, Erdély hegyei előtt" title="A Búvárkodás Erdély csapata" width={1600} height={900} loading="lazy" className="rounded-2xl shadow-deep w-full" />
          </Reveal>
          <Reveal delay={150}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">NAUI oktatási rendszer</span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">
              Világszínvonalú képzés. Helyi szakértelem.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A NAUI (National Association of Underwater Instructors) az egyik legrégebbi és legszigorúbb búvároktatási rendszer a világon. Tanítványaink olyan tudást és minősítést kapnak, amelyet a világ bármely búvárközpontjában elismernek.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Mi pedig erre építünk: helyi merülőhelyek alapos ismerete, személyes mentorálás, valódi vízi környezetben szerzett gyakorlat.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Értékeink</span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">Amiben hiszünk.</h2>
          </Reveal>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 80}>
                <div className="h-full rounded-2xl bg-card p-8 shadow-sm hover:shadow-glow transition-shadow">
                  <v.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-5 font-display text-lg font-semibold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-16 text-center">
            <Link to="/kapcsolat" className="inline-flex items-center gap-2 rounded-full bg-gradient-ocean px-7 py-4 text-base font-semibold text-white shadow-glow hover:-translate-y-0.5 transition-transform">
              Beszélgessünk <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
