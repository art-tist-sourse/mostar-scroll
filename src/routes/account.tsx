import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { PageShell } from "@/components/PageShell";
import { PLACES } from "@/lib/site-content";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "My Trip — Saved Mostar Places" },
      {
        name: "description",
        content: "Your saved Mostar places and planning notes, kept with your Mostar City account.",
      },
      { property: "og:title", content: "My Trip — Saved Mostar Places" },
      { property: "og:description", content: "Your saved Mostar places and planning notes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AccountPage,
});

type SavedRow = { id: string; place_slug: string; place_title: string; note: string | null };

function AccountPage() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [rows, setRows] = useState<SavedRow[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/auth" });
  }, [loading, user, navigate]);

  useEffect(() => {
    if (!user) return;
    let active = true;
    supabase
      .from("saved_places")
      .select("id, place_slug, place_title, note")
      .order("created_at", { ascending: true })
      .then(({ data, error }) => {
        if (!active) return;
        if (error) toast.error(error.message);
        setRows(data ?? []);
        setFetching(false);
      });
    return () => {
      active = false;
    };
  }, [user]);

  async function remove(id: string) {
    const { error } = await supabase.from("saved_places").delete().eq("id", id);
    if (error) {
      toast.error(error.message);
      return;
    }
    setRows((prev) => prev.filter((r) => r.id !== id));
  }

  async function saveNote(id: string, note: string) {
    const { error } = await supabase.from("saved_places").update({ note }).eq("id", id);
    if (error) toast.error(error.message);
    else toast.success("Note saved");
  }

  return (
    <PageShell>
      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">My trip</p>
            <h1 className="mt-3 font-display text-4xl">Saved places</h1>
            <p className="mt-2 text-sm text-muted-foreground">{user?.email}</p>
          </div>
          <button
            onClick={async () => {
              await signOut();
              navigate({ to: "/" });
            }}
            className="rounded-full border border-border px-4 py-2 text-sm hover:bg-accent"
          >
            Sign out
          </button>
        </div>

        {fetching ? (
          <p className="mt-12 text-sm text-muted-foreground">Loading your list…</p>
        ) : rows.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-border bg-card/40 p-10 text-center">
            <h2 className="font-display text-2xl">Nothing saved yet</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Bookmark the sights you want and they will appear here.
            </p>
            <Link
              to="/places"
              className="mt-6 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
            >
              Browse places
            </Link>
          </div>
        ) : (
          <ul className="mt-12 space-y-5">
            {rows.map((row) => {
              const place = PLACES.find((p) => p.slug === row.place_slug);
              return (
                <li
                  key={row.id}
                  className="flex flex-col gap-4 rounded-3xl border border-border bg-card/40 p-6 sm:flex-row sm:items-start"
                >
                  {place ? (
                    <img src={place.image} alt="" className="h-24 w-32 rounded-2xl object-cover" />
                  ) : null}
                  <div className="flex-1">
                    <h2 className="font-display text-xl">{row.place_title}</h2>
                    {place ? (
                      <Link
                        to="/places/$slug"
                        params={{ slug: row.place_slug }}
                        className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                      >
                        Open guide
                      </Link>
                    ) : null}
                    <textarea
                      defaultValue={row.note ?? ""}
                      placeholder="Add a note — time, ticket, who you're going with…"
                      onBlur={(e) => saveNote(row.id, e.target.value)}
                      className="mt-3 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-foreground/40"
                      rows={2}
                    />
                  </div>
                  <button
                    onClick={() => remove(row.id)}
                    aria-label={`Remove ${row.place_title}`}
                    className="self-start rounded-full border border-border p-2 text-muted-foreground hover:text-foreground"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </PageShell>
  );
}
