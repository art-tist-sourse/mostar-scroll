import { Link } from "@tanstack/react-router";
import { SITE_NAME } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/85 backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-base uppercase tracking-[0.18em]">{SITE_NAME}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            A slow guide to Stari Most, the Neretva, and the old city of Mostar in Bosnia and
            Herzegovina.
          </p>
        </div>
        <nav className="text-sm" aria-label="Footer pages">
          <p className="mb-3 font-medium text-foreground">Explore</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/bridge" className="hover:text-foreground">
                The Old Bridge
              </Link>
            </li>
            <li>
              <Link to="/bazaar" className="hover:text-foreground">
                Bazaar and old town
              </Link>
            </li>
            <li>
              <Link to="/places" className="hover:text-foreground">
                Places to see
              </Link>
            </li>
            <li>
              <Link to="/itineraries" className="hover:text-foreground">
                Itineraries
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="text-sm" aria-label="Footer account">
          <p className="mb-3 font-medium text-foreground">Your trip</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/auth" className="hover:text-foreground">
                Sign in or create an account
              </Link>
            </li>
            <li>
              <Link to="/account" className="hover:text-foreground">
                Saved places
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-foreground">
                About this guide
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="border-t border-border/60 px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE_NAME}. Photography of the Neretva valley used for
        editorial illustration.
      </p>
    </footer>
  );
}
