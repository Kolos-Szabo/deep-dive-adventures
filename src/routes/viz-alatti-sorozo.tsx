import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Beer, CalendarDays, MapPin, Phone, Ruler, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Bubbles } from "@/components/site/Bubbles";
import { YouTubeFacade } from "@/components/site/YouTubeFacade";
import heroAsset from "@/assets/viz-alatti-csiki-sor-elmenymerules.jpg.asset.json";
import bottleAsset from "@/assets/viz-alatti-beraria-subacvatica-merules.jpg.asset.json";
import toastAsset from "@/assets/buvar-viz-alatti-soros-koccintas-elmeny.jpg.asset.json";
import signAsset from "@/assets/buvar-viz-alatti-tabla-sas-jelzes.jpg.asset.json";
import structureAsset from "@/assets/buvar-viz-alatti-szerkezet-mellett.jpg.asset.json";
import crateAsset from "@/assets/viz-alatti-borladak-buvar-melyben.jpg.asset.json";
import surfaceAsset from "@/assets/buvarpar-teljes-felszerelesben-stegen-napsutes.jpg.asset.json";

const PATH = "/viz-alatti-sorozo";
const TITLE = "Víz alatti Tiltott Csíki Söröző – búvárélmény Dálnokon | Búvárkodás Erdély";
const DESCRIPTION =
  "Sörözés három méter mélyen: a dálnoki búvártóban berendezett víz alatti Tiltott Csíki Söröző története, az élmény menete és az ára – 84 EUR.";
const PRICE = "84 EUR";
const VIDEO_ID = "ETf370X4edI";

export const Route = createFileRoute("/viz-alatti-sorozo")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "víz alatti söröző, víz alatti Csíki Söröző, Tiltott Csíki Söröző, víz alatti búvárkodás, különleges búvárélmény, búvárkodás Erdélyben, víz alatti élmény, Csíki Sör, Dálnok búvártó",
      },
      { property: "og:title", content: "Víz alatti Tiltott Csíki Söröző – búvárélmény Dálnokon" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: PATH },
      { property: "og:image", content: heroAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroAsset.url },
    ],
    links: [{ rel: "canonical", href: PATH }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: "Víz alatti Tiltott Csíki Söröző – sörözés három méter mélyen",
              description: DESCRIPTION,
              image: heroAsset.url,
              inLanguage: "hu",
              author: { "@type": "Organization", name: "Búvárkodás Erdély" },
              publisher: { "@type": "Organization", name: "Búvárkodás Erdély" },
              mainEntityOfPage: { "@type": "WebPage", "@id": PATH },
            },
            {
              "@type": "TouristAttraction",
              name: "Víz alatti Tiltott Csíki Söröző",
              description:
                "Három méter mélyen berendezett víz alatti söröző a dálnoki búvártóban, búvároktató kíséretével látogatható.",
              image: heroAsset.url,
              address: { "@type": "PostalAddress", addressLocality: "Dálnok", addressRegion: "Kovászna megye", addressCountry: "RO" },
              offers: { "@type": "Offer", price: "84", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
            },
          ],
        }),
      },
    ],
  }),
  component: UnderwaterPubPage,
});

const facts = [
  { icon: MapPin, label: "Helyszín", value: "My Lake búvártó, Dálnok (Kovászna megye, Erdély)" },
  { icon: Ruler, label: "Mélység", value: "A söröző 3 méter mélyen áll; a tó fokozatosan 9 méterig mélyül" },
  { icon: CalendarDays, label: "Megnyitó", value: "2018. szeptember 2." },
  { icon: Users, label: "Kinek szól?", value: "Kezdőknek is: rövid felszíni felkészítés után, oktató kíséretével" },
  { icon: Beer, label: "Ami lent vár", value: "Berendezett bárpult sörcsappal, hűtő, bokszzsák és a híres kilométerkő" },
] as const;

