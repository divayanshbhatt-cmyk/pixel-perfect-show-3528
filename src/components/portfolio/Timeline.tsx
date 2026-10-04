import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Timeline({ items }: { items: { key: string; icon: ReactNode; content: ReactNode }[] }) {
  return (
    <ol className="relative mx-auto max-w-3xl border-l border-border pl-8 sm:pl-10">
      <span aria-hidden className="absolute -left-px top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent" />
      {items.map((it, i) => (
        <li key={it.key} className="relative mb-10 last:mb-0">
          <span className="absolute -left-[3.05rem] top-5 grid h-9 w-9 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow sm:-left-[3.55rem]">{it.icon}</span>
          <Reveal delay={i * 120}>
            <div className="glass card-hover rounded-2xl p-6">{it.content}</div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
