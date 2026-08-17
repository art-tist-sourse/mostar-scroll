import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { IMAGES, ITINERARIES, PRACTICAL } from "@/lib/site-content";

export const Route = createFileRoute("/itineraries")({
  head: () => ({
    meta: [
      { title: "Mostar Itineraries — Half Day to a Long Weekend" },
      {
        name: "description",
        content:
          "Hour-by-hour Mostar itineraries: the essential crossing in half a day, a slow day in the old city, and a weekend through the Neretva valley.",
      },
      { property: "og:title", content: "Mostar Itineraries — Half Day to a Long Weekend" },
      {
        property: "og:description",
        content: "Timed routes through Mostar's old city, plus Blagaj, Pocitelj and Kravice.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMAGES.splitLeft },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMAGES.splitLeft },
    ],
  }),
  component: ItinerariesPage,
});

function ItinerariesPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Routes"
        title="Itineraries"
        copy="Three ways to walk Mostar, timed for light and crowds rather than checklists."
        image={IMAGES.splitLeft}
      >
        <Link
          to="/auth"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Save a route to your account
        </Link>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="space-y-10">
          {ITINERARIES.map((itinerary) => (
            <article key={itinerary.slug} className="rounded-3xl border border-border bg-card/40 p-8">
              <div className="flex flex-wrap items-baseline gap-4">
                <h2 className="font-display text-3xl">{itinerary.title}</h2>
                <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {itinerary.duration}
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{itinerary.summary}</p>

              <ol className="mt-8 space-y-6 border-l border-border pl-6">
                {itinerary.stops.map((stop) => (
                  <li key={stop.title} className="relative">
                    <span className="absolute -left-[31px] top-2 size-2 rounded-full bg-primary" />
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      {stop.time}
                    </p>
                    <h3 className="mt-1 font-display text-xl">{stop.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{stop.copy}</p>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRACTICAL.map((item) => (
            <div key={item.term} className="rounded-3xl border border-border p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{item.term}</p>
              <p className="mt-3 text-sm text-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
