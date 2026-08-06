import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/20260806_081704-2.jpg.asset.json";
import rowAsset from "@/assets/20260806_080509.jpg.asset.json";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Czakó Norbert — Személyi edző, Peak Gym Budapest" },
      {
        name: "description",
        content:
          "Személyi edzés a budapesti Peak Gymben. Erőfejlesztés, alakformálás és technikaoktatás egyénre szabott terv alapján.",
      },
      { property: "og:title", content: "Czakó Norbert — Személyi edző, Budapest" },
      {
        property: "og:description",
        content: "Egyénre szabott személyi edzés a Peak Gymben, Budapesten.",
      },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    n: "01",
    title: "Felmérés",
    body: "Mozgásminta, testösszetétel és célok átbeszélése az első alkalommal.",
  },
  {
    n: "02",
    title: "Terv",
    body: "Heti bontású edzésterv, ami illeszkedik a napirendedhez és a terhelhetőségedhez.",
  },
  {
    n: "03",
    title: "Kivitelezés",
    body: "Végigkísért edzések, folyamatos technikai korrekcióval és progresszív terheléssel.",
  },
];

const supportList = [
  "Erőfejlesztés és izomépítés",
  "Alakformálás és zsírcsökkentés",
  "Kezdő edzőtermi rutin felépítése",
  "Szabadsúlyos alapgyakorlatok technikája",
  "Tartható, személyre szabott edzésterv",
];

const boundaryList = [
  "Gyors, erőfeszítés nélküli átalakulás",
  "Orvosi vagy gyógytornászati rehabilitáció",
  "Versenydiéta vagy extrém színpadi felkészítés",
  "Olyan terv, amit a hétköznapjaidba nem lehet beilleszteni",
];

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="grid items-stretch border-b border-border/60 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 lg:px-16 lg:py-28">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Személyi edző</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Erő, ami kitart
            <span className="block italic text-primary">a hétköznapokban is.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Czakó Norbert vagyok, személyi edző a budapesti Peak Gymben. Tiszta technikára,
            fokozatos terhelésre és tartható rutinra építek — nem gyors, hanem maradandó
            eredményre.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/kapcsolat"
              className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Első alkalom egyeztetése
            </Link>
            <Link
              to="/edzesek"
              className="rounded-sm border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Edzésformák
            </Link>
          </div>
        </div>
        <div className="relative min-h-[380px] lg:min-h-[640px]">
          <img
            src={heroAsset.url}
            alt="Czakó Norbert személyi edző a fekvenyomó állványnál a Peak Gymben"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:bg-gradient-to-r" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="max-w-xl font-display text-4xl leading-tight sm:text-5xl">
          Hogyan dolgozunk együtt
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.n} className="border-t border-border pt-6">
              <span className="font-display text-3xl text-primary">{p.n}</span>
              <h3 className="mt-3 text-xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <img
            src={rowAsset.url}
            alt="Czakó Norbert a Viking Press gépnél a Peak Gymben"
            className="aspect-[4/3] w-full rounded-sm object-cover"
            loading="lazy"
          />
          <div>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">Rólam</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Évek óta kísérek klienseket a Peak Gymben — kezdőket, akik most állnak először
              rúd mögé, és haladókat, akik megrekedtek egy szinten. Az edzéseim gerince a
              szabadsúlyos alapgyakorlatok pontos kivitelezése, köré épül minden más.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Hiszek abban, hogy a legjobb terv az, amit tényleg végig tudsz csinálni. Ezért
              mindig a te tempódhoz, munkádhoz és regenerációdhoz igazítom a terhelést.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl sm:text-5xl">Kezdjük el</h2>
        <p className="mt-4 text-muted-foreground">
          Írj néhány sort a céljaidról, és megbeszéljük az első felmérő alkalmat.
        </p>
        <Link
          to="/kapcsolat"
          className="mt-8 inline-block rounded-sm bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Kapcsolatfelvétel
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
