import { FlickeringGrid } from "./ui/flickering-grid";

export default function ContactCTA({
  linkedinUrl,
  email,
}: {
  linkedinUrl: string;
  email: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border p-10">
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 overflow-hidden rounded-xl">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          color="#5ee5bc"
          maxOpacity={0.5}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="font-display text-3xl tracking-tight sm:text-5xl shine">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground">
          Looking to connect with <span className="text-primary underline underline-offset-2 decoration-primary/70">like-minded professionals</span> and explore opportunities where this background and these skills can make a difference. Reach out on{" "}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:no-underline"
          >
            LinkedIn
          </a>{" "}
          or by{" "}
          <a href={`mailto:${email}`} className="text-primary underline underline-offset-4 hover:no-underline">
            email
          </a>
          .
        </p>
      </div>
    </div>
  );
}
