import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Copy, Check, ArrowUp } from "lucide-react";
import { toast } from "sonner";
import { ForgeTerminal } from "@/components/portfolio/ForgeTerminal";
import { achievements, contact, navLinks, profile, projects, skillGroups } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Allenki Sai Rakesh — PIXELFORGE | Ideas forged into reality." },
      {
        name: "description",
        content:
          "Portfolio of Allenki Sai Rakesh — Full-Stack Developer, Google Gemini Student Ambassador & AI Builder at MLRITM.",
      },
      { property: "og:title", content: "Allenki Sai Rakesh — PIXELFORGE" },
      {
        property: "og:description",
        content:
          "Ideas forged into reality — Full-Stack & Generative AI Projects by Allenki Sai Rakesh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Placeholder({ children }: { children: string }) {
  const isPh = children.includes("[");
  return isPh ? (
    <span
      className="rounded border border-dashed border-placeholder/60 px-1 text-placeholder"
      title="Placeholder — replace me"
    >
      {children}
    </span>
  ) : (
    <>{children}</>
  );
}

function SectionHead({ index, title, kicker }: { index: string; title: string; kicker: string }) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 border-b pb-5">
      <div>
        <p className="font-mono text-xs tracking-[0.25em] text-primary">
          {index} / {kicker}
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      <span aria-hidden className="hidden font-mono text-xs text-muted-foreground sm:block">
        ▚▞▚
      </span>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-primary focus:px-3 focus:py-1 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
      >
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-display text-lg font-bold tracking-[0.12em]"
        >
          <img
            src="/favicon.svg"
            alt="PIXELFORGE"
            className="size-6 rounded transition-transform group-hover:scale-105"
          />
          <span>
            PIXEL<span className="text-primary">FORGE</span>
          </span>
        </a>
        <ul className="hidden gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="rounded px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="rounded border px-3 py-1.5 font-mono text-xs md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "close" : "menu"}
        </button>
      </nav>
      {open && (
        <ul id="mobile-nav" className="border-t px-5 py-3 md:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block py-2.5 font-mono text-sm text-muted-foreground hover:text-primary"
              >
                → {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function PixelForgeMotif() {
  // Deterministic pixel field forming an anvil-ish shape with glowing "sparks".
  const rows = [
    "..........",
    ".########.",
    "##########",
    "..######..",
    "...####...",
    "..######..",
    ".########.",
  ];
  return (
    <div aria-hidden className="grid w-full max-w-xs grid-cols-10 gap-1.5">
      {rows.flatMap((r, y) =>
        r
          .split("")
          .map((c, x) => (
            <span
              key={`${x}-${y}`}
              className={`aspect-square rounded-[2px] ${c === "#" ? ((x + y) % 5 === 0 ? "bg-primary animate-pixel" : "bg-primary/25") : (x * y) % 7 === 3 ? "bg-violet/40 animate-pixel" : "bg-muted/50"}`}
              style={{ animationDelay: `${(x + y) * 0.15}s` }}
            />
          )),
      )}
    </div>
  );
}

function Index() {
  const [copied, setCopied] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopyEmail = () => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(contact.email).catch(() => {
          // Fallback if browser permission is restricted
        });
      }
    } catch {
      // Fallback
    }
    setCopied(true);
    toast.success("Contact email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "ai")
      return (
        p.stack.some((s) => ["YOLO", "OpenCV", "AI", "Edge AI"].includes(s)) ||
        p.kind.toLowerCase().includes("ai")
      );
    if (filter === "hardware")
      return p.stack.some((s) => s.includes("ESP32") || s.includes("Hardware"));
    if (filter === "tooling")
      return p.kind.toLowerCase().includes("tooling") || p.stack.includes("TypeScript");
    return true;
  });

  return (
    <div id="top" className="relative min-h-screen bg-grid">
      <Nav />
      <main id="main">
        {/* HERO */}
        <section className="relative overflow-hidden bg-violet-glow">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <div className="animate-rise">
              <p className="font-mono text-[11px] tracking-[0.3em] text-primary sm:text-xs">
                DEVELOPER • AI BUILDER • PROBLEM SOLVER
              </p>
              <h1 className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
                Ideas forged
                <br />
                into <span className="text-primary text-glow">reality.</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">{profile.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 shadow-glow"
                >
                  Explore Projects
                </a>
                <a
                  href="#forge"
                  onClick={() => {
                    setTimeout(() => {
                      document.getElementById("forge-input")?.focus();
                    }, 100);
                  }}
                  className="rounded-md border px-5 py-3 font-mono text-sm transition-colors hover:border-primary hover:text-primary"
                >
                  Enter the Forge ❯
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <PixelForgeMotif />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-20">
          <SectionHead index="01" kicker="ABOUT" title="The builder behind the forge" />
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
              <p>
                Hi, I'm <Placeholder>{profile.name}</Placeholder>.
              </p>
              {profile.about.map((p) => (
                <p key={p}>
                  <Placeholder>{p}</Placeholder>
                </p>
              ))}
            </div>
            <dl className="divide-y rounded-lg border bg-card/60">
              {profile.facts.map((f) => (
                <div key={f.label} className="flex justify-between gap-4 px-4 py-3 text-sm">
                  <dt className="font-mono text-muted-foreground">{f.label}</dt>
                  <dd className="text-right">
                    <Placeholder>{f.value}</Placeholder>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* SKILLS */}
        <section id="superpowers" className="mx-auto max-w-6xl px-5 py-20">
          <SectionHead index="02" kicker="TECH SUPERPOWERS" title="Tools I forge with" />
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((g) => (
              <article
                key={g.title}
                className="group rounded-lg border bg-card/60 p-6 transition-colors hover:border-primary/60"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-xl font-semibold">{g.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-primary">
                    {g.code}
                  </span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded border bg-background/60 px-2.5 py-1 font-mono text-xs"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Tools I've worked with — no fake percentages.
          </p>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
          <SectionHead index="03" kicker="PROJECTS" title="Things on the anvil" />
          <div className="mb-6 flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "ai", label: "AI & Computer Vision" },
              { id: "hardware", label: "Edge Hardware" },
              { id: "tooling", label: "Developer Tooling" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`rounded border px-3 py-1 font-mono text-xs transition-colors ${
                  filter === tab.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border/80 text-muted-foreground hover:border-primary/60 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {filteredProjects.map((p, i) => (
              <article
                id={p.id}
                key={p.name}
                className="relative flex flex-col overflow-hidden rounded-lg border bg-card/60 p-6 scroll-mt-24 transition-all hover:-translate-y-1 hover:border-primary/60"
              >
                <span
                  aria-hidden
                  className="absolute right-5 top-5 font-mono text-5xl font-bold text-muted/80"
                >
                  0{i + 1}
                </span>
                <p className="font-mono text-xs text-primary">{p.kind}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{p.name}</h3>
                <div className="mt-3 flex-1 space-y-2">
                  <p className="text-xs font-mono text-muted-foreground/80">
                    <span className="text-primary font-semibold">Problem:</span>{" "}
                    <Placeholder>{p.problem}</Placeholder>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <Placeholder>{p.summary}</Placeholder>
                  </p>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded bg-accent px-2 py-0.5 font-mono text-[11px]">
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t pt-4 text-sm">
                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline"
                    >
                      View repository ↗
                    </a>
                  ) : (
                    <span className="font-mono text-xs text-placeholder">
                      [Repo link placeholder — add URL in data file]
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="mx-auto max-w-6xl px-5 py-20">
          <SectionHead index="04" kicker="ACHIEVEMENTS" title="Milestones" />
          <ol className="relative space-y-6 border-l pl-6">
            {achievements.map((a) => (
              <li key={a.title} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[29px] top-1.5 size-2.5 bg-primary shadow-glow"
                />
                <p className="font-mono text-xs text-muted-foreground">
                  <Placeholder>{a.year}</Placeholder>
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold">{a.title}</h3>
                <p className="mt-1 text-muted-foreground">
                  <Placeholder>{a.detail}</Placeholder>
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* FORGE TERMINAL */}
        <section id="forge" aria-labelledby="forge-title" className="mx-auto max-w-6xl px-5 py-20">
          <SectionHead index="05" kicker="THE FORGE TERMINAL" title="Talk to the forge" />
          <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:items-start">
            <div>
              <h3 id="forge-title" className="sr-only">
                The Forge Terminal
              </h3>
              <p className="text-lg text-muted-foreground">
                An interactive way to browse this portfolio. It only knows about this page — no real
                shell, no system access.
              </p>
              <p className="mt-5 inline-block rounded border border-primary/50 px-3 py-2 font-mono text-sm text-primary">
                Curious? Try <kbd className="font-bold">help</kbd> in the terminal.
              </p>
              <p className="mt-4 font-mono text-xs text-muted-foreground">
                ↑ / ↓ cycles through command history.
              </p>
            </div>
            <ForgeTerminal />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
          <SectionHead index="06" kicker="CONTACT" title="Let's forge something" />
          <div className="rounded-xl border bg-card/60 bg-violet-glow p-5 sm:p-10 md:p-12">
            <p className="max-w-xl text-lg text-muted-foreground">
              Open to internships, collaborations and hackathon teams.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <p className="font-display text-lg sm:text-2xl md:text-3xl font-semibold break-all sm:break-normal">
                <Placeholder>{contact.email}</Placeholder>
              </p>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded border border-border/80 bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <Check className="size-3.5 text-primary" />
                ) : (
                  <Copy className="size-3.5" />
                )}
                <span>{copied ? "Copied" : "Copy email"}</span>
              </button>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {contact.links.map((l) => (
                <li
                  key={l.label}
                  className="rounded border bg-background/60 px-4 py-3 transition-colors hover:border-primary/50"
                >
                  <p className="font-mono text-xs text-muted-foreground">{l.label}</p>
                  <p className="mt-1 text-sm font-medium">
                    {l.url ? (
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        {l.value} ↗
                      </a>
                    ) : (
                      <Placeholder>{l.value}</Placeholder>
                    )}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-xs text-muted-foreground/70">
              Verified communication & professional profiles for {profile.name}.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <div className="flex items-center gap-2">
              <img src="/favicon.svg" alt="PIXELFORGE" className="size-5 rounded" />
              <p className="font-display font-bold tracking-[0.12em]">
                PIXEL<span className="text-primary">FORGE</span>
              </p>
            </div>
            <span aria-hidden className="hidden sm:inline text-muted-foreground">
              •
            </span>
            <p className="font-sans text-xs text-muted-foreground">
              © {new Date().getFullYear()} {profile.brand}. {profile.tagline}
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="hover:text-primary">
                {l.label}
              </a>
            ))}
            <a href="#top" className="font-mono hover:text-primary">
              ↑ top
            </a>
          </nav>
        </div>
      </footer>
      {showTop && (
        <a
          href="#top"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-1.5 rounded-full border border-primary/50 bg-surface/90 px-3 py-2 font-mono text-xs text-primary shadow-glow backdrop-blur-md transition-all hover:scale-105 hover:bg-surface-raised active:scale-95"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="size-3.5" />
          <span>top</span>
        </a>
      )}
    </div>
  );
}
