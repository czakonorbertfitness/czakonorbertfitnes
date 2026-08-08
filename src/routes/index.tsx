import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/20260806_081704-2.jpg.asset.json";
import rowAsset from "@/assets/20260806_080509.jpg.asset.json";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Czakó Norbert — Személyi edző" },
      {
        name: "description",
        content:
          "Egyénre szabott személyi edzés erőfejlesztéssel, alakformálással és technikaoktatással.",
      },
      { property: "og:title", content: "Czakó Norbert — Személyi edző" },
      {
        property: "og:description",
        content: "Egyénre szabott személyi edzés mérhető haladással és tartható rutinnal.",
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
  "Illegális szerek használata vagy alkalmazása",
];

const packages = [
  {
    title: "Személyi edzés",
    desc: "Egy az egyben edzés teljes technikai felügyelettel.",
    points: ["60 perces alkalom", "Egyénre szabott terv", "Folyamatos korrekció"],
  },
  {
    title: "Online edzésterv",
    desc: "Havi terv és videós technikaellenőrzés, ha nem tudsz bejárni.",
    points: ["Havi programozás", "Videós visszajelzés", "Heti egyeztetés"],
  },
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
            Czakó Norbert vagyok, személyi edző. Tiszta technikára, fokozatos terhelésre és tartható
            rutinra építek — nem gyors, hanem maradandó eredményre.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/"
              hash="kapcsolat"
              className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Első alkalom egyeztetése
            </Link>
            <Link
              to="/"
              hash="edzesek"
              className="rounded-sm border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Edzésformák
            </Link>
          </div>
        </div>
        <div className="relative min-h-[380px] lg:min-h-[640px]">
          <img
            src={heroAsset.url}
            alt="Czakó Norbert személyi edző a fekvenyomó állványnál"
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
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Reális keretek</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Amiben számíthatsz rám — és amiben nem
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Az edzés akkor működik igazán, ha őszintén látjuk, honnan indulunk és mi fér bele
              hosszú távon.
            </p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="border-t border-primary pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl">Tudok segíteni</h3>
                <span className="text-2xl text-primary" aria-hidden="true">+</span>
              </div>
              <ul className="mt-6 space-y-4">
                {supportList.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="text-primary" aria-hidden="true">↗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl">Nem tudok segíteni</h3>
                <span className="text-2xl text-muted-foreground" aria-hidden="true">−</span>
              </div>
              <ul className="mt-6 space-y-4">
                {boundaryList.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="text-muted-foreground" aria-hidden="true">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="edzesek" className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Edzésformák</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              A célodhoz illő keret
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Mindegyik forma ugyanarra épül: pontos technika, mérhető haladás, tartható rutin.
              Csak a keret más.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {packages.map((p) => (
              <div key={p.title} className="flex flex-col rounded-sm border border-border bg-background p-8">
                <h3 className="font-display text-3xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="text-primary" aria-hidden="true">—</span>
                      <span className="text-muted-foreground">{pt}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/"
                  hash="kapcsolat"
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
        </div>
      </section>

      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <img
            src={rowAsset.url}
            alt="Czakó Norbert a Viking Press gépnél"
            className="aspect-[4/3] w-full rounded-sm object-cover"
            loading="lazy"
          />
          <div>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">Rólam</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Jelentősen túlsúlyos voltam egészen érettségiig. Nem kötött le sem a foci, sem pedig
              a kosárlabda, aztán az érettségi előtt egy évfolyamtársammal találkoztam, aki már
              járt konditerembe. Elkezdtem vele edzeni, és ahogy láttam a saját átalakulásomat,
              az motivációt adott minden egyes ismétléshez. Onnantól tudtam, hogy megtaláltam a
              sportomat.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Kisebb-nagyobb kihagyásokkal ez egészen a mai napig kitart. Edzés nélkül már nem is
              tudok létezni — annyira a mindennapommá vált.
            </p>
          </div>
        </div>
      </section>

      <section id="kapcsolat" className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Kapcsolat</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Kezdjük el</h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Írd meg, mi a célod és mikor tudsz edzeni — egy napon belül válaszolok, és
              egyeztetünk egy felmérő alkalmat.
            </p>
            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.3em] text-primary">Edző</dt>
                <dd className="mt-2 text-muted-foreground">Czakó Norbert</dd>
              </div>
            </dl>
          </div>

          <ContactForm />

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
