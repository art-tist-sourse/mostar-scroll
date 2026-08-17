export const SITE_NAME = "Mostar City";

export const IMAGES = {
  sky: "https://raft-blast-61784561.figma.site/_assets/v11/16b5007d9c93971e26ffe4e0e3e37946f6bd538c.png",
  backFour:
    "https://raft-blast-61784561.figma.site/_assets/v11/8a7f8af50e0ce92ec2e228e7b0b4112178c51cf1.png",
  bazaar:
    "https://raft-blast-61784561.figma.site/_assets/v11/864afe00e41e2fa20a5aa546e15cb807e0f81384.png",
  splitLeft:
    "https://raft-blast-61784561.figma.site/_assets/v11/7536d7b60a1fce482cf6edf3f0bffd3bad5d0f8a.png",
  splitRight:
    "https://raft-blast-61784561.figma.site/_assets/v11/392db6a6a6b98e868bd7f8d3f55bb719d51e5028.png",
  bridge:
    "https://raft-blast-61784561.figma.site/_assets/v11/c6a6d8ef49bca43f708aa852692942c45ec950d4.png",
  frameTwo:
    "https://raft-blast-61784561.figma.site/_assets/v11/ba75252bab2b1c510987b74837770f7bc8a6b2d4.png",
} as const;

export const ICONS = {
  one: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260730_230438_d526b8b6-8a2e-4e3b-9993-3908acae03a7.png",
  two: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260730_230442_140bc25b-b165-4249-904a-f708bff6970e.png",
  three:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260730_230448_825949c9-ccdb-4857-b4a6-e349eccc9010.png",
} as const;

export type Place = {
  slug: string;
  kicker: string;
  title: string;
  copy: string;
  pin: string;
  image: string;
  hours: string;
  price: string;
  best: string;
  details: string[];
};

export const PLACES: Place[] = [
  {
    slug: "stari-most",
    kicker: "Old Bridge",
    title: "Stari Most",
    copy: "The stone arch over the Neretva and Mostar's main landmark.",
    pin: ICONS.one,
    image: IMAGES.bridge,
    hours: "Open all day",
    price: "Free to cross",
    best: "Sunrise, or the hour before sunset",
    details: [
      "The single 28.7 m arch springs from limestone abutments on both banks, with the Halebija and Tara towers guarding each end.",
      "Divers from the Mostar diving club leap 21 m into the Neretva through the summer — a tradition older than the modern railings.",
      "The stones are polished slick by five centuries of feet: soft soles beat sandals on the climb.",
    ],
  },
  {
    slug: "kujundziluk",
    kicker: "Bazaar Street",
    title: "Kujundziluk",
    copy: "Copper shops, souvenirs, and the old bazaar lane by the bridge.",
    pin: ICONS.two,
    image: IMAGES.bazaar,
    hours: "Shops roughly 09:00 – 20:00",
    price: "Free to wander",
    best: "Mid-morning, before the tour groups",
    details: [
      "Coppersmiths still hammer trays, cezve pots, and shell casings turned into pens a few metres from where their grandfathers worked.",
      "Prices soften away from the bridge end of the lane — walk uphill before you buy.",
      "Stop for Bosnian coffee served with rahat lokum and a copper set you can watch being made.",
    ],
  },
  {
    slug: "koski-mehmed-pasha-mosque",
    kicker: "Viewpoint",
    title: "Koski Mehmed Pasha Mosque",
    copy: "A classic minaret view back toward Stari Most and the river.",
    pin: ICONS.three,
    image: IMAGES.splitRight,
    hours: "Daily, outside prayer times",
    price: "Small entry fee for courtyard and minaret",
    best: "Late afternoon light on the bridge",
    details: [
      "Built in 1618, the mosque's riverside courtyard gives the postcard angle on Stari Most.",
      "The minaret stair is tight and steep — one-way traffic in practice, so wait your turn at the bottom.",
      "Shoulders and knees covered; scarves are lent at the door.",
    ],
  },
  {
    slug: "kajtaz-house",
    kicker: "Ottoman House",
    title: "Kajtaz House",
    copy: "A preserved residential house showing Mostar's Ottoman layers.",
    pin: ICONS.one,
    image: IMAGES.splitLeft,
    hours: "Seasonal, generally 10:00 – 18:00",
    price: "Modest entry fee",
    best: "Quiet early afternoon",
    details: [
      "A 16th-century harem house still furnished with textiles, low divans, and carved wooden ceilings.",
      "One of the few interiors in the city that survived the 1990s intact enough to show daily Ottoman life.",
      "Ten minutes uphill from the bazaar and almost always calm.",
    ],
  },
  {
    slug: "war-photo-exhibition",
    kicker: "Museum",
    title: "War Photo Exhibition",
    copy: "A compact, moving stop for context on the city's recent history.",
    pin: ICONS.two,
    image: IMAGES.frameTwo,
    hours: "Daily in season, 10:00 – 18:00",
    price: "Ticket includes the Tara tower",
    best: "After you have crossed the bridge once",
    details: [
      "Housed in the Tara tower at the bridge's eastern end, the exhibition documents the siege and the bridge's destruction in 1993.",
      "Wide-format prints by Wade Goddard sit in raw stone rooms — twenty minutes, and the city reads differently after.",
      "Pair it with the rebuilt-bridge story: reopened in 2004, inscribed by UNESCO in 2005.",
    ],
  },
];

