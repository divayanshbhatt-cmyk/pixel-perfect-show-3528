import { useState, type FormEvent } from "react";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { personal, socials } from "@/data/portfolioData";
import { contactSchema, sendContactMessage } from "@/lib/contact.functions";
import { Reveal, Section, SectionHeading } from "./Reveal";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "subject", label: "Subject", type: "text" },
] as const;

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export function Contact() {
  const send = useServerFn(sendContactMessage);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = contactSchema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      const errs: Errors = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as keyof Errors] ??= i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try { await send({ data: parsed.data }); setStatus("success"); form.reset(); }
    catch { setStatus("error"); }
  }

  const info = [
    { Icon: Mail, label: "Email", value: personal.email, href: socials.email },
    { Icon: Linkedin, label: "LinkedIn", value: "[LINKEDIN URL]", href: socials.linkedin },
    { Icon: Github, label: "GitHub", value: "[GITHUB URL]", href: socials.github },
    { Icon: MapPin, label: "Location", value: personal.location },
  ];
  const input = "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm placeholder:text-muted-foreground/60 transition focus:border-primary focus:outline-none";

  return (
    <Section id="contact">
      <SectionHeading eyebrow="Contact" title="Let's Work Together" />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="text-muted-foreground">Have a dataset that needs answers, a dashboard to build or an opportunity to discuss? I'd love to hear from you.</p>
          <ul className="mt-8 space-y-4">
            {info.map(({ Icon, label, value, href }) => (
              <li key={label} className="glass flex items-center gap-4 rounded-2xl p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground"><Icon className="h-5 w-5" /></span>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{label}</p>
                  {href ? <a href={href} className="block truncate font-medium hover:text-accent">{value}</a> : <p className="truncate font-medium">{value}</p>}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <form onSubmit={onSubmit} noValidate className="glass space-y-5 rounded-2xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.name} className={f.name === "subject" ? "sm:col-span-2" : ""}>
                  <label htmlFor={f.name} className="mb-2 block text-sm font-medium">{f.label}</label>
                  <input id={f.name} name={f.name} type={f.type} className={input} aria-invalid={!!errors[f.name]} aria-describedby={errors[f.name] ? `${f.name}-err` : undefined} />
                  {errors[f.name] && <p id={`${f.name}-err`} className="mt-1.5 text-xs text-destructive">{errors[f.name]}</p>}
                </div>
              ))}
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows={5} className={input} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
              {errors.message && <p id="message-err" className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button type="submit" disabled={status === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow transition hover:brightness-110 disabled:opacity-60">
              {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />} Send Message
            </button>
            <div aria-live="polite">
              {status === "success" && <p className="flex items-center gap-2 text-sm text-success"><CheckCircle2 className="h-4 w-4" /> Thanks! Your message has been sent.</p>}
              {status === "error" && <p className="flex items-center gap-2 text-sm text-destructive"><AlertCircle className="h-4 w-4" /> Something went wrong. Please try again.</p>}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
