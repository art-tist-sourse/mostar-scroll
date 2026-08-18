import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { SavePlaceButton } from "@/components/SavePlaceButton";
import { IMAGES, PLACES } from "@/lib/site-content";

export const Route = createFileRoute("/places")({
  head: () => ({
    meta: [
      { title: "Places to See in Mostar — Sights Guide" },
      {
        name: "description",
        content:
          "Every sight worth your morning in Mostar: Stari Most, Kujundziluk, Koski Mehmed Pasha Mosque, Kajtaz House and the War Photo Exhibition.",
      },
      { property: "og:title", content: "Places to See in Mostar — Sights Guide" },
      {
        property: "og:description",
        content: "Five essential Mostar sights with hours, prices and the best time to arrive.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: IMAGES.splitRight },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMAGES.splitRight },
    ],
  }),
  component: PlacesPage,
});

const AREAS = ["Old city", "West bank", "Around Mostar"] as const;

function PlacesPage() {
  return (
    <PageShell background={IMAGES.bazaar}>
      <PageHero
        kicker="Sights"
        title="Places to see"
        copy="Sixteen real stops across the UNESCO old city, the west bank, and the Neretva valley. Save the ones you want and they follow you into your trip list."
        image={IMAGES.splitRight}
      />

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {AREAS.map((area) => {
          const items = PLACES.filter((p) => (p.area ?? "Old city") === area);
          if (items.length === 0) return null;

          return (
            <div key={area} className="mb-14 last:mb-0">
              <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h2 className="font-display text-2xl sm:text-3xl">{area}</h2>
                <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  {items.length} places
                </span>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((place) => (
                  <article
                    key={place.slug}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur-sm transition-colors hover:border-foreground/30"
                  >
                    <img
                      src={place.image}
                      alt={place.title}
                      loading="lazy"
                      className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-44"
                    />
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex items-center gap-3">
                        <img src={place.pin} alt="" className="size-7 shrink-0" />
                        <span className="text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                          {place.kicker}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-xl sm:text-2xl">{place.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{place.copy}</p>
                      <dl className="mt-4 grid gap-2 text-xs text-muted-foreground">
                        <div className="flex gap-2">
                          <dt className="w-14 shrink-0 text-foreground">Hours</dt>
                          <dd className="min-w-0">{place.hours}</dd>
                        </div>
                        <div className="flex gap-2">
                          <dt className="w-14 shrink-0 text-foreground">Price</dt>
                          <dd className="min-w-0">{place.price}</dd>
                        </div>
                        <div className="flex gap-2">
                          <dt className="w-14 shrink-0 text-foreground">Best</dt>
                          <dd className="min-w-0">{place.best}</dd>
                        </div>
                      </dl>
                      <div className="mt-5 flex flex-wrap items-center gap-2 pt-1">
                        <Link
                          to="/places/$slug"
                          params={{ slug: place.slug }}
                          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                        >
                          Read more
                        </Link>
                        <SavePlaceButton slug={place.slug} title={place.title} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </PageShell>
  );
}