export type Itinerary = {
  slug: string;
  title: string;
  duration: string;
  summary: string;
  stops: { time: string; title: string; copy: string }[];
};

export const ITINERARIES: Itinerary[] = [
  {
    slug: "half-day",
    title: "The essential crossing",
    duration: "Half day",
    summary:
      "One pass through the old city, both banks of the Neretva, and the two views everybody comes for.",
    stops: [
      {
        time: "08:30",
        title: "Stari Most at first light",
        copy: "Cross while the stone is cool and the lane is empty. Photograph from the Lucki bridge downstream.",
      },
      {
        time: "09:30",
        title: "Kujundziluk",
        copy: "Coffee, coppersmiths, and the uphill half of the bazaar before the crowds arrive.",
      },
      {
        time: "11:00",
        title: "Koski Mehmed Pasha courtyard",
        copy: "The postcard angle, then the minaret climb if the stair is clear.",
      },
      {
        time: "12:30",
        title: "Lunch on the west bank",
        copy: "Cevapi or a grilled trout, then Spanish Square for the interwar façades.",
      },
    ],
  },
  {
    slug: "full-day",
    title: "Slow day in the old city",
    duration: "1 day",
    summary: "The bridge, the museums, and the layers of Mostar that sit above the bazaar.",
    stops: [
      {
        time: "08:00",
        title: "Bridge and towers",
        copy: "Halebija and Tara, then the War Photo Exhibition for context.",
      },
      {
        time: "11:00",
        title: "Kajtaz House",
        copy: "An Ottoman interior, ten quiet minutes uphill from the noise.",
      },
      {
        time: "13:00",
        title: "Riverside lunch",
        copy: "A terrace over the Neretva; the water stays emerald even in August.",
      },
      {
        time: "15:30",
        title: "Karadoz Bey Mosque and Bulevar",
        copy: "The city's largest Ottoman mosque, then the former front line and its scars.",
      },
      {
        time: "19:00",
        title: "Bridge at blue hour",
        copy: "Lit stone, cold river air, and the emptiest lane of the day.",
      },
    ],
  },
  {
    slug: "weekend",
    title: "Mostar and the Neretva valley",
    duration: "2 – 3 days",
    summary: "Use Mostar as the base and take the valley: waterfalls, dervish houses, and vineyards.",
    stops: [
      {
        time: "Day 1",
        title: "Old city in full",
        copy: "The slow-day route above, ending with the bridge at night.",
      },
      {
        time: "Day 2",
        title: "Blagaj and Pocitelj",
        copy: "The tekke under the Buna cliff, then the stepped Ottoman village above the river.",
      },
      {
        time: "Day 3",
        title: "Kravice and Herzegovina wine",
        copy: "Waterfalls in the morning, Zilavka and Blatina tastings on the way back.",
      },
    ],
  },
];

export const BRIDGE_FACTS = [
  { term: "1566", detail: "Original bridge completed by Mimar Hayruddin" },
  { term: "28.7 m", detail: "Span of the single stone arch" },
  { term: "1993", detail: "Destroyed during the war" },
  { term: "2004", detail: "Rebuilt bridge reopened" },
  { term: "2005", detail: "Old Bridge Area inscribed by UNESCO" },
];

export const PRACTICAL = [
  { term: "Currency", detail: "Convertible mark (BAM); euros accepted unevenly." },
  { term: "Getting there", detail: "Train or bus from Sarajevo, about 2 – 3 hours down the Neretva." },
  { term: "Season", detail: "May – June and September for warm light and thinner crowds." },
  { term: "Footwear", detail: "The old city is polished cobble — grippy soles, always." },
];
