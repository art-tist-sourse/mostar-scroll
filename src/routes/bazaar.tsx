import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { SavePlaceButton } from "@/components/SavePlaceButton";
import { IMAGES, PLACES } from "@/lib/site-content";

export const Route = createFileRoute("/bazaar")({
  head: () => ({
    meta: [
      { title: "Kujundziluk Bazaar & Mostar Old Town" },
      {
        name: "description",
        content:
          "Walk Kujundziluk: coppersmiths, Bosnian coffee, mosque courtyards and the stone lanes of Mostar's old town, all within minutes of Stari Most.",
      },
      { property: "og:title", content: "Kujundziluk Bazaar & Mostar Old Town" },
      {
        property: "og:description",
        content: "Coppersmiths, coffee and stone lanes in the old town beside the Old Bridge.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: IMAGES.bazaar },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: IMAGES.bazaar },
    ],
  }),
  component: BazaarPage,
});

const NOTES = [
  {
    title: "Copper first",
    copy: "Cezve pots, trays and engraved plates are still hammered in the lane. Ask before photographing a workshop; most smiths are happy to show the punch work.",
  },
  {
    title: "Coffee ritual",
    copy: "Bosnian coffee arrives in a copper set with a sugar cube and lokum. Do not stir the grounds; sip from the top and let it settle.",
  },
  {
    title: "Eat here",
    copy: "Cevapi with fresh somun, burek by weight, and grilled Neretva trout on the terraces below the bridge.",
  },
  {
    title: "Buy uphill",
    copy: "Stalls nearest the arch charge the bridge premium. Walk two minutes up Kujundziluk and the same kilim costs noticeably less.",
  },
];

function BazaarPage() {
  const bazaar = PLACES[1]!;

  return (
    <PageShell>
      <PageHero
        kicker="Bazaar street"
        title="Kujundziluk"
        copy="Copper, coffee and cobble. The bazaar keeps Mostar close: everything worth seeing sits within a short walk of the arch."
        image={IMAGES.bazaar}
      >
        <SavePlaceButton slug={bazaar.slug} title={bazaar.title} />
        <Link
          to="/places"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          See every place
        </Link>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <h2 className="font-display text-3xl text-foreground">A lane that never stopped working</h2>
          <p>
            Kujundziluk means "goldsmiths' street", and metal is still the trade. Between the
            souvenir stalls you will find third-generation coppersmiths, engravers, and shops selling
            shell casings turned into pens — the city's most uncomfortable and most honest souvenir.
          </p>
          <p>
            Behind the lane the old town spreads out in courtyards: the Koski Mehmed Pasha mosque
            terrace, the Ottoman Kajtaz House, hammam ruins, and stairways that drop suddenly to the
            river.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {NOTES.map((note) => (
            <article key={note.title} className="rounded-3xl border border-border bg-card/40 p-7">
              <h3 className="font-display text-xl">{note.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{note.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-border">
          <img src={IMAGES.frameTwo} alt="Mostar old town rooftops above the Neretva" className="h-80 w-full object-cover" />
        </div>
      </section>
    </PageShell>
  );
}
