import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolioData";
import { Section, SectionHeading } from "./Reveal";
import { Timeline } from "./Timeline";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Academic journey" />
      <Timeline
        items={education.map((e, i) => ({
          key: `${e.degree}-${i}`,
          icon: <GraduationCap className="h-4 w-4" />,
          content: (
            <>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">{e.duration}</p>
              <h3 className="mt-2 text-xl font-semibold">{e.degree}</h3>
              <p className="text-muted-foreground">{e.institution}</p>
              <p className="mt-4 text-sm font-medium">Relevant coursework</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {e.coursework.map((c) => <li key={c} className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground">{c}</li>)}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">{e.achievements}</p>
            </>
          ),
        }))}
      />
    </Section>
  );
}
