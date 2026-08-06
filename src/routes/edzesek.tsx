import { createFileRoute, Link } from "@tanstack/react-router";
import trainAsset from "@/assets/20260806_081704.jpg.asset.json";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/edzesek")({
  head: () => ({
    meta: [
      { title: "Edzésformák — Czakó Norbert személyi edző" },
      {
        name: "description",
        content:
          "Személyi edzés, páros edzés és online edzésterv a Peak Gym Arénában, Budapesten. Válaszd ki a hozzád illő formát.",
      },
      { property: "og:title", content: "Edzésformák — Czakó Norbert" },
      {
        property: "og:description",
        content: "Személyi, páros és online edzési lehetőségek a Peak Gym Arénában.",
      },
    ],
  }),
  component: Edzesek,
});

const packages = [
  {
    title: "Személyi edzés",
    desc: "Egy az egyben edzés a Peak Gym Arénában, teljes technikai felügyelettel.",
    points: ["60 perces alkalom", "Egyénre szabott terv", "Folyamatos korrekció"],
  },
  {
    title: "Páros edzés",
    desc: "Barátoddal vagy pároddal, közös tempóban, megosztott költséggel.",
    points: ["60 perces alkalom", "Két fő", "Közös motiváció"],
  },
  {
    title: "Online edzésterv",
    desc: "Havi terv és videós technikaellenőrzés, ha nem tudsz bejárni.",
    points: ["Havi programozás", "Videós visszajelzés", "Heti egyeztetés"],
  },
];

function Edzesek() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="grid border-b border-border/60 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 lg:px-16">
          <h1 className="font-display text-5xl leading-tight sm:text-6xl">
            Edzésformák
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Mindegyik forma ugyanarra épül: pontos technika, mérhető haladás, tartható
            rutin. Csak a keret más.
          </p>
        </div>
        <div className="relative min-h-[300px]">
          <img
            src={trainAsset.url}
            alt="Czakó Norbert a Peak Gym Arénában, a fekvenyomó állványnál"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-sm border border-border bg-card p-8"
            >
              <h2 className="font-display text-3xl">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="text-primary">—</span>
                    <span className="text-muted-foreground">{pt}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/kapcsolat"
                className="mt-8 inline-block rounded-sm border border-primary px-5 py-2.5 text-center text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Érdekel
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Az árakról és a szabad időpontokról szívesen adok tájékoztatást — keress bátran.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
