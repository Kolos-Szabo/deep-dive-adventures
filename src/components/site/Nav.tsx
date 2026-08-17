import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoAsset from "@/assets/buvarkodas-erdely-logo.png.asset.json";
import { blogPosts, formatDate } from "@/lib/blog-posts";

const links = [
  { to: "/", label: "Főoldal", hasDropdown: false },
  { to: "/rolunk", label: "Rólunk", hasDropdown: false },
  { to: "/csapatunk", label: "Ki vigyáz rám a víz alatt?", hasDropdown: false },
  { to: "/szolgaltatasok", label: "Szolgáltatások", hasDropdown: false },
  { to: "/galeria", label: "Galéria", hasDropdown: false },
  { to: "/blog", label: "Blog", hasDropdown: true },
  { to: "/biztonsag", label: "Biztonság", hasDropdown: false },
  { to: "/kapcsolat", label: "Kapcsolat", hasDropdown: false },
] as const;

const LATEST_POST_COUNT = 3;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [blogOpenMobile, setBlogOpenMobile] = useState(false);

  const latestPosts = useMemo(
    () =>
      [...blogPosts]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, LATEST_POST_COUNT),
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logoAsset.url} alt="Búvárkodás Erdély logó" width={56} height={56} className="h-14 w-14 object-contain transition-transform group-hover:scale-110" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold tracking-tight text-primary uppercase">Búvárkodás</span>
            <span className="font-display text-sm font-semibold tracking-[0.25em] text-secondary uppercase">Erdély</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) =>
            l.hasDropdown ? (
              <div key={l.to} className="relative group">
                <Link
                  to={l.to}
                  className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    scrolled
                      ? "text-foreground/80 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                  activeProps={{
                    className: scrolled ? "text-primary" : "text-white",
                  }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:rotate-180" />
                </Link>

                <div
                  className="absolute top-full left-0 mt-2 w-80 rounded-xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-deep opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50"
                  aria-label="Legfrissebb blogbejegyzések"
                >
                  {latestPosts.map((post) => (
                    <Link
                      key={post.slug}
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      <span className="font-semibold line-clamp-1">{post.title}</span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {formatDate(post.date)} · {post.readingMinutes} perc
                      </span>
                    </Link>
                  ))}
                  <Link
                    to="/blog"
                    className="block border-t border-border px-4 py-2.5 text-xs font-semibold text-primary hover:bg-muted transition-colors"
                  >
                    Összes cikk
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  scrolled
                    ? "text-foreground/80 hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
                activeProps={{
                  className: scrolled ? "text-primary" : "text-white",
                }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            to="/kapcsolat"
            className={`ml-4 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-glow transition-all ${
              scrolled
                ? "bg-gradient-ocean text-white hover:shadow-deep hover:-translate-y-0.5"
                : "bg-white text-primary hover:shadow-lg hover:-translate-y-0.5"
            }`}
          >
            Foglalj merülést
          </Link>
        </nav>

        <button
          className={`lg:hidden p-2 transition-colors ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {links.map((l) => (
              <div key={l.to}>
                <div className="flex items-center justify-between">
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="flex-1 px-3 py-3 text-base font-medium text-foreground/90 hover:text-primary rounded-md"
                    activeProps={{ className: "text-primary bg-muted" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                  {l.hasDropdown && (
                    <button
                      onClick={() => setBlogOpenMobile((s) => !s)}
                      className="px-3 py-3 text-foreground/70 hover:text-primary rounded-md"
                      aria-label="Blog almenü"
                      aria-expanded={blogOpenMobile}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          blogOpenMobile ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {l.hasDropdown && blogOpenMobile && (
                  <div className="mt-1 space-y-1 border-l border-border/60 pl-4">
                    {latestPosts.map((post) => (
                      <Link
                        key={post.slug}
                        to="/blog/$slug"
                        params={{ slug: post.slug }}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 text-sm text-foreground/80 hover:text-primary rounded-md"
                      >
                        {post.title}
                      </Link>
                    ))}
                    <Link
                      to="/blog"
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 text-sm font-semibold text-primary rounded-md"
                    >
                      Összes cikk
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
