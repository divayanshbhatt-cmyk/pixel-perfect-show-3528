import { BarChart3, PieChart, Database, Code2, Wrench } from "lucide-react";
import { skillGroups } from "@/data/portfolioData";
import { Reveal, Section, SectionHeading } from "./Reveal";

const icons = { BarChart3, PieChart, Database, Code2, Wrench };

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Skills" title="My analytics toolkit" subtitle="The tools and techniques I use to collect, clean, analyse and present data." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.icon];
          return (
            <Reveal key={g.title} delay={i * 80} className={i === 0 ? "lg:row-span-2" : ""}>
              <div className="glass card-hover h-full rounded-2xl p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground"><Icon className="h-5 w-5" /></span>
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <li key={s} className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-sm transition hover:border-accent/60 hover:text-accent">{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
