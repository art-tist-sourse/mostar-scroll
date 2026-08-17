import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { initMostarCinema } from "@/lib/mostar-cinema";

const SKY =
  "https://raft-blast-61784561.figma.site/_assets/v11/16b5007d9c93971e26ffe4e0e3e37946f6bd538c.png";
const BACK_FOUR =
  "https://raft-blast-61784561.figma.site/_assets/v11/8a7f8af50e0ce92ec2e228e7b0b4112178c51cf1.png";
const BAZAAR =
  "https://raft-blast-61784561.figma.site/_assets/v11/864afe00e41e2fa20a5aa546e15cb807e0f81384.png";
const SPLIT_LEFT =
  "https://raft-blast-61784561.figma.site/_assets/v11/7536d7b60a1fce482cf6edf3f0bffd3bad5d0f8a.png";
const SPLIT_RIGHT =
  "https://raft-blast-61784561.figma.site/_assets/v11/392db6a6a6b98e868bd7f8d3f55bb719d51e5028.png";
const BRIDGE =
  "https://raft-blast-61784561.figma.site/_assets/v11/c6a6d8ef49bca43f708aa852692942c45ec950d4.png";
const FRAME_TWO =
  "https://raft-blast-61784561.figma.site/_assets/v11/ba75252bab2b1c510987b74837770f7bc8a6b2d4.png";

const ICON1 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260730_230438_d526b8b6-8a2e-4e3b-9993-3908acae03a7.png";
const ICON2 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260730_230442_140bc25b-b165-4249-904a-f708bff6970e.png";
const ICON3 =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260730_230448_825949c9-ccdb-4857-b4a6-e349eccc9010.png";

const SIGHTS = [
  {
    label: "Open Stari Most card",
    kicker: "Old Bridge",
    title: "Stari Most",
    copy: "The stone arch over the Neretva and Mostar's main landmark.",
    pin: ICON1,
  },
  {
    label: "Open Kujundziluk card",
    kicker: "Bazaar Street",
    title: "Kujundziluk",
    copy: "Copper shops, souvenirs, and the old bazaar lane by the bridge.",
    pin: ICON2,
  },
  {
    label: "Open Koski Mehmed Pasha Mosque card",
    kicker: "Viewpoint",
    title: "Koski Mehmed Pasha Mosque",
    copy: "A classic minaret view back toward Stari Most and the river.",
    pin: ICON3,
  },
  {
    label: "Open Kajtaz House card",
    kicker: "Ottoman House",
    title: "Kajtaz House",
    copy: "A preserved residential house showing Mostar's Ottoman layers.",
    pin: ICON1,
  },
  {
    label: "Open War Photo Exhibition card",
    kicker: "Museum",
    title: "War Photo Exhibition",
    copy: "A compact, moving stop for context on the city's recent history.",
    pin: ICON2,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mostar City — Cinematic Scroll Story of Stari Most" },
      {
        name: "description",
        content:
          "Scroll through Mostar: the Old Bridge over the Neretva, the Kujundziluk bazaar, and the UNESCO old city in one cinematic story.",
      },
      { property: "og:title", content: "Mostar City — Cinematic Scroll Story of Stari Most" },
      {
        property: "og:description",
        content:
          "A cinematic scroll journey across Stari Most, the Neretva river, and Mostar's UNESCO old city.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: BRIDGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: BRIDGE },
    ],
    links: [{ rel: "stylesheet", href: "/mostar.css" }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => initMostarCinema(), []);

  return (
    <main className="site-shell">
      <section className="cinema-scroll" id="cinema" aria-label="Mostar cinematic scroll story">
        <div className="stage">
          <div className="world">
            <img className="scene-img sky-img" src={SKY} alt="" />

            <header className="site-header" aria-label="Primary navigation">
              <a className="site-logo" href="#cinema">
                Mostar City
              </a>
              <nav className="site-nav" aria-label="Main menu">
                <Link to="/bridge">Old Bridge</Link>
                <Link to="/bazaar">Bazaar</Link>
                <Link to="/places">Places</Link>
                <Link to="/itineraries">Itineraries</Link>
                <Link to="/about">About</Link>
                <Link to="/auth">Sign in</Link>
              </nav>
              <button className="language-switcher" aria-label="Change language">
                <span>EN</span>
                <span aria-hidden="true">⌄</span>
              </button>
            </header>

            <div className="back-stack">
              <img className="scene-img back-img back-four" src={BACK_FOUR} alt="" />
              <section className="sights-slider" aria-label="Mostar sights slider">
                <div className="sights-track">
                  {SIGHTS.map((sight) => (
                    <article
                      className="sight-card"
                      key={sight.title}
                      tabIndex={0}
                      role="button"
                      aria-label={sight.label}
                    >
                      <span className="sight-kicker">{sight.kicker}</span>
                      <img className="sight-pin" src={sight.pin} alt="" />
                      <h3>{sight.title}</h3>
                      <p>{sight.copy}</p>
                    </article>
                  ))}
                </div>
              </section>
              <img className="scene-img back-img back-bazaar" src={BAZAAR} alt="" />
            </div>

            <div className="sights-controls" aria-label="Slider controls">
              <button className="sight-nav sight-prev" aria-label="Previous sight">
                ←
              </button>
              <button className="sight-nav sight-next" aria-label="Next sight">
                →
              </button>
            </div>

            <h1 className="hero-title">MOSTAR</h1>

            <img className="scene-img splitframe-img splitframe-left" src={SPLIT_LEFT} alt="" />
            <img className="scene-img splitframe-img splitframe-right" src={SPLIT_RIGHT} alt="" />
            <img className="scene-img bridge-img" src={BRIDGE} alt="" />
            <img className="scene-img frame-two-img" src={FRAME_TWO} alt="" />

            <div className="shade" />
          </div>

          <section className="intro-copy" aria-label="Mostar overview">
            <p>
              A stone arch, emerald water, and a compact old city made for slow mornings, late
              light, and one unforgettable crossing.
            </p>
            <div className="hero-tags" aria-label="Mostar highlights">
              <span>Old Bridge</span>
              <span>Neretva River</span>
              <span>UNESCO old city</span>
            </div>
          </section>

          <section
            className="story-panel story-panel-bridge"
            id="bridge"
            aria-label="Old Bridge details"
          >
            <h2>The bridge is the city's compass.</h2>
            <p>
              Stari Most links the banks of the Neretva and anchors a historic quarter shaped by
              Ottoman, Mediterranean, and European layers.
            </p>
            <dl className="facts">
              <div>
                <dt>1566</dt>
                <dd>Original bridge completed</dd>
              </div>
              <div>
                <dt>2005</dt>
                <dd>Old Bridge Area inscribed by UNESCO</dd>
              </div>
            </dl>
          </section>

          <section
            className="story-panel story-panel-bazaar"
            id="bazaar"
            aria-label="Old town details"
          >
            <h2>The bazaar keeps Mostar close.</h2>
            <p>
              Stone lanes, mosque courtyards, copper stalls, and riverside coffee stay within a
              short walk of Stari Most.
            </p>
            <button className="note-button">
              <span aria-hidden="true">↗</span>
              <span>Open old town notes</span>
            </button>
          </section>
        </div>
      </section>
    </main>
  );
}
