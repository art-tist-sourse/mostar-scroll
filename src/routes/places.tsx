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

function PlacesPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Sights"
        title="Places to see"
        copy="Five stops, all inside the old city. Save the ones you want and they follow you into your trip list."
        image={IMAGES.splitRight}
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {PLACES.map((place) => (
            <article
              key={place.slug}
              className="group overflow-hidden rounded-3xl border border-border bg-card/40 transition-colors hover:border-foreground/30"
            >
              <img
                src={place.image}
                alt={place.title}
                className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-7">
                <div className="flex items-center gap-3">
                  <img src={place.pin} alt="" className="size-8" />
                  <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    {place.kicker}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl">{place.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{place.copy}</p>
                <dl className="mt-5 grid gap-2 text-xs text-muted-foreground">
                  <div className="flex gap-2">
                    <dt className="w-16 text-foreground">Hours</dt>
                    <dd>{place.hours}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="w-16 text-foreground">Price</dt>
                    <dd>{place.price}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="w-16 text-foreground">Best</dt>
                    <dd>{place.best}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-3">
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
      </section>
    </PageShell>
  );
}
