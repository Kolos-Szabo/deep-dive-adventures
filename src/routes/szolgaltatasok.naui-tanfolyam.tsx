import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Phone, GraduationCap, Award, Compass, Waves, Shield, HeartPulse, Wrench, Camera, Anchor, Moon, Search, Ship, LifeBuoy, Microscope, Briefcase, Wind } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Bubbles } from "@/components/site/Bubbles";

import heroImg from "@/assets/naui-buvarok-stegen-erdelyi-tonal.jpg.asset.json";
import beginnerImg from "@/assets/naui-medencei-kepzes-maszk-gyakorlat.jpg.asset.json";
import owImg from "@/assets/buvartanfolyam-medence-viz-alatti-kepzes.jpg.asset.json";
import confinedImg from "@/assets/naui-buvarfelszereles-medence-konfined.jpg.asset.json";
import advancedImg from "@/assets/advanced-merulok-ereszkedes-paros-melyviz.jpg.asset.json";
import rescueImg from "@/assets/technikai-buvar-portre-szabalyozo-maszk.jpg.asset.json";
import techImg from "@/assets/technikai-buvar-sidemount-melyben-napsugarak.jpg.asset.json";
import techTeamImg from "@/assets/technikai-merules-tankok-csapat-melyben.jpg.asset.json";
import gearImg from "@/assets/buvar-szabalyozok-felszereles-asztalon.jpg.asset.json";
import proImg from "@/assets/buvarcsoport-dahab-tengeri-merules.jpg.asset.json";

const PAGE_TITLE = "NAUI Búvártanfolyamok Erdélyben — Scuba Diver, Open Water, Advanced & Tech | Búvárkodás Erdély";
const PAGE_DESC = "NAUI búvártanfolyamok Erdélyben kis csoportban: Try Scuba, Open Water Diver, Advanced, Rescue, Divemaster, Instructor, Tech és Freediving képzések — nemzetközi, lejárat nélküli minősítéssel.";

export const Route = createFileRoute("/szolgaltatasok/naui-tanfolyam")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { name: "keywords", content: "NAUI búvártanfolyam, búvárképzés Erdély, Open Water Diver, Advanced Open Water, Rescue Diver, Divemaster, Instructor, technikai búvárkodás, Nitrox, freediving, scuba Erdély, Transilvanian Dive Center" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "article" },
      { property: "og:image", content: heroImg.url },
      { property: "og:url", content: "/szolgaltatasok/naui-tanfolyam" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg.url },
    ],
    links: [{ rel: "canonical", href: "/szolgaltatasok/naui-tanfolyam" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "NAUI Búvártanfolyamok",
          description: PAGE_DESC,
          provider: {
            "@type": "Organization",
            name: "Transilvanian Dive Center — Búvárkodás Erdély",
          },
          image: heroImg.url,
          inLanguage: "hu",
          educationalCredentialAwarded: "NAUI nemzetközi búvár minősítés",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Hány éves kortól lehet elkezdeni a búvárkodást?", acceptedAnswer: { "@type": "Answer", text: "A legtöbb kezdő program 10 éves kortól indul junior minősítéssel; a pontos korhatár tanfolyamfüggő." } },
            { "@type": "Question", name: "Kell-e profin úsznom?", acceptedAnswer: { "@type": "Answer", text: "Nem. Az alapfokú úszástudás és a vízben való magabiztosság elegendő a kezdő tanfolyamokhoz." } },
            { "@type": "Question", name: "Meddig érvényes a NAUI minősítés?", acceptedAnswer: { "@type": "Answer", text: "A NAUI minősítések élethosszig érvényesek és nem járnak le. Hosszabb kihagyás után frissítő merülést ajánlunk." } },
            { "@type": "Question", name: "Bárhol a világon merülhetek a NAUI kártyámmal?", acceptedAnswer: { "@type": "Answer", text: "Igen, a NAUI minősítés nemzetközileg elismert és minden búvárközpontban elfogadott." } },
            { "@type": "Question", name: "Biztonságos a búvárkodás?", acceptedAnswer: { "@type": "Answer", text: "Megfelelő képzéssel, karbantartott felszereléssel és a biztonsági protokollok betartásával a búvárkodás kiváló biztonsági mutatókkal rendelkezik." } },
          ],
        }),
      },
    ],
  }),
  component: NauiCoursePage,
});

