import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/portfolioData";
import { Section, SectionHeading } from "./Reveal";
import { Timeline } from "./Timeline";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Where I've applied my skills" subtitle="Internships, freelance and academic work." />
      {experience.length === 0 ? (
        <p className="glass mx-auto max-w-xl rounded-2xl p-8 text-center text-muted-foreground">Experience coming soon — open to internships and freelance projects.</p>
      ) : (
        <Timeline
          items={experience.map((x, i) => ({
            key: `${x.role}-${i}`,
            icon: <Briefcase className="h-4 w-4" />,
            content: (
              <>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">{x.duration}</p>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs">{x.type}</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold">{x.role}</h3>
                <p className="flex flex-wrap items-center gap-x-3 text-muted-foreground">{x.company}<span className="inline-flex items-center gap-1 text-sm"><MapPin className="h-3.5 w-3.5" />{x.location}</span></p>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground marker:text-primary">
                  {x.responsibilities.map((r, j) => <li key={j}>{r}</li>)}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {x.tools.map((t) => <li key={t} className="rounded-md bg-secondary px-2.5 py-1 text-xs">{t}</li>)}
                </ul>
              </>
            ),
          }))}
        />
      )}
    </Section>
  );
}
