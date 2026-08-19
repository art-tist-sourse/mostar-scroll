import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { SavePlaceButton } from "@/components/SavePlaceButton";
import { BRIDGE_FACTS, PHOTOS, PLACES } from "@/lib/site-content";

export const Route = createFileRoute("/bridge")({
  head: () => ({
    meta: [
      { title: "Stari Most — Mostar's Old Bridge Guide" },
      {
        name: "description",
        content:
          "How to visit Stari Most in Mostar: the history of the 1566 arch, its destruction and rebuilding, the best light, and the divers.",
      },
      { property: "og:title", content: "Stari Most — Mostar's Old Bridge Guide" },
      {
        property: "og:description",
        content: "The 1566 arch over the Neretva: history, timings, viewpoints and diving tradition.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: PHOTOS.bridge },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: PHOTOS.bridge },
    ],
  }),
  component: BridgePage,
});

function BridgePage() {
  const bridge = PLACES[0]!;

  return (
    <PageShell background={PHOTOS.bridge}>
      <PageHero
        kicker="The Old Bridge"
        title="Stari Most"
        copy="A single limestone arch, emerald water below, and the crossing that gives Mostar its name and its compass."
        image={PHOTOS.bridge}
      >
        <SavePlaceButton slug={bridge.slug} title={bridge.title} />
        <Link
          to="/itineraries"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Plan the crossing
        </Link>
      </PageHero>

      <section className="mx-auto max-w-6xl w-full px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <h2 className="font-display text-3xl text-foreground">The bridge is the city's compass</h2>
            <p>
              Mostar takes its name from the <em>mostari</em>, the keepers of the bridge. Sultan
              Suleiman's architect Mimar Hayruddin closed the arch in 1566, replacing a swaying
              wooden crossing with a span so bold that legend says he prepared his own funeral before
              the scaffolding came down.
            </p>
            <p>
              For four centuries the arch carried caravans between the Adriatic and the Bosnian
              interior. It fell in November 1993. The rebuilt bridge — same stone, same quarry, same
              geometry — reopened in 2004 and the Old Bridge Area was inscribed by UNESCO in 2005.
            </p>
            <p>
              Cross it twice: once for the view, once for the sound. The lane funnels footsteps and
              river noise into something you only notice on the second pass.
            </p>
          </div>

          <dl className="h-fit rounded-3xl border border-border bg-card/90 backdrop-blur-sm p-7">
            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-muted-foreground">Timeline</p>
            {BRIDGE_FACTS.map((fact) => (
              <div key={fact.term} className="border-b border-border/60 py-3 last:border-0">
                <dt className="font-display text-2xl text-foreground">{fact.term}</dt>
                <dd className="text-sm text-muted-foreground">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "The divers",
              copy: "Club members plunge 21 m into the Neretva through the summer. Watch from the west bank steps, and expect a hat passed around first.",
            },
            {
              title: "Best light",
              copy: "Sunrise gives you empty stone; the hour before sunset warms the arch and lights the minaret behind it.",
            },
            {
              title: "The towers",
              copy: "Halebija and Tara bracket the span. Tara now holds the War Photo Exhibition — the best twenty minutes in the old city.",
            },
          ].map((card) => (
            <article key={card.title} className="rounded-3xl border border-border bg-card/85 backdrop-blur-sm p-6">
              <h3 className="font-display text-xl">{card.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{card.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
