import { ArrowRight, Mail } from "lucide-react";
import { personal } from "@/data/portfolioData";
import { SocialLinks } from "./SocialLinks";

const particles = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 53) % 100}%`,
  size: 2 + (i % 3),
  duration: 14 + (i % 6) * 3,
  delay: -(i * 1.7),
}));

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 pb-16 sm:px-6">
      {/* Animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="hero-grid absolute inset-0" />
        <div className="animate-blob absolute -top-20 left-[10%] h-72 w-72 rounded-full bg-primary/25 blur-3xl sm:h-96 sm:w-96" />
        <div className="animate-blob absolute top-1/3 right-[5%] h-72 w-72 rounded-full bg-accent/20 blur-3xl [animation-delay:-6s]" />
        <div className="animate-blob absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-pink/15 blur-3xl [animation-delay:-12s]" />
        {particles.map((p, i) => (
          <span key={i} className="animate-rise absolute bottom-0 rounded-full bg-accent"
            style={{ left: p.left, width: p.size, height: p.size, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }} />
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-success" /></span>
            Available for Opportunities
          </span>
          <h1 className="mt-6 text-lg font-medium text-muted-foreground sm:text-xl">Hi, I'm <span className="text-foreground">{personal.name}</span></h1>
          <p className="mt-2 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"><span className="text-gradient">{personal.title}</span></p>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">{personal.tagline}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:brightness-110">
              View My Projects <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="glass inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition hover:bg-secondary">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </div>
          <div className="mt-8 flex justify-center lg:justify-start"><SocialLinks /></div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="animate-float relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-brand opacity-30 blur-2xl" />
            <div className="relative rounded-full bg-gradient-brand p-1 shadow-glow">
              <div className="grid h-52 w-52 place-items-center overflow-hidden rounded-full bg-card sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                {personal.photo ? (
                  <img src={personal.photo} alt={`Portrait of ${personal.name}`} className="h-full w-full object-cover" />
                ) : (
                  <div role="img" aria-label="Profile photo placeholder" className="text-center">
                    <span className="font-display text-6xl font-bold text-gradient sm:text-7xl">{personal.initials}</span>
                    <span className="mt-2 block text-xs text-muted-foreground">[PROFILE PHOTO]</span>
                  </div>
                )}
              </div>
            </div>
            <div className="glass absolute -right-2 bottom-6 rounded-xl px-3 py-2 text-xs sm:-right-8"><span className="font-bold text-accent">SQL</span> · Python · BI</div>
          </div>
        </div>
      </div>
    </section>
  );
}
