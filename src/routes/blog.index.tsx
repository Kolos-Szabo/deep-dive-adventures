import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { blogPosts, formatDate } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Búvárkodás Erdély | Búvár tippek, NAUI tanfolyam, élmények" },
      {
        name: "description",
        content:
          "Búvárkodás Romániában — tippek, élménybeszámolók, NAUI tanfolyam útmutatók és biztonsági ismeretek a Búvárkodás Erdély oktatóitól.",
      },
      { name: "keywords", content: "búvárkodás Romániában, búvár blog, NAUI tanfolyam, scuba Erdély, diving Transilvania" },
      { property: "og:title", content: "Blog — Búvárkodás Erdély" },
      {
        property: "og:description",
        content: "Útmutatók, élmények és szakmai tippek a búvárkodás világából.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { property: "og:image", content: blogPosts[0]?.cover },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Búvárkodás Erdély Blog",
          url: "/blog",
          blogPost: blogPosts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            datePublished: p.date,
            url: `/blog/${p.slug}`,
            image: p.cover,
          })),
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const [featured, ...rest] = sortedPosts;
  return (
    <>
      <section className="relative bg-surface text-surface-foreground pt-32 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-deep" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
              Blog
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-balance max-w-4xl">
              Történetek a <span className="text-secondary">mélyből</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-surface-foreground/80 leading-relaxed">
              Útmutatók, élménybeszámolók és szakmai tippek a búvárkodás világából — közvetlenül a Búvárkodás Erdély NAUI oktatóitól.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {featured && (
            <Reveal>
              <Link
                to="/blog/$slug"
                params={{ slug: featured.slug }}
                className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl overflow-hidden bg-card shadow-sm hover:shadow-deep transition-shadow"
              >
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
                  <img
                    src={featured.cover}
                    alt={featured.coverAlt}
                    loading="eager"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
                    <span className="text-secondary">Kiemelt</span>
                    <span className="text-muted-foreground">{featured.category}</span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-balance group-hover:text-primary transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" /> {formatDate(featured.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" /> {featured.readingMinutes} perc
                    </span>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">
                    Olvasd el <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {rest.length > 0 && (
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function BlogCard({ post, index }: { post: (typeof blogPosts)[number]; index: number }) {
  return (
    <Reveal delay={index * 80}>
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="group block h-full overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-deep transition-shadow"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={post.cover}
            alt={post.coverAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            {post.category}
          </span>
          <h3 className="mt-3 font-display text-xl font-bold leading-snug tracking-tight group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {post.readingMinutes} perc
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
