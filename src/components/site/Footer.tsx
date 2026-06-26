import { Link } from "@tanstack/react-router";
import { Phone, Mail, Waves } from "lucide-react";
import logoAsset from "@/assets/buvarkodas-erdely-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="relative bg-surface text-surface-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-deep opacity-80" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="" width={72} height={72} className="h-[4.5rem] w-[4.5rem] object-contain" />
              <div>
                <div className="font-display text-xl font-extrabold tracking-tight uppercase">Búvárkodás</div>
                <div className="font-display text-sm font-semibold tracking-[0.25em] text-secondary uppercase">Erdély</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm text-surface-foreground/70 leading-relaxed">
              NAUI búvártanfolyamok, élménymerülések és kalandprogramok Erdély szívében. Fedezd fel a mélységet — biztonságosan, szakértő oktatókkal.
            </p>
            <div className="mt-6 flex items-center gap-2 text-secondary">
              <Waves className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold">Dive deeper</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-4">Menü</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/rolunk" className="hover:text-secondary transition-colors">Rólunk</Link></li>
              <li><Link to="/szolgaltatasok" className="hover:text-secondary transition-colors">Szolgáltatások</Link></li>
              <li><Link to="/galeria" className="hover:text-secondary transition-colors">Galéria</Link></li>
              <li><Link to="/biztonsag" className="hover:text-secondary transition-colors">Biztonság</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-4">Kapcsolat</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+40755011497" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <Phone className="h-4 w-4" /> +40 755 011 497
                </a>
              </li>
              <li>
                <a href="mailto:infomylake@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <Mail className="h-4 w-4" /> infomylake@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-surface-foreground/60">
          <p>© {new Date().getFullYear()} Búvárkodás Erdély. Minden jog fenntartva.</p>
          <p>NAUI hivatalos oktatási rendszer</p>
        </div>
      </div>
    </footer>
  );
}
