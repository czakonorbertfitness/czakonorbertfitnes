import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/adatvedelem")({
  head: () => ({
    meta: [
      { title: "Adatvédelmi nyilatkozat — Czakó Norbert" },
      {
        name: "description",
        content:
          "Adatvédelmi nyilatkozat: milyen adatokat kezelek a kapcsolatfelvételi űrlapon keresztül és meddig.",
      },
      { property: "og:title", content: "Adatvédelmi nyilatkozat — Czakó Norbert" },
      {
        property: "og:description",
        content: "Tájékoztató a kapcsolatfelvétel során megadott adatok kezeléséről.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
      { property: "og:url", content: "https://czakonorbertfitnes.lovable.app/adatvedelem" },
    ],
    links: [{ rel: "canonical", href: "https://czakonorbertfitnes.lovable.app/adatvedelem" }],
  }),
  component: Adatvedelem,
});

function Adatvedelem() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-24">
        <h1 className="font-display text-5xl leading-tight">Adatvédelmi nyilatkozat</h1>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl text-foreground">Adatkezelő</h2>
            <p className="mt-3">
              Czakó Norbert személyi edző. A kapcsolatfelvételi űrlapon megadott adatokat kizárólag
              én kezelem.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-foreground">Kezelt adatok és cél</h2>
            <p className="mt-3">
              Az űrlapon megadott név, e-mail cím vagy telefonszám és üzenet kezelésének célja
              kizárólag a kapcsolatfelvétel és az edzéssel kapcsolatos egyeztetés. Az adatkezelés
              jogalapja a hozzájárulásod, amelyet az űrlap elküldésével adsz meg.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-foreground">Megőrzési idő</h2>
            <p className="mt-3">
              Az adataidat legfeljebb az egyeztetés lezárásáig, illetve a hozzájárulásod
              visszavonásáig őrzöm meg.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-foreground">Adattovábbítás</h2>
            <p className="mt-3">
              Az adataidat harmadik félnek nem adom át, és marketing célra nem használom fel.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl text-foreground">Jogaid</h2>
            <p className="mt-3">
              Bármikor kérheted az adataidhoz való hozzáférést, azok helyesbítését vagy törlését,
              illetve visszavonhatod a hozzájárulásodat. Ehhez elég egy üzenetet küldened a
              kapcsolatfelvételi űrlapon vagy a közösségi oldalaimon keresztül.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
