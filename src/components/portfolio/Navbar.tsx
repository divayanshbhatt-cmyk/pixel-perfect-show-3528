import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, personal } from "@/data/portfolioData";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.toLowerCase());
      if (el) io.observe(el);
    });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "glass border-x-0 border-t-0" : "border-b border-transparent"}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-brand font-display text-sm font-bold text-primary-foreground">{personal.initials}</span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-sm font-bold">{personal.name}</span>
            <span className="block text-xs text-muted-foreground">{personal.title}</span>
          </span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => {
            const id = n.toLowerCase();
            const isActive = active === id;
            return (
              <li key={n}>
                <a href={`#${id}`} aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm transition ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                  {n}
                  <span className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-brand transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`} />
                </a>
              </li>
            );
          })}
        </ul>
        <button className="glass grid h-10 w-10 place-items-center rounded-xl lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <div className={`grid overflow-hidden transition-all duration-300 lg:hidden ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <ul className="min-h-0 px-4 pb-2">
          {navItems.map((n) => {
            const id = n.toLowerCase();
            return (
              <li key={n}>
                <a href={`#${id}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}
                  className={`block rounded-lg px-3 py-3 text-sm ${active === id ? "bg-secondary text-foreground" : "text-muted-foreground"}`}>{n}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
