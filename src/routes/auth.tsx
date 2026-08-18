import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useAuth } from "@/hooks/useAuth";
import { PageShell } from "@/components/PageShell";
import { IMAGES } from "@/lib/site-content";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign In or Create an Account — Mostar City" },
      {
        name: "description",
        content:
          "Sign in to Mostar City to save places, keep your itinerary and pick up planning on any device.",
      },
      { property: "og:title", content: "Sign In or Create an Account — Mostar City" },
      {
        property: "og:description",
        content: "Save Mostar places and itineraries to your own trip list.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!loading && user) navigate({ to: "/account" });
  }, [loading, user, navigate]);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin + "/account",
          data: { display_name: displayName || email.split("@")[0] },
        },
      });
      if (error) toast.error(error.message);
      else toast.success("Account created — you're signed in.");
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) toast.error(error.message);
    }
    setBusy(false);
  }

  async function onGoogle() {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast.error("Google sign-in failed. Please try again.");
      return;
    }
  }

  return (
    <PageShell>
      <section className="relative overflow-hidden">
        <img src={IMAGES.bridge} alt="" className="absolute inset-0 size-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background" />
        <div className="relative mx-auto max-w-md px-4 py-14 sm:px-6 sm:py-20">
          <div className="rounded-3xl border border-border bg-card/80 p-8 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="font-display text-3xl">
              {mode === "signin" ? "Welcome back" : "Create your account"}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Save Mostar places and itineraries to your own trip list.
            </p>

            <button
              onClick={onGoogle}
              className="mt-7 w-full rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              Continue with Google
            </button>

            <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              {mode === "signup" ? (
                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-foreground/40"
                    placeholder="Amila"
                  />
                </div>
              ) : null}
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-foreground/40"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-foreground/40"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                disabled={busy}
                className="w-full rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
              >
                {busy ? "One moment…" : mode === "signin" ? "Sign in" : "Create account"}
              </button>
            </form>

            <p className="mt-6 text-sm text-muted-foreground">
              {mode === "signin" ? "New here? " : "Already have an account? "}
              <button
                className="text-foreground underline underline-offset-4"
                onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              >
                {mode === "signin" ? "Create an account" : "Sign in"}
              </button>
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              <Link to="/about" className="underline underline-offset-4">
                What is Mostar City?
              </Link>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
