import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects, projectFilters } from "@/data/portfolioData";
import { Section, SectionHeading } from "./Reveal";

type Project = (typeof projects)[number];

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <article className="glass card-hover group flex h-full flex-col overflow-hidden rounded-2xl animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-500"
      style={{ animationDelay: `${index * 70}ms` }}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={p.image} alt={`${p.title} preview`} loading="lazy" width={1024} height={640} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
        <p className="mt-3 text-sm"><span className="font-semibold text-accent">Problem: </span><span className="text-muted-foreground">{p.problem}</span></p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => <li key={t} className="rounded-md bg-primary/15 px-2.5 py-1 text-xs text-primary-foreground/90">{t}</li>)}
        </ul>
        <div className="mt-auto flex gap-3 pt-6">
          <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border px-4 py-2 text-sm font-semibold transition hover:bg-secondary">
            <Github className="h-4 w-4" /> GitHub
          </a>
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground">
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter));
  return (
    <Section id="projects">
      <SectionHeading eyebrow="Projects" title="Selected analysis work" subtitle="Dashboards, deep-dives and data stories built from real-world datasets." />
      <div role="tablist" aria-label="Filter projects" className="mb-10 flex flex-wrap justify-center gap-2">
        {projectFilters.map((f) => (
          <button key={f} role="tab" aria-selected={filter === f} onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${filter === f ? "bg-gradient-brand text-primary-foreground shadow-glow" : "glass text-muted-foreground hover:text-foreground"}`}>
            {f}
          </button>
        ))}
      </div>
      <div key={filter} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
      </div>
      {list.length === 0 && <p className="text-center text-muted-foreground">No projects in this category yet.</p>}
    </Section>
  );
}
