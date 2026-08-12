import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, Clock, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Bubbles } from "@/components/site/Bubbles";
import { blogPosts, formatDate, getPostBySlug, type BlogPost } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): { post: BlogPost } => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Blog | Búvárkodás Erdély` },
          { name: "description", content: loaderData.post.description },
          { name: "keywords", content: loaderData.post.keywords },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.description },
          { property: "og:type", content: "article" },
          { property: "og:image", content: loaderData.post.cover },
          { property: "og:url", content: `/blog/${params.slug}` },
          { property: "article:published_time", content: loaderData.post.date },
          { property: "article:section", content: loaderData.post.category },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:image", content: loaderData.post.cover },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/blog/${params.slug}` }] : [],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: loaderData.post.title,
              description: loaderData.post.description,
              image: loaderData.post.cover,
              datePublished: loaderData.post.date,
              dateModified: loaderData.post.date,
              keywords: loaderData.post.keywords,
              articleSection: loaderData.post.category,
              author: { "@type": "Organization", name: "Búvárkodás Erdély" },
              publisher: { "@type": "Organization", name: "Búvárkodás Erdély" },
              mainEntityOfPage: { "@type": "WebPage", "@id": `/blog/${params.slug}` },
            }),
          },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="pt-40 pb-32 text-center px-5">
      <h1 className="font-display text-4xl font-bold">Bejegyzés nem található</h1>
      <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary">
        <ArrowLeft className="h-4 w-4" /> Vissza a bloghoz
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="pt-40 pb-32 text-center px-5">
      <h1 className="font-display text-3xl font-bold">Hiba</h1>
      <p className="mt-4 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: BlogDetail,
});

function BlogDetail() {
  const { post } = Route.useLoaderData() as { post: BlogPost };
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <img src={post.cover} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/85 to-deep/95" />
        <Bubbles count={10} />
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8 text-white">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> Blog
          </Link>
          <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            <span>{post.category}</span>
            {post.tags.map((t) => (
              <span key={t} className="text-white/60">#{t}</span>
            ))}
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-balance">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-5 text-sm text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readingMinutes} perc olvasás
            </span>
          </div>
        </div>
      </section>

      <article className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <p className="text-xl leading-relaxed text-foreground/85 font-medium">{post.excerpt}</p>
          </Reveal>

          <div className="mt-12 space-y-6 prose-content">
            {post.sections.map((s, i) => {
              if (s.type === "p") {
                return (
                  <p key={i} className="text-lg leading-relaxed text-foreground/85">
                    {s.text}
                  </p>
                );
              }
              if (s.type === "h2") {
                return (
                  <h2 key={i} className="mt-12 font-display text-3xl font-bold tracking-tight text-balance">
                    {s.text}
                  </h2>
                );
              }
              if (s.type === "h3") {
                return (
                  <h3 key={i} className="mt-8 font-display text-xl font-semibold tracking-tight">
                    {s.text}
                  </h3>
                );
              }
              if (s.type === "ul") {
                return (
                  <ul key={i} className="space-y-2 pl-5 list-disc marker:text-primary text-foreground/85">
                    {s.items.map((it, j) => (
                      <li key={j} className="leading-relaxed">
                        {it}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (s.type === "quote") {
                return (
                  <blockquote key={i} className="border-l-4 border-secondary pl-6 my-8 italic text-xl text-foreground/90">
                    “{s.text}”
                  </blockquote>
                );
              }
              if (s.type === "img") {
                return (
                  <figure key={i} className="my-10">
                    <img
                      src={s.src}
                      alt={s.alt}
                      loading="lazy"
                      className="w-full rounded-2xl shadow-deep"
                    />
                    {s.caption && (
                      <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
                        {s.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (s.type === "links") {
                return (
                  <aside key={i} className="my-10 rounded-2xl border border-border bg-muted/60 p-6">
                    {s.title && (
                      <h3 className="font-display text-lg font-semibold tracking-tight">{s.title}</h3>
                    )}
                    <ul className="mt-4 space-y-2">
                      {s.items.map((l, j) => (
                        <li key={j} className="leading-relaxed text-foreground/85">
                          <Link
                            to={l.to}
                            className="font-semibold text-primary underline decoration-secondary underline-offset-4 hover:text-secondary"
                          >
                            {l.label}
                          </Link>
                          {l.note && <span className="text-muted-foreground"> — {l.note}</span>}
                        </li>
                      ))}
                    </ul>
                  </aside>
                );
              }
              return null;

            })}
          </div>

          {/* Internal links / CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-deep p-8 text-surface-foreground shadow-deep">
            <h3 className="font-display text-2xl font-bold">Készen állsz a következő lépésre?</h3>
            <p className="mt-3 text-surface-foreground/80">
              Ismerd meg <Link to="/szolgaltatasok/naui-tanfolyam" className="underline decoration-secondary underline-offset-4 hover:text-secondary">NAUI búvártanfolyamunkat</Link>, böngészd a <Link to="/szolgaltatasok" className="underline decoration-secondary underline-offset-4 hover:text-secondary">szolgáltatásokat</Link>, vagy vedd fel velünk a <Link to="/kapcsolat" className="underline decoration-secondary underline-offset-4 hover:text-secondary">kapcsolatot</Link>.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+40755011497" className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-surface">
                <Phone className="h-4 w-4" /> +40 755 011 497
              </a>
              <Link to="/kapcsolat" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/5 transition-colors">
                Írj nekünk <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-muted py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="font-display text-3xl font-bold tracking-tight">További olvasnivaló</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group block overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-deep transition-shadow"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={p.cover} alt={p.coverAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{p.category}</span>
                    <h3 className="mt-2 font-display text-xl font-bold leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
