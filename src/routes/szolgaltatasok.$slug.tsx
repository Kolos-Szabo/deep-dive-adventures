import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import { services } from "./szolgaltatasok.index";
import { Reveal } from "@/components/site/Reveal";
import { Bubbles } from "@/components/site/Bubbles";

export const Route = createFileRoute("/szolgaltatasok/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — Búvárkodás Erdély` },
          { name: "description", content: loaderData.service.short },
          { property: "og:title", content: loaderData.service.title },
          { property: "og:description", content: loaderData.service.short },
          { property: "og:type", content: "article" },
          { property: "og:image", content: loaderData.service.img },
          { property: "og:url", content: `/szolgaltatasok/${loaderData.service.slug}` },
        ]
      : [],
    links: loaderData
      ? [{ rel: "canonical", href: `/szolgaltatasok/${loaderData.service.slug}` }]
      : [],
  }),
  notFoundComponent: () => (
    <div className="pt-40 pb-32 text-center px-5">
      <h1 className="font-display text-4xl font-bold">Szolgáltatás nem található</h1>
      <Link to="/szolgaltatasok" className="mt-6 inline-flex items-center gap-2 text-primary">
        <ArrowLeft className="h-4 w-4" /> Vissza
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="pt-40 pb-32 text-center px-5">
      <h1 className="font-display text-3xl font-bold">Hiba</h1>
      <p className="mt-4 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
        <img src={service.img} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/80 to-deep/95" />
        <Bubbles count={10} />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8 text-white">
          <Link to="/szolgaltatasok" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> Szolgáltatások
          </Link>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-balance">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed">{service.short}</p>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 grid lg:grid-cols-3 gap-12">
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-3xl font-bold tracking-tight">A programról</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{service.long}</p>

            <h3 className="mt-12 font-display text-xl font-semibold">Mit kapsz?</h3>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((b: string) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-1">
            <div className="sticky top-28 rounded-2xl bg-gradient-deep p-8 text-surface-foreground shadow-deep">
              <h3 className="font-display text-xl font-bold">Érdekel?</h3>
              <p className="mt-3 text-sm text-surface-foreground/80">Vedd fel velünk a kapcsolatot és személyre szabjuk a programot.</p>
              <a href="tel:+40755011497" className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-surface w-full justify-center">
                <Phone className="h-4 w-4" /> Hívj most
              </a>
              <Link to="/kapcsolat" className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold w-full justify-center hover:bg-white/5 transition-colors">
                Írj nekünk <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/arak" className="mt-4 inline-flex w-full justify-center text-sm font-semibold text-secondary underline underline-offset-4 hover:text-white transition-colors">
                Árak megtekintése
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
