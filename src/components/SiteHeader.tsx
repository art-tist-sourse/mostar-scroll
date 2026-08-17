import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { SITE_NAME } from "@/lib/site-content";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/bridge", label: "Old Bridge" },
  { to: "/bazaar", label: "Bazaar" },
  { to: "/places", label: "Places" },
  { to: "/itineraries", label: "Itineraries" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const { user, loading } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-4">
        <Link to="/" className="font-display text-lg tracking-[0.18em] uppercase text-foreground">
          {SITE_NAME}
        </Link>

        <nav className="ml-auto hidden items-center gap-6 text-sm md:flex" aria-label="Main menu">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          {!loading && user ? (
            <Link
              to="/account"
              className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent"
            >
              My trip
            </Link>
          ) : (
            <Link
              to="/auth"
              className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sign in
            </Link>
          )}
          <button
            className="rounded-full border border-border p-2 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>

      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <nav className="flex flex-col gap-1 border-t border-border/60 px-5 py-3" aria-label="Mobile menu">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
