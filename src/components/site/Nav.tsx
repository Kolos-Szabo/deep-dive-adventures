import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/buvarkodas-erdely-logo.png.asset.json";

const links = [
  { to: "/", label: "Főoldal" },
  { to: "/rolunk", label: "Rólunk" },
  { to: "/szolgaltatasok", label: "Szolgáltatások" },
  { to: "/galeria", label: "Galéria" },
  { to: "/biztonsag", label: "Biztonság" },
  { to: "/kapcsolat", label: "Kapcsolat" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          <img src={logoAsset.url} alt="Búvárkodás Erdély logó" width={44} height={44} className="h-11 w-11 object-contain transition-transform group-hover:scale-110" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-extrabold tracking-tight text-primary uppercase">Búvárkodás</span>
            <span className="font-display text-xs font-semibold tracking-[0.3em] text-secondary uppercase">Erdély</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/kapcsolat"
            className="ml-4 inline-flex items-center justify-center rounded-full bg-gradient-ocean px-5 py-2.5 text-sm font-semibold text-white shadow-glow hover:shadow-deep hover:-translate-y-0.5 transition-all"
          >
            Foglalj merülést
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 text-foreground"
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
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base font-medium text-foreground/90 hover:text-primary rounded-md"
                activeProps={{ className: "text-primary bg-muted" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
