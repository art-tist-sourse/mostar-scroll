import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { PHOTOS, PRACTICAL } from "@/lib/site-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mostar City — Bosnia and Herzegovina Guide" },
      {
        name: "description",
        content:
          "Why Mostar, how this guide is put together, and the practical basics for visiting Bosnia and Herzegovina's Neretva valley.",
      },
      { property: "og:title", content: "About Mostar City — Bosnia and Herzegovina Guide" },
      {
        property: "og:description",
        content: "The story behind this cinematic guide to Mostar and the Neretva valley.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: PHOTOS.panoramaMosques },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: PHOTOS.panoramaMosques },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell background={PHOTOS.oldTown}>
      <PageHero
        kicker="Bosnia and Herzegovina"
        title="About this guide"
        copy="One city, told slowly: a scroll story on the front page and a working guide behind it."
        image={PHOTOS.panoramaMosques}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <h2 className="font-display text-3xl text-foreground">Why Mostar</h2>
          <p>
            Mostar is small enough to walk in a morning and dense enough to keep you a week. The
            Neretva cuts a green line through limestone; the old city stacks Ottoman, Mediterranean
            and Austro-Hungarian layers on both banks; and the bridge in the middle carries the
            weight of all of it.
          </p>
          <h2 className="font-display text-3xl text-foreground">How it's built</h2>
          <p>
            The home page is a single cinematic composition — sky, ridge, bazaar, bridge — scrubbed
            by your scroll and nudged by your pointer. Everything else is a plain, fast guide:
            places, itineraries, and a saved list tied to your account.
          </p>
          <h2 className="font-display text-3xl text-foreground">Accounts</h2>
          <p>
            Create an account with email or Google and every place you bookmark is kept in your trip
            list, on any device.
          </p>
        </div>

        <dl className="mt-12 grid gap-6 sm:grid-cols-2">
          {PRACTICAL.map((item) => (
            <div key={item.term} className="rounded-3xl border border-border bg-card/85 backdrop-blur-sm p-6">
              <dt className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                {item.term}
              </dt>
              <dd className="mt-3 text-sm text-foreground">{item.detail}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/places"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Start with the places
          </Link>
          <Link to="/auth" className="rounded-full border border-border px-5 py-2 text-sm hover:bg-accent">
            Create an account
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
