import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Phone, ShieldCheck, Waves, Compass, GraduationCap } from "lucide-react";
import hero from "@/assets/hero.jpg";
import course from "@/assets/course.jpg";
import experience from "@/assets/experience.jpg";
import group from "@/assets/group.jpg";
import practice from "@/assets/practice.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Bubbles } from "@/components/site/Bubbles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Búvárkodás Erdély — NAUI búvártanfolyamok és élménymerülések" },
      { name: "description", content: "Fedezd fel a mélységet Erdélyben: NAUI búvártanfolyamok, élménymerülések és kalandprogramok szakértő oktatókkal, garantált biztonsággal." },
      { property: "og:title", content: "Búvárkodás Erdély" },
      { property: "og:description", content: "NAUI búvártanfolyamok és élménymerülések Erdély szívében." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  {
    slug: "naui-tanfolyam",
    title: "NAUI Búvártanfolyamok",
    desc: "Kezdőtől a haladó szintig — nemzetközileg elismert NAUI minősítés.",
    img: course,
    icon: GraduationCap,
  },
  {
    slug: "elmenymerules",
    title: "Élménybúvárkodás",
    desc: "Vezetett merülések a régió legszebb víz alatti helyszínein.",
    img: experience,
    icon: Compass,
  },
  {
    slug: "gyakorlo-merules",
    title: "Gyakorló merülések",
    desc: "Frissítsd készségeidet, építsd magabiztosságodat ellenőrzött környezetben.",
    img: practice,
    icon: Waves,
  },
  {
    slug: "csoportos-program",
    title: "Csoportos kalandprogramok",
    desc: "Csapatépítő merülések, baráti társaságok és születésnapi élmények.",
    img: group,
    icon: Award,
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img
          src={hero}
          alt="Búvár ereszkedik le a mély türkiz óceánba"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/40 via-deep/55 to-deep/95" />
        <Bubbles count={18} />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pt-32 pb-20 lg:px-8 lg:pb-32">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/90">NAUI hivatalos oktatás</span>
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl text-balance">
              Merülj a <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">mélységbe</span>.<br />
              Erdélyből indulva.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
              Búvártanfolyamok, élménymerülések és kalandprogramok szakértő oktatókkal. A biztonság az első, az élmény pedig örökre szól.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/kapcsolat"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-ocean px-7 py-4 text-base font-semibold text-white shadow-glow hover:shadow-deep hover:-translate-y-1 transition-all"
              >
                Foglalj merülést
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+40755011497"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md hover:bg-white/10 transition-all"
              >
                <Phone className="h-4 w-4" /> +40 755 011 497
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-8 sm:flex sm:flex-wrap sm:gap-x-12">
            {[
              { n: "500+", l: "Sikeres merülés" },
              { n: "10+", l: "Év tapasztalat" },
              { n: "NAUI", l: "Hivatalos minősítés" },
              { n: "100%", l: "Biztonsági protokoll" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-white sm:text-4xl">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">A küldetésünk</span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl text-balance">
                Egy újabb világ kezdődik a felszín alatt.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                A Búvárkodás Erdély küldetése, hogy a víz alatti világ kalandját biztonságosan, szakmaian és élményszerűen hozza közelebb mindenkihez — kezdő merülőtől a tapasztalt búvárig.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                A NAUI oktatási rendszer szigorú standardjait követve építjük fel minden tanítványunk tudását — lépésről lépésre, magabiztosan, élményekkel.
              </p>
              <Link to="/rolunk" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
                Ismerd meg a csapatot <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-ocean rounded-3xl blur-3xl opacity-30" />
                <img
                  src={experience}
                  alt="Búvár felfedezi a korallzátonyt"
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="relative rounded-2xl shadow-deep w-full h-auto"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-muted py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Szolgáltatások</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl text-balance">
              Válaszd ki a saját kalandod.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <Link
                  to="/szolgaltatasok/$slug"
                  params={{ slug: s.slug }}
                  className="group relative block h-full overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-deep transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/40 to-transparent" />
                    <s.icon className="absolute top-5 right-5 h-6 w-6 text-secondary" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-display text-xl font-bold text-white leading-tight">{s.title}</h3>
                      <p className="mt-2 text-sm text-white/80 leading-relaxed">{s.desc}</p>
                      <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                        Részletek <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY BAND */}
      <section className="relative overflow-hidden bg-surface text-surface-foreground py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-deep" />
        <Bubbles count={10} />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 items-start">
            <Reveal className="lg:col-span-2">
              <ShieldCheck className="h-10 w-10 text-secondary" />
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl text-balance">
                A biztonság nem opció. <span className="text-secondary">Alapszabály.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-surface-foreground/80 leading-relaxed">
                Minden merülésünket NAUI protokoll szerint tervezzük és vezetjük. Felszerelés-ellenőrzés, briefing, párban merülés, biztonsági megálló — semmit sem bízunk a véletlenre.
              </p>
              <Link to="/biztonsag" className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-surface hover:bg-accent transition-colors">
                Biztonsági protokolljaink <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={200} className="space-y-6">
              {[
                { n: "01", t: "Briefing", d: "Részletes eligazítás minden merülés előtt." },
                { n: "02", t: "Buddy rendszer", d: "Soha nem merülünk egyedül." },
                { n: "03", t: "NAUI standardok", d: "Nemzetközi szakmai irányelvek szerint." },
              ].map((step) => (
                <div key={step.n} className="border-l-2 border-secondary/40 pl-5">
                  <div className="font-display text-xs font-bold tracking-[0.25em] text-secondary">{step.n}</div>
                  <div className="mt-1 font-display text-lg font-semibold">{step.t}</div>
                  <div className="text-sm text-surface-foreground/70 mt-1">{step.d}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-ocean p-10 sm:p-16 shadow-glow">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-deep/30 blur-3xl" />
              <div className="relative">
                <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl text-balance">
                  Készen állsz az első merülésre?
                </h2>
                <p className="mt-4 max-w-xl text-lg text-white/90">
                  Vedd fel velünk a kapcsolatot — visszahívunk és összeállítjuk a számodra ideális programot.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="tel:+40755011497" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary hover:-translate-y-0.5 transition-transform">
                    <Phone className="h-4 w-4" /> Hívj most
                  </a>
                  <Link to="/kapcsolat" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-transparent px-7 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors">
                    Írj nekünk <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
