import { Github, Linkedin, Mail, Database } from "lucide-react";
import { socials } from "@/data/portfolioData";

const items = [
  { href: socials.github, label: "GitHub", Icon: Github },
  { href: socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: socials.email, label: "Email", Icon: Mail },
  { href: socials.kaggle, label: "Kaggle", Icon: Database },
];

export function SocialLinks({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  return (
    <ul className="flex items-center gap-3">
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className={`glass grid ${box} place-items-center rounded-xl text-muted-foreground transition hover:-translate-y-0.5 hover:text-foreground hover:shadow-glow`}
          >
            <Icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