function Figure({
  src,
  alt,
  caption,
  width,
  height,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl shadow-deep bg-muted">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 motion-safe:hover:scale-[1.03]"
        />
      </div>
      {caption && <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}

function UnderwaterPubPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] w-full overflow-hidden">
        <img
          src={heroAsset.url}
          alt="Búvár egy üveg Csíki Sört nyújt át a víz alatt a dálnoki búvártó zöldes vizében"
          width={1920}
          height={1440}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/45 via-deep/60 to-deep/95" />
        <Bubbles count={14} />
        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-end px-5 pt-32 pb-16 lg:px-8 lg:pb-24">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur-md">
              <Beer className="h-3.5 w-3.5 text-secondary" aria-hidden="true" /> Víz alatti élmény
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl text-balance">
              Víz alatti Tiltott Csíki Söröző
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Három méter mélyen egy bárpult, egy sörcsap és egy kilométerkő várja azt, aki hajlandó felvenni a
              maszkot. Ez a történet arról szól, hogyan lett egy sepsiszentgyörgyi ötletből a dálnoki tófenék
              legkülönösebb vendéglátóhelye.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-baseline gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Ár</span>
                <span className="font-display text-3xl font-bold text-white">{PRICE}</span>
              </div>
              <a
                href="#reszletek"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10"
              >
                Részletek <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-background">
        {/* INTRO */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <Reveal>
              <p className="text-xl font-medium leading-relaxed text-foreground/90 sm:text-2xl">
                Van egy tó Háromszéken, ahol a merülés végén nem a stégen koccintanak a búvárok. Lent, a
                tófenéken, egy hűtő mellett, miközben a buborékok a felszín felé indulnak.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-foreground/85">
                A dálnoki My Lake tó nem természetes képződmény: 2013-ban hozta létre a Szabó család kifejezetten
                búvárkodásra és víziterápiára. Mintegy ezer négyzetméteres, fokozatosan kilenc méterig mélyülő
                víztükör, amelyben halak úsznak és vízinövények nőnek. Évekig oktatás és terápia zajlott benne –
                aztán 2018 nyarán egy ötlet lekerült a fenekére.
              </p>
            </Reveal>
          </div>
        </section>

        {/* STORY */}
        <section className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">A történet</span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Egy kilométerkő, ami a felszínig méri a távolságot
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/85">
                  <p>
                    Az ötlet Sepsiszentgyörgy főterén született. Szabó Kolos búvároktató – a tavat alapító Szabó Jenő
                    fia – a Tiltott Csíki Söröző előtt állva megakadt egy kilométerkövön, amely a csíkszentsimoni
                    sörmanufaktúráig mutatta a távolságot. Az járt a fejében: egy ilyen kő egészen jól mutatna a
                    dálnoki tó fenekén is.
                  </p>
                  <p>
                    Utánanézett, létezik-e valahol a világon víz alatti söröző. Nem talált ilyet. Megkereste a Csíki
                    Sör Manufaktúrát, akik nyitottak voltak a szokatlan felvetésre, és nem sokkal később már épült is a
                    berendezés. 2018. szeptember 2-án három méter mélyen megnyílt a búvárkocsma.
                  </p>
                  <p>
                    A saját kilométerkövük két adatot mutat: a távolságot Dálnoktól a manufaktúráig – és a métereket a
                    felszínig.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <Figure
                  src={structureAsset.url}
                  alt="Búvár a dálnoki tófenéken, a víz alatti söröző faszerkezete mellett"
                  caption="A tófenéken álló szerkezet: itt kezdődik a söröző."
                  width={1920}
                  height={1440}
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-muted/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
              <Reveal className="lg:col-span-2 lg:order-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Hogyan működik?</span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Hogyan iszik az ember sört a víz alatt?
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/85">
                  <p>
                    Ez a leggyakoribb kérdés, és van rá válasz. A bárpult sörcsapjához egy megfelelő csövet
                    csatlakoztattak, így a sör a szabályozó kivétele után egyszerűen fogyasztható. A gyakorlott
                    búvárok egy kis technikával üvegből is isznak – a fotókon látszik, hogy ez nem csak elmélet.
                  </p>
                  <p>
                    A lényeg azonban nem a mennyiség. Odalent minden lassabb: a mozdulatok, a koccintás, a nevetés,
                    amit csak a buborékokból lehet leolvasni. Ez a fajta csend és közelség az, amit a résztvevők
                    hazavisznek.
                  </p>
                </div>
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3 lg:order-1">
                <Reveal>
                  <Figure
                    src={bottleAsset.url}
                    alt="Búvár maszkban egy Berăria Subacvatică feliratú sörösüveget néz a víz alatt"
                    caption="„Berăria Subacvatică” – a víz alatti söröző saját címkéje."
                    width={1920}
                    height={1440}
                  />
                </Reveal>
                <Reveal delay={150}>
                  <Figure
                    src={toastAsset.url}
                    alt="Búvár sárga maszkban sörösüveget emel a magasba a víz alatt, mögötte faoszlopok"
                    caption="Koccintás három méter mélyen."
                    width={1824}
                    height={1596}
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* VIDEO */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Videó</span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Nézd meg, milyen odalent
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Szavakkal csak részben adható vissza. Ez a felvétel megmutatja, hogyan néz ki a söröző a tó
                  fenekéről.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150} className="mt-10">
              <YouTubeFacade id={VIDEO_ID} title="Víz alatti Tiltott Csíki Söröző – merülés a dálnoki tóban" />
            </Reveal>
          </div>
        </section>

        {/* FACTS */}
        <section className="pb-16 lg:pb-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <Figure
                  src={signAsset.url}
                  alt="Búvár egy víz alatti táblát világít meg a homályos tófenéken"
                  caption="Zavaros nap, tiszta üzenet: a táblák a tófenéken igazítanak el."
                  width={1920}
                  height={1440}
                />
              </Reveal>
              <Reveal delay={150}>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Érdekességek</span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Amit kevesen tudnak a búvárkocsmáról
                </h2>
                <ul className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/85">
                  {[
                    "A bárpult négyszáz kilogrammot nyom – a tófenékre engedése önmagában komoly búvármunka volt.",
                    "Nem csak ülni lehet a pultnál: bokszzsák is került a víz alá, és a beszámolók szerint zenét is lehet hallgatni odalent.",
                    "A dálnoki tó Románia első kifejezetten búvárkodásra létrehozott tava – az ország egyetlen ilyen létesítménye volt a megnyitáskor.",
                    "A söröző bevételének jelentős részét a tóban zajló, fogyatékkal élő gyerekeknek tartott víziterápiás foglalkozásokra fordítják.",
                    "A helyi sajtó és a Sunny Moments élményportál szerint kezdők is részt vehetnek: egy rövid felszíni felkészítés után, oktatóval együtt merülnek le.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* DETAILS / PRICE */}
        <section id="reszletek" className="relative overflow-hidden bg-gradient-deep py-20 text-white lg:py-28 scroll-mt-24">
          <Bubbles count={8} />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Részletek</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Fontos információk
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              <Reveal className="lg:col-span-1">
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-md">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Víz alatti élmény</span>
                    <p className="mt-4 text-sm text-white/70">Ár</p>
                    <p className="font-display text-5xl font-bold leading-none sm:text-6xl">{PRICE}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/75">
                      Egy főre. A pontos program és a részletek egyeztetése telefonon vagy e-mailben történik.
                    </p>
                  </div>
                  <Link
                    to="/kapcsolat"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-deep"
                  >
                    Foglalj időpontot <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
                {facts.map((f, i) => (
                  <Reveal key={f.label} delay={i * 80}>
                    <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/25">
                        <f.icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">{f.label}</p>
                        <p className="mt-1 text-sm leading-relaxed text-white/90">{f.value}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Miért érdemes?</span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  Nem a sör miatt jönnek. Miatta maradnak.
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/85">
                  <p>
                    Aki egyszer ült már a dálnoki bárpultnál, általában nem az ízre emlékszik. Arra emlékszik, ahogy
                    a felszín zöld fénye átszűrődött a víz alatt, ahogy a buddyja felmutatta az OK jelet egy üveggel
                    a kezében, és arra a pár percre, amikor semmi más nem létezett, csak a légzés ritmusa.
                  </p>
                  <p>
                    Ez a hely a búvárkodás játékos oldala – de ugyanaz a fegyelem, ugyanaz a felkészülés és ugyanaz a
                    figyelem kíséri, mint bármelyik merülésünket. Ha kíváncsi vagy, hogy néz ki a többi merülésünk,
                    nézz be a <Link to="/galeria" className="font-semibold text-primary underline-offset-4 hover:underline">galériába</Link>,
                    vagy olvasd el, <Link to="/blog/$slug" params={{ slug: "viz-alatti-sorozo-borpince-elmenymerules-erdely" }} className="font-semibold text-primary underline-offset-4 hover:underline">milyen egy élménymerülés a tófenéken</Link>.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <Figure
                  src={crateAsset.url}
                  alt="Palackokkal teli rekesz a dálnoki tófenéken, mellette búvár uszonya"
                  caption="A rekesz a tófenéken – a felszín innen alig három méter."
                  width={1824}
                  height={1026}
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl shadow-deep">
                <img
                  src={surfaceAsset.url}
                  alt="Két búvár teljes felszerelésben a dálnoki tó stégén, napsütésben"
                  width={1824}
                  height={1026}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-deep/95 via-deep/80 to-deep/40" />
                <div className="relative grid gap-8 px-8 py-14 text-white sm:px-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-16 lg:py-20">
                  <div className="max-w-xl">
                    <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                      Készen állsz a legfurcsább koccintásodra?
                    </h2>
                    <p className="mt-4 text-lg text-white/80">
                      Hívj vagy írj, és egyeztetjük az időpontot. Ha még sosem merültél, a{" "}
                      <Link to="/szolgaltatasok/$slug" params={{ slug: "elmenymerules" }} className="font-semibold text-white underline underline-offset-4">
                        Try Scuba élménymerülés
                      </Link>{" "}
                      a legjobb első lépés; ha komolyabban érdekel, a{" "}
                      <Link to="/szolgaltatasok/naui-tanfolyam" className="font-semibold text-white underline underline-offset-4">
                        NAUI tanfolyamok
                      </Link>{" "}
                      várnak.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <Link
                      to="/kapcsolat"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary shadow-glow transition-all hover:-translate-y-0.5"
                    >
                      Kapcsolat <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <a
                      href="tel:+40755011497"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" /> +40 755 011 497
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SOURCES */}
        <section className="border-t border-border py-10">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Információforrások</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                { href: "https://www.3szek.ro/load/cikk/116287/viz-alatti-buvarkocsma-dalnokon", label: "Háromszék – Víz alatti búvárkocsma Dálnokon (2018. szeptember 5.)" },
                { href: "https://maszol.ro/belfold/101523-viz-alatti-soroz-nyilt-a-haromszeki-dalnokon-lev-buvartoban", label: "Maszol – Víz alatti söröző nyílt a háromszéki Dálnokon lévő búvártóban (2018. szeptember 10.)" },
                { href: "https://sunnymoments.ro/levegot-be-merulunk-es-sorozunk", label: "Sunny Moments – Levegőt be, merülünk és sörözünk!" },
              ].map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-primary hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              A cikk a fenti nyilvános forrásokból ellenőrzött tényekre és a saját merüléseink tapasztalatára épül. A
              fotók a Búvárkodás Erdély saját felvételei.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
