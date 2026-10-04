import { ArrowUp } from "lucide-react";
import { navItems, personal } from "@/data/portfolioData";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.5fr_1fr_auto]">
        <div>
          <p className="font-display text-lg font-bold">{personal.name}</p>
          <p className="text-sm text-accent">{personal.title}</p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">Turning data into decisions through analysis, visualization and clear storytelling.</p>
          <div className="mt-5"><SocialLinks size="sm" /></div>
        </div>
        <nav aria-label="Footer">
          <p className="mb-3 text-sm font-semibold">Quick links</p>
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {navItems.map((n) => <li key={n}><a href={`#${n.toLowerCase()}`} className="hover:text-foreground">{n}</a></li>)}
          </ul>
        </nav>
        <a href="#home" aria-label="Back to top" className="glass grid h-12 w-12 place-items-center self-start rounded-xl transition hover:-translate-y-1 hover:shadow-glow">
          <ArrowUp className="h-5 w-5" />
        </a>
      </div>
      <p className="mx-auto mt-10 max-w-6xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {personal.name}. All Rights Reserved.
      </p>
    </footer>
  );
}
