import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Bubbles } from "@/components/site/Bubbles";

export const Route = createFileRoute("/kapcsolat")({
  head: () => ({
    meta: [
      { title: "Kapcsolat — Búvárkodás Erdély" },
      { name: "description", content: "Vedd fel velünk a kapcsolatot. Telefon: +40 755 011 497 — Email: infomylake@gmail.com" },
      { property: "og:title", content: "Kapcsolat — Búvárkodás Erdély" },
      { property: "og:description", content: "Telefon és email — bejelentkezés merülésre, tanfolyamra, kalandprogramra." },
      { property: "og:url", content: "/kapcsolat" },
    ],
    links: [{ rel: "canonical", href: "/kapcsolat" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Búvárkodás Erdély",
          telephone: "+40755011497",
          email: "infomylake@gmail.com",
          areaServed: "Erdély",
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="relative min-h-screen bg-surface text-surface-foreground pt-32 pb-24 lg:pt-44 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-deep" />
      <Bubbles count={14} />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">Kapcsolat</span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-balance">
              Beszéljünk a <span className="text-secondary">következő</span> merülésedről.
            </h1>
            <p className="mt-6 text-lg text-surface-foreground/80 leading-relaxed max-w-lg">
              Egy hívás vagy egy email — és máris elindulhat a kalandod. Visszahívunk és összeállítjuk a számodra ideális programot.
            </p>

            <div className="mt-10 hidden lg:flex items-center gap-2 text-secondary">
              <Clock className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold">Hétfő – Vasárnap</span>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-5">
              <a
                href="tel:+40755011497"
                className="group flex items-center gap-5 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 hover:border-secondary/40 transition-all"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-surface group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-surface-foreground/60">Telefon</div>
                  <div className="mt-1 font-display text-2xl font-bold">+40 755 011 497</div>
                </div>
              </a>

              <a
                href="mailto:infomylake@gmail.com"
                className="group flex items-center gap-5 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 hover:border-secondary/40 transition-all"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-surface group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-[0.2em] text-surface-foreground/60">Email</div>
                  <div className="mt-1 font-display text-xl sm:text-2xl font-bold break-all">infomylake@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-5 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-secondary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-surface-foreground/60">Helyszín</div>
                  <div className="mt-1 font-display text-xl font-bold">Erdély, Románia</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
