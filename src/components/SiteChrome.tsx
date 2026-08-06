import { Link } from "@tanstack/react-router";


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl tracking-tight">Czakó Norbert</span>
          <span className="text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
            Peak Gym Aréna · Budapest
          </span>
        </Link>
        <nav className="flex items-center text-sm">
          <Link
            to="/"
            hash="kapcsolat"
            className="rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Időpont
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Czakó Norbert — személyi edző</p>
        <p>Peak Gym Aréna, Budapest</p>
      </div>
    </footer>
  );
}
