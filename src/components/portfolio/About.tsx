import { useEffect, useState } from "react";
import { Download, Lightbulb, LineChart, Target, Puzzle } from "lucide-react";
import { about, personal } from "@/data/portfolioData";
import { Reveal, Section, SectionHeading, useInView } from "./Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0; const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1200, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const traits = [
  { Icon: Lightbulb, label: "Analytical thinking" },
  { Icon: LineChart, label: "Data visualization" },
  { Icon: Target, label: "Business insights" },
  { Icon: Puzzle, label: "Problem solving" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About me" title="Finding the story in the numbers" />
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal className="space-y-5 text-muted-foreground">
          {about.paragraphs.map((p, i) => <p key={i} className="leading-relaxed">{p}</p>)}
          <ul className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
            {traits.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-foreground"><Icon className="h-5 w-5 shrink-0 text-accent" />{label}</li>
            ))}
          </ul>
          <a href={personal.resumeUrl} className="mt-4 inline-flex items-center gap-2 rounded-xl border border-primary/50 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-primary/15">
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {about.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="glass card-hover h-full rounded-2xl p-6">
                <p className="font-display text-4xl font-bold text-gradient"><Counter value={s.value} suffix={s.suffix} /></p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
