import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { BlurFade } from "./ui/blur-fade";
import { highlight } from "../lib/highlight";
import type { journey } from "../lib/data";

type Role = (typeof journey)["roles"][number];

export default function ExperienceAccordion({ roles }: { roles: Role[] }) {
  return (
    <Accordion className="w-full">
      {roles.map((role, i) => (
        <BlurFade key={role.org} inView delay={i * 0.06} duration={0.7} offset={8} blur="4px">
          <AccordionItem value={role.org} className="w-full border-border py-3">
            <AccordionTrigger className="group hover:no-underline">
              <div className="min-w-0 flex-1 text-left">
                <div className="font-display text-lg text-foreground">{role.title}</div>
                <div className="text-sm text-muted-foreground">
                  <span className="text-primary">{role.org}</span>
                  <span className="text-muted-foreground"> | </span>
                  <span className="font-body text-xs tracking-wide">{role.period}</span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="prose-measure pl-0 text-sm leading-relaxed text-muted-foreground">
              <span dangerouslySetInnerHTML={{ __html: highlight(role.description) }} />
            </AccordionContent>
          </AccordionItem>
        </BlurFade>
      ))}
    </Accordion>
  );
}
