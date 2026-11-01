import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Allenki Sai Rakesh — PIXELFORGE | Ideas forged into reality." },
      {
        name: "description",
        content:
          "Portfolio of Allenki Sai Rakesh — Full-Stack Developer, Google Gemini Student Ambassador & AI Builder at MLRITM.",
      },
      { name: "theme-color", content: "#0A0D12" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500&family=JetBrains+Mono:wght@400;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='none'%3E%3Crect width='64' height='64' rx='14' fill='%230A0D12'/%3E%3Crect x='1.5' y='1.5' width='61' height='61' rx='12.5' stroke='%23303846' stroke-width='2'/%3E%3Crect x='24' y='8' width='4' height='4' rx='1' fill='%238B5CF6'/%3E%3Crect x='32' y='6' width='5' height='5' rx='1' fill='%23C6FF4D'/%3E%3Crect x='42' y='10' width='4' height='4' rx='1' fill='%23C6FF4D'/%3E%3Crect x='29' y='14' width='4' height='4' rx='1' fill='%23FFFFFF'/%3E%3Crect x='14' y='22' width='38' height='7' rx='1.5' fill='%23C6FF4D'/%3E%3Cpolygon points='14,22 8,25 14,29' fill='%23C6FF4D'/%3E%3Crect x='23' y='29' width='20' height='6' fill='%23A8E836'/%3E%3Crect x='25' y='35' width='16' height='5' fill='%238B5CF6'/%3E%3Crect x='31' y='32' width='4' height='4' rx='1' fill='%23FFFFFF'/%3E%3Crect x='21' y='40' width='24' height='4' fill='%23C6FF4D'/%3E%3Crect x='13' y='44' width='40' height='7' rx='1.5' fill='%23C6FF4D'/%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
      { rel: "icon", href: "/favicon.svg?v=pixelforge2", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico?v=pixelforge2", type: "image/x-icon", sizes: "any" },
      { rel: "shortcut icon", href: "/favicon.ico?v=pixelforge2" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=pixelforge2" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { Toaster } from "../components/ui/sonner";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    // Dynamically enforce PIXELFORGE custom favicon in browser tab to bypass browser caching
    const svgFavicon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='none'%3E%3Crect width='64' height='64' rx='14' fill='%230A0D12'/%3E%3Crect x='1.5' y='1.5' width='61' height='61' rx='12.5' stroke='%23303846' stroke-width='2'/%3E%3Crect x='24' y='8' width='4' height='4' rx='1' fill='%238B5CF6'/%3E%3Crect x='32' y='6' width='5' height='5' rx='1' fill='%23C6FF4D'/%3E%3Crect x='42' y='10' width='4' height='4' rx='1' fill='%23C6FF4D'/%3E%3Crect x='29' y='14' width='4' height='4' rx='1' fill='%23FFFFFF'/%3E%3Crect x='14' y='22' width='38' height='7' rx='1.5' fill='%23C6FF4D'/%3E%3Cpolygon points='14,22 8,25 14,29' fill='%23C6FF4D'/%3E%3Crect x='23' y='29' width='20' height='6' fill='%23A8E836'/%3E%3Crect x='25' y='35' width='16' height='5' fill='%238B5CF6'/%3E%3Crect x='31' y='32' width='4' height='4' rx='1' fill='%23FFFFFF'/%3E%3Crect x='21' y='40' width='24' height='4' fill='%23C6FF4D'/%3E%3Crect x='13' y='44' width='40' height='7' rx='1.5' fill='%23C6FF4D'/%3E%3C/svg%3E`;

    let link = document.querySelector<HTMLLinkElement>("link[rel*='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/svg+xml";
    link.href = svgFavicon;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
}
