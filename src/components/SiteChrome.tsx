import { Link } from "@tanstack/react-router";


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl tracking-tight">Czakó Norbert</span>
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

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/czakonorbertfitness",
  instagram: "https://www.instagram.com/czakonorbertfitness/",
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Czakó Norbert — személyi edző</p>
        <nav className="flex items-center gap-6">
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            Facebook
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            Instagram
          </a>
          <Link to="/adatvedelem" className="transition-colors hover:text-primary">
            Adatvédelem
          </Link>
        </nav>
      </div>
    </footer>
  );
}

