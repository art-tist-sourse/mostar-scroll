import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { SavePlaceButton } from "@/components/SavePlaceButton";
import { PLACES } from "@/lib/site-content";

export const Route = createFileRoute("/places/$slug")({
  loader: ({ params }) => {
    const place = PLACES.find((p) => p.slug === params.slug);
    if (!place) throw notFound();
    return { place };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Place not found — Mostar City" }, { name: "robots", content: "noindex" }],
      };
    }
    const { place } = loaderData;
    return {
      meta: [
        { title: `${place.title} — Mostar City Guide` },
        { name: "description", content: place.copy },
        { property: "og:title", content: `${place.title} — Mostar City Guide` },
        { property: "og:description", content: place.copy },
        { property: "og:type", content: "article" },
        { property: "og:image", content: place.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: place.image },
      ],
    };
  },
  notFoundComponent: PlaceNotFound,
  component: PlaceDetail,
});

function PlaceNotFound() {
  return (
    <PageShell>
      <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-28 text-center">
        <h1 className="font-display text-3xl sm:text-4xl">We don't have that place</h1>
        <p className="mt-4 text-muted-foreground">
          It may have been renamed. Browse the full list of Mostar sights instead.
        </p>
        <Link
          to="/places"
          className="mt-8 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
        >
          All places
        </Link>
      </div>
    </PageShell>
  );
}

function PlaceDetail() {
  const { place } = Route.useLoaderData();

  return (
    <PageShell>
      <PageHero kicker={place.kicker} title={place.title} copy={place.copy} image={place.image}>
        <SavePlaceButton slug={place.slug} title={place.title} />
        <Link
          to="/places"
          className="rounded-full border border-border px-5 py-2 text-sm hover:bg-accent"
        >
          All places
        </Link>
      </PageHero>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <dl className="grid gap-4 rounded-3xl border border-border bg-card/50 p-7 sm:grid-cols-3">
          {[
            { term: "Hours", detail: place.hours },
            { term: "Price", detail: place.price },
            { term: "Best time", detail: place.best },
          ].map((row) => (
            <div key={row.term}>
              <dt className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{row.term}</dt>
              <dd className="mt-2 text-sm text-foreground">{row.detail}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground">
          {place.details.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {PLACES.filter((p) => p.slug !== place.slug).map((p) => (
            <Link
              key={p.slug}
              to="/places/$slug"
              params={{ slug: p.slug }}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {p.title}
            </Link>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
