import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { achievements, contact, profile, projects, skillGroups } from "@/data/portfolio";

type Line = { id: number; kind: "in" | "out"; body: ReactNode };

const COMMANDS: Record<string, string> = {
  help: "list available commands",
  about: "who's behind the forge",
  skills: "tech superpowers",
  projects: "things being forged",
  achievements: "milestones so far",
  contact: "how to reach me",
  whoami: "short identity card",
  theme: "inspect design palette tokens",
  date: "view system date & time",
  clear: "clear the terminal",
};

const MAX_LINES = 50;
const WELCOME_MESSAGE =
  "PIXELFORGE terminal v1.0 — a simulated portfolio interface. Type help to get started.";

function run(cmd: string): ReactNode {
  switch (cmd) {
    case "help":
      return (
        <div className="space-y-1">
          <p className="text-muted-foreground">Available commands:</p>
          <ul className="mt-1 space-y-0.5">
            {Object.entries(COMMANDS).map(([k, v]) => (
              <li key={k} className="flex flex-col sm:flex-row sm:gap-2">
                <span className="font-bold text-primary sm:w-28">{k}</span>
                <span className="text-muted-foreground">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "about":
      return (
        <div className="space-y-1">
          <p>{profile.intro}</p>
          <a
            href="#about"
            className="text-xs text-primary underline underline-offset-2 hover:opacity-80"
          >
            → View full profile in #about
          </a>
        </div>
      );
    case "whoami":
      return (
        <div className="space-y-1">
          <p className="text-primary">PIXELFORGE visitor mode: exploring the developer's work.</p>
          <p className="text-xs text-muted-foreground">
            Portfolio owner: {profile.name} ({profile.role})
          </p>
        </div>
      );
    case "skills":
      return (
        <ul className="space-y-1">
          {skillGroups.map((g) => (
            <li key={g.title}>
              <span className="text-primary">{g.title}:</span>{" "}
              <span className="text-foreground/90">{g.items.join(", ")}</span>
            </li>
          ))}
        </ul>
      );
    case "projects":
      return (
        <ul className="space-y-2">
          {projects.map((p) => (
            <li key={p.name}>
              <div className="flex flex-wrap items-baseline gap-1.5">
                <a
                  href={`#${p.id}`}
                  className="font-semibold text-primary underline underline-offset-2 hover:opacity-80"
                >
                  {p.name}
                </a>
                <span className="text-xs text-muted-foreground">({p.kind})</span>
              </div>
              <p className="text-xs text-muted-foreground">{p.summary}</p>
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] text-primary/80 hover:underline"
                >
                  GitHub repository ↗
                </a>
              )}
            </li>
          ))}
        </ul>
      );
    case "achievements":
      return (
        <ul className="space-y-1.5">
          {achievements.map((a) => (
            <li key={a.title}>
              <span className="text-primary font-bold">★</span> {a.title}{" "}
              <span className="text-muted-foreground">({a.year})</span>
              <p className="text-xs text-muted-foreground">{a.detail}</p>
            </li>
          ))}
        </ul>
      );
    case "contact":
      return (
        <div className="space-y-1">
          <p>
            <span className="text-primary font-bold">email:</span> {contact.email}
          </p>
          <ul className="mt-1 space-y-0.5">
            {contact.links.map((l) => (
              <li key={l.label}>
                <span className="text-primary font-bold">{l.label.toLowerCase()}:</span>{" "}
                {l.url ? (
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-foreground/90 hover:text-primary"
                  >
                    {l.value} ↗
                  </a>
                ) : (
                  l.value
                )}
              </li>
            ))}
          </ul>
          <p className="mt-1 text-xs text-muted-foreground">
            → Use the{" "}
            <a href="#contact" className="text-primary underline">
              #contact
            </a>{" "}
            section for verified links.
          </p>
        </div>
      );
    case "theme":
      return (
        <div className="space-y-1.5">
          <p className="text-muted-foreground">PIXELFORGE Design Tokens:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded border border-border bg-[#0A0D12]" />
              <span>
                Background: <code className="text-foreground">#0A0D12</code>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-3 rounded border border-border bg-[#111722]" />
              <span>
                Surface: <code className="text-foreground">#111722</code>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-3 rounded border border-border bg-[#C6FF4D]" />
              <span>
                Accent Lime: <code className="text-primary">#C6FF4D</code>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-3 rounded border border-border bg-[#8B5CF6]" />
              <span>
                Violet: <code className="text-violet">#8B5CF6</code>
              </span>
            </div>
          </div>
        </div>
      );
    case "date":
      return (
        <div className="text-xs text-muted-foreground font-mono">
          System Time: {new Date().toLocaleString()} (UTC{" "}
          {new Date().getTimezoneOffset() > 0 ? "-" : "+"}
          {Math.abs(Math.floor(new Date().getTimezoneOffset() / 60))})
        </div>
      );
    default:
      return (
        <div>
          <span className="text-destructive">Command not found: &quot;{cmd}&quot;.</span>
          <br />
          Type <span className="font-bold text-primary">help</span> to see available commands.
        </div>
      );
  }
}

export function ForgeTerminal() {
  const [lines, setLines] = useState<Line[]>([
    {
      id: 0,
      kind: "out",
      body: <span className="text-muted-foreground">{WELCOME_MESSAGE}</span>,
    },
  ]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState<number | null>(null);
  const idRef = useRef(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const execute = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    setValue("");
    setHIdx(null);
    if (!cmd) return;
    setHistory((h) => [...h.slice(-49), cmd]);

    if (cmd === "clear") {
      const clearId = idRef.current++;
      setLines([
        {
          id: clearId,
          kind: "out",
          body: (
            <span className="text-muted-foreground">
              Terminal cleared. Type <span className="text-primary">help</span> to see available
              commands.
            </span>
          ),
        },
      ]);
      return;
    }

    const a = idRef.current++,
      b = idRef.current++;
    setLines((l) => [
      ...l.slice(-MAX_LINES),
      { id: a, kind: "in", body: cmd },
      { id: b, kind: "out", body: run(cmd) },
    ]);
  };

  const submit = () => {
    execute(value);
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") return submit();
    if (e.key === "ArrowUp" && history.length) {
      e.preventDefault();
      const i = hIdx === null ? history.length - 1 : Math.max(0, hIdx - 1);
      setHIdx(i);
      setValue(history[i] ?? "");
    } else if (e.key === "ArrowDown" && hIdx !== null) {
      e.preventDefault();
      const i = hIdx + 1;
      if (i >= history.length) {
        setHIdx(null);
        setValue("");
      } else {
        setHIdx(i);
        setValue(history[i] ?? "");
      }
    }
  };

  return (
    <div
      className="overflow-hidden rounded-xl border bg-terminal shadow-glow"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-destructive/80" aria-hidden />
        <span className="size-2.5 rounded-full bg-placeholder/80" aria-hidden />
        <span className="size-2.5 rounded-full bg-primary/80" aria-hidden />
        <span className="ml-3 font-mono text-xs text-muted-foreground">forge@pixelforge:~</span>
      </div>
      <div
        ref={scrollRef}
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
        className="h-72 overflow-y-auto px-4 py-3 font-mono text-[13px] leading-relaxed sm:h-80"
      >
        {lines.map((l) =>
          l.kind === "in" ? (
            <div key={l.id} className="mt-2">
              <span className="text-primary">❯</span> {l.body}
            </div>
          ) : (
            <div key={l.id} className="whitespace-pre-wrap text-foreground/90">
              {l.body}
            </div>
          ),
        )}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-primary" aria-hidden>
            ❯
          </span>
          <label htmlFor="forge-input" className="sr-only">
            Terminal command
          </label>
          <input
            id="forge-input"
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKey}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder="type a command…"
            className="flex-1 bg-transparent font-mono text-foreground caret-primary outline-none placeholder:text-muted-foreground focus-visible:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-1.5 border-t px-3 py-2 bg-muted/20">
        <div className="flex flex-wrap gap-1.5">
          {["help", "whoami", "projects", "skills", "theme", "contact"].map((c) => (
            <button
              key={c}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                execute(c);
                inputRef.current?.focus();
              }}
              className="rounded border border-border/80 bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
            >
              {c}
            </button>
          ))}
        </div>
        <span className="hidden font-mono text-[10px] text-muted-foreground/60 sm:inline">
          interactive shell simulation
        </span>
      </div>
    </div>
  );
}
