import { Award, ExternalLink } from "lucide-react";
import { achievements } from "@/data/portfolioData";
import { Reveal, Section, SectionHeading } from "./Reveal";

type Item = (typeof achievements)[number];

function AchievementCard({ a }: { a: Item }) {
  return (
    <article className="glass card-hover flex h-full flex-col rounded-2xl p-6">
      <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary"><Award className="h-6 w-6" /></span>
      <h3 className="text-lg font-semibold">{a.title}</h3>
      <p className="mt-1 text-sm text-accent">{a.org} · {a.date}</p>
      <p className="mt-3 flex-1 text-sm text-muted-foreground">{a.description}</p>
      {a.link && (
        <a href={a.link} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold hover:text-accent">
          View Certificate <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </article>
  );
}

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading eyebrow="Achievements" title="Certifications & recognition" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => <Reveal key={i} delay={i * 100}><AchievementCard a={a} /></Reveal>)}
      </div>
    </Section>
  );
}
