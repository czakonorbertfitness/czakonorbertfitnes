import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/kapcsolat")({
  head: () => ({
    meta: [
      { title: "Kapcsolat — Czakó Norbert személyi edző, Budapest" },
      {
        name: "description",
        content:
          "Vedd fel velem a kapcsolatot személyi edzés ügyében. Peak Gym, Budapest — írj néhány sort a céljaidról.",
      },
      { property: "og:title", content: "Kapcsolat — Czakó Norbert" },
      {
        property: "og:description",
        content: "Időpontegyeztetés személyi edzésre a Peak Gymben, Budapesten.",
      },
    ],
  }),
  component: Kapcsolat,
});

function Kapcsolat() {
  const [sent, setSent] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="mx-auto grid w-full max-w-6xl flex-1 gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-5xl leading-tight sm:text-6xl">Kapcsolat</h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Írd meg, mi a célod és mikor tudsz edzeni — egy napon belül válaszolok, és
            egyeztetünk egy felmérő alkalmat.
          </p>
          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.3em] text-primary">Helyszín</dt>
              <dd className="mt-2 text-muted-foreground">Peak Gym, Budapest</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.3em] text-primary">Edző</dt>
              <dd className="mt-2 text-muted-foreground">Czakó Norbert</dd>
            </div>
          </dl>
        </div>

        <form
          className="space-y-5 rounded-sm border border-border bg-card p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div>
            <label htmlFor="name" className="text-sm text-muted-foreground">
              Neved
            </label>
            <input
              id="name"
              required
              className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-muted-foreground">
              E-mail vagy telefon
            </label>
            <input
              id="email"
              required
              className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="msg" className="text-sm text-muted-foreground">
              Célod, tapasztalatod
            </label>
            <textarea
              id="msg"
              rows={5}
              required
              className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Üzenet küldése
          </button>
          {sent && (
            <p className="text-sm text-primary">
              Köszönöm az üzenetet! Hamarosan keresni foglak.
            </p>
          )}
        </form>
      </main>

      <SiteFooter />
    </div>
  );
}