const benefits = [
  "Nemzetközileg elismert minősítés",
  "A valódi tudás a fontos — nem a minimumkövetelmény",
  "Kis csoportok, személyre szabott oktatás",
  "Sok vízi gyakorlat, kevés papír",
  "Élethosszig érvényes kártya (nem jár le)",
  "Környezettudatos merülési szemlélet",
  "Rekreációs, profi és technikai szintek",
];

const courseGroups: Array<{
  id: string;
  title: string;
  lead: string;
  img?: { url: string };
  imageAlt?: string;
  items: Array<{ icon: any; title: string; body: string; bullets?: string[] }>;
}> = [
  {
    id: "kezdo",
    title: "Kezdő tanfolyamok",
    lead: "Az első levegővétel a víz alatt — itt kezdődik minden búvárkaland.",
    img: beginnerImg,
    imageAlt: "NAUI búvároktató kezdő tanítvánnyal medencei maszkgyakorlat közben",
    items: [
      {
        icon: Waves,
        title: "Try Scuba — Próbáld ki a búvárkodást",
        body: "Soha nem merültél még? Ez az élményre szabott bevezető program lehetővé teszi, hogy biztonságos, oktató által felügyelt környezetben fedezd fel a búvárkodást. Tökéletes első merülőknek, családoknak és kíváncsi felfedezőknek — előzetes tapasztalat nem szükséges.",
      },
      {
        icon: GraduationCap,
        title: "Open Water Scuba Diver",
        body: "A világ legnépszerűbb búvárkártyája — a Te belépőd az óceánok, tavak és barlangok világába. Elmélet (online vagy tantermi), zárt vízi (medencés) gyakorlat és nyíltvízi merülések — végén nemzetközi minősítés.",
        bullets: [
          "Búvárkodás fizikája és élettana",
          "Felszerelés összeszerelése és karbantartása",
          "Víz alatti kommunikáció és jelzések",
          "Lebegés és felhajtóerő szabályozás",
          "Biztonságos ereszkedés és felemelkedés",
          "Tájékozódás és merüléstervezés",
          "Vészhelyzeti eljárások",
        ],
      },
    ],
  },
  {
    id: "halado",
    title: "Haladó képzések",
    lead: "Bővítsd a készségeidet és nyiss meg új víz alatti környezeteket.",
    img: advancedImg,
    imageAlt: "Két haladó búvár ereszkedik egy mélyebb merülési ponton — Advanced Open Water gyakorlat",
    items: [
      {
        icon: Compass,
        title: "Advanced Open Water Diver",
        body: "Új izgalmas merülési területek — mély merülés, víz alatti tájékozódás, éjszakai merülés, peak performance lebegés, keresés-mentés és roncsmerülés. Magabiztosabb leszel, jobb a navigációd és nehezebb körülmények között is otthon érzed magad.",
      },
      {
        icon: Award,
        title: "Master Scuba Diver",
        body: "A legmagasabb rekreációs szint — több specialitás minősítés és komoly merülési tapasztalat ötvözete. Egy elismerés a tudásodról és az elkötelezettségedről a biztonságos búvárkodás iránt.",
      },
    ],
  },
  {
    id: "specialitasok",
    title: "Specialitás tanfolyamok",
    lead: "Mélyülj el egy területen — pontosan abban, ami téged a leginkább érdekel.",
    items: [
      { icon: Wind, title: "Enriched Air Nitrox", body: "Oxigéndúsított keverék biztonságos használata — hosszabb fenékidő, kevesebb fáradás." },
      { icon: Anchor, title: "Deep Diver", body: "Mélyebb merülési környezet — fejlett tervezés, gázgazdálkodás és biztonsági eljárások." },
      { icon: Moon, title: "Night Diver", body: "A víz alatti világ éjszaka — egy teljesen új ökoszisztéma, csak lámpafényben látható élet." },
      { icon: Compass, title: "Underwater Navigation", body: "Iránytűs és természetes navigáció — sose tévedj el a víz alatt." },
      { icon: Search, title: "Search and Recovery", body: "Hatékony módszerek elveszett tárgyak megtalálására és felhozására." },
      { icon: Ship, title: "Wreck Diver", body: "Hajóroncsok, repülők és mesterséges zátonyok biztonságos felfedezése." },
      { icon: Camera, title: "Underwater Photography", body: "Kameraválasztás, világítás, kompozíció — a felejthetetlen pillanatok megörökítése." },
    ],
  },
  {
    id: "rescue",
    title: "Rescue Diver — Mentőbúvár",
    lead: "Sokak szerint ez a kurzus formál igazán magabiztos búvárrá.",
    img: rescueImg,
    imageAlt: "Tapasztalt búvár sidemount felszerelésben — Rescue Diver szintű kommunikáció víz alatt",
    items: [
      {
        icon: LifeBuoy,
        title: "Rescue Diver",
        body: "Tanuld meg felismerni a problémákat, mielőtt vészhelyzetté válnának. Fáradt és stresszes búvárok megsegítése, víz alatti mentés, vészhelyzet-kezelés és a saját helyzettudatod fejlesztése — egyszerre szakmai és személyes szintlépés.",
      },
      {
        icon: HeartPulse,
        title: "Elsősegély & Sürgősségi ellátás",
        body: "CPR, elsősegély, sürgősségi oxigénadagolás és búvár-specifikus elsősegély. Hasznos a víz alatt — és a hétköznapokban is.",
      },
    ],
  },
  {
    id: "profi",
    title: "Profi képzések",
    lead: "Tedd a szenvedélyedet hivatássá.",
    img: proImg,
    imageAlt: "NAUI profi búvárcsapat tengeri merülés előtt — Divemaster és Instructor szint",
    items: [
      { icon: Briefcase, title: "Divemaster", body: "Búvártevékenységek felügyelete, oktató asszisztálása, minősített búvárok vezetése — az első profi szint." },
      { icon: GraduationCap, title: "Assistant Instructor", body: "A következő lépés az oktatói pálya felé — tanulj meg részegységeket oktatni." },
      { icon: Award, title: "Instructor", body: "NAUI minősített oktató — taníts búvárkodást bárhol a világon. Oktatási módszertan, kockázatkezelés, búvárvezetés, etika." },
    ],
  },
  {
    id: "technikai",
    title: "Technikai búvárkodás",
    lead: "Tapasztalt búvároknak, akiknek a rekreációs határok már szűkek.",
    img: techImg,
    imageAlt: "Technikai búvár sidemount konfigurációban a nyílt tengerben napsugarakkal",
    items: [
      { icon: Wind, title: "Decompression Diving", body: "Dekompressziós merülések tervezése és kivitelezése." },
      { icon: Wind, title: "Technical Nitrox & Mixed Gas", body: "Speciális gázkeverékek — Nitrox, Trimix — biztonságos használata." },
      { icon: Wrench, title: "Advanced Equipment Configuration", body: "Redundáns rendszerek, sidemount és twinset konfigurációk." },
    ],
  },
  {
    id: "kozosseg",
    title: "Közbiztonsági & tudományos búvárkodás",
    lead: "Speciális területek profiknak.",
    img: techTeamImg,
    imageAlt: "Technikai búvárok twinset palackokkal csoportos merülésen a nyílt tengerben",
    items: [
      { icon: Shield, title: "Public Safety Diving", body: "Mentőszolgálatoknak, hatóságoknak — keresés, bizonyíték-mentés, alacsony látótávolság, csapatmunka." },
      { icon: Microscope, title: "Scientific Diving", body: "Kutatóknak, egyetemeknek — víz alatti adatgyűjtés, monitoring, természetvédelem." },
    ],
  },
  {
    id: "freediving",
    title: "Freediving — Szabadtüdős merülés",
    lead: "Egyetlen levegővétellel a mélybe.",
    items: [
      { icon: Wind, title: "Freediving alapok és haladó", body: "Lélegzetvisszatartás, nyomáskiegyenlítés, hatékony uszonyozás, ellazulás, bukótárs-protokollok. Kezdőknek és tapasztalt vízi embereknek egyaránt." },
    ],
  },
];

function NauiCoursePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <img
          src={heroImg.url}
          alt="NAUI búvárok teljes felszerelésben az erdélyi tó stégén, Csíki-medence háttérrel"
          title="NAUI búvárképzés Erdélyben"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/80 to-deep/95" />
        <Bubbles count={10} />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8 text-white">
          <Link to="/szolgaltatasok" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> Szolgáltatások
          </Link>
          <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-secondary">NAUI Scuba Diving Courses</span>
          <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-balance">
            Fedezd fel a <span className="text-secondary">víz alatti világot</span> NAUI-val
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed">
            A búvárkodás tanulása több, mint egy kártya — magabiztosság és tudás ahhoz, hogy biztonságosan fedezd fel a Föld egyik legizgalmasabb környezetét. Akár az első levegővétel a víz alatt, akár a profi vagy technikai szint a cél — a NAUI (National Association of Underwater Instructors) több mint 60 éve a biztonságra, a tudásra és a gyakorlati tapasztalatra épít.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+40755011497" className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-4 text-base font-semibold text-surface shadow-glow hover:-translate-y-0.5 transition-transform">
              <Phone className="h-4 w-4" /> Hívj most: +40 755 011 497
            </a>
            <Link to="/kapcsolat" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-7 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors">
              Kapcsolatfelvétel <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY NAUI */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-2">
            <img
              src={gearImg.url}
              alt="NAUI búvárszabályozók és felszerelés a Transilvanian Dive Center asztalán — minőségi képzési eszközök"
              title="Minőségi képzési felszerelés"
              loading="lazy"
              className="rounded-2xl shadow-deep w-full"
            />
          </Reveal>
          <Reveal delay={120} className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Miért NAUI?</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance">
              A világ egyik legrégebbi és legtekintélyesebb búvároktató szervezete.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              A NAUI 1960 óta képez búvárokat és oktatókat több mint 100 országban. A Transilvanian Dive Center-nél kis csoportokban, személyre szabott figyelemmel dolgozunk — hogy minden tanítványunk valóban magabiztos és felelős búvárrá váljon.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* COURSE GROUPS */}
      {courseGroups.map((group, gi) => (
        <section key={group.id} id={group.id} className={gi % 2 === 0 ? "bg-muted py-20 lg:py-28" : "bg-background py-20 lg:py-28"}>
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{group.title}</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold tracking-tight text-balance max-w-3xl">
                {group.lead}
              </h2>
            </Reveal>

            <div className={`mt-12 grid gap-10 ${group.img ? "lg:grid-cols-5" : "lg:grid-cols-1"} items-start`}>
              {group.img && (
                <Reveal className="lg:col-span-2">
                  <img
                    src={group.img.url}
                    alt={group.imageAlt ?? group.title}
                    title={group.title}
                    loading="lazy"
                    className="rounded-2xl shadow-deep w-full aspect-[4/3] object-cover sticky top-28"
                  />
                </Reveal>
              )}
              <div className={`grid gap-5 ${group.img ? "lg:col-span-3" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
                {group.items.map((it, i) => (
                  <Reveal key={it.title} delay={i * 70}>
                    <article className="h-full rounded-2xl bg-card p-7 shadow-sm hover:shadow-glow transition-shadow border border-border/60">
                      <it.icon className="h-8 w-8 text-primary" />
                      <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{it.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
                      {it.bullets && (
                        <ul className="mt-4 space-y-2">
                          {it.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2 text-sm">
                              <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* STRUCTURE & EQUIPMENT */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Tanfolyam felépítés</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">Hogyan épül fel egy NAUI kurzus?</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Digitális tananyag (online hozzáférés)",
                "Tantermi vagy online elméleti foglalkozások",
                "Gyakorlati készségfejlesztés (medence / zárt víz)",
                "Nyíltvízi merülések (tó / tenger)",
                "Tudásellenőrzés és záróvizsga",
                "Nemzetközi NAUI minősítés",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" /> <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={confinedImg.url}
              alt="NAUI búvárfelszerelés — BCD, palack és szabályozók sorba rendezve a medence szélén a zárt vízi képzés előtt"
              title="Felszerelés a zárt vízi képzéshez"
              loading="lazy"
              className="rounded-2xl shadow-deep w-full"
            />
            <h3 className="mt-8 font-display text-2xl font-bold">Felszerelés</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              A tanfolyamokon minőségi bérelhető felszerelést biztosítunk — BCD, szabályozó, búvárkomputer, maszk, snorkel, uszony, búvárruha, palack és súlyrendszer. Hozhatod a sajátodat is, ha rendelkezik az előírt minősítéssel.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SAFETY */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
          <Reveal>
            <Shield className="mx-auto h-10 w-10 text-secondary" />
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight">Mindenek előtt: biztonság</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Minden NAUI kurzus alapja a biztonság. Oktatóink a megfelelő tervezésre, eszközismeretre, lebegéskontrollra, környezettudatosságra, bukótárs-protokollokra és vészhelyzeti felkészültségre építenek — minden merülésen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-center">Gyakran ismételt kérdések</h2>
          </Reveal>
          <div className="mt-12 space-y-6">
            {[
              { q: "Hány éves kortól lehet elkezdeni?", a: "A legtöbb kezdő program 10 éves kortól indul junior minősítéssel. A pontos korhatár tanfolyamfüggő." },
              { q: "Kell-e kiváló úszónak lennem?", a: "Nem. Az alapfokú úszástudás és a vízben való magabiztosság elegendő a kezdő tanfolyamokhoz." },
              { q: "Meddig érvényes a minősítés?", a: "A NAUI minősítések élethosszig érvényesek és nem járnak le. Hosszabb kihagyás után frissítő merülést javaslunk." },
              { q: "Bárhol merülhetek a kártyámmal?", a: "Igen. A NAUI minősítés nemzetközileg elismert és minden búvárközpontban elfogadott." },
              { q: "Biztonságos a búvárkodás?", a: "Megfelelő képzéssel, karbantartott felszereléssel és a biztonsági eljárások betartásával a búvárkodás kiváló biztonsági mutatókkal rendelkezik." },
            ].map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <article className="rounded-2xl bg-card p-6 border border-border/60">
                  <h3 className="font-display text-lg font-semibold">{f.q}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{f.a}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-surface text-surface-foreground py-24 lg:py-32 overflow-hidden">
        <img
          src={owImg.url}
          alt="NAUI oktató és tanítvány víz alatt a medencében — Open Water búvárképzés"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-deep opacity-90" />
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-balance">
              Indítsd el a <span className="text-secondary">víz alatti kalandod</span>.
            </h2>
            <p className="mt-5 text-lg text-surface-foreground/85 max-w-2xl mx-auto">
              Akár korallzátonyokról, történelmi roncsokról, víz alatti fotózásról vagy a profi oktatói karrierről álmodsz — van NAUI kurzus, ami pontosan a Te céljaidra van szabva. Vedd fel velünk a kapcsolatot és kezdjük el együtt.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href="tel:+40755011497" className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-4 text-base font-semibold text-surface shadow-glow hover:-translate-y-0.5 transition-transform">
                <Phone className="h-4 w-4" /> +40 755 011 497
              </a>
              <Link to="/kapcsolat" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-7 py-4 text-base font-semibold text-white hover:bg-white/20 transition-colors">
                Írj nekünk <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
