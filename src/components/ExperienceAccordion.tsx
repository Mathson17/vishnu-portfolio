import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { highlight } from "../lib/highlight";
import type { journey } from "../lib/data";

type Role = (typeof journey)["roles"][number];

export default function ExperienceAccordion({ roles }: { roles: Role[] }) {
  return (
    <Accordion className="w-full">
      {roles.map((role) => (
        <AccordionItem key={role.org} value={role.org} className="w-full border-border py-3">
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
      ))}
    </Accordion>
  );
}
