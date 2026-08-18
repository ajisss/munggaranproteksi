import { useEffect, useState } from "react";

type NavLink = { label: string; href: string; sectionId?: string };

export default function Navbar({
  links,
  logoSrc,
  currentPath,
}: {
  links: NavLink[];
  logoSrc: string;
  currentPath: string;
}) {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    if (currentPath !== "/") return;

    const sectionIds = links
      .map((link) => link.sectionId)
      .filter((id): id is string => Boolean(id));

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHash(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));

    const onScroll = () => {
      if (window.scrollY < 200) setActiveHash("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [currentPath, links]);

  function isActive(link: NavLink) {
    if (currentPath === "/") {
      if (link.sectionId === undefined) return false;
      return activeHash === (link.sectionId ? `#${link.sectionId}` : "");
    }
    return currentPath.startsWith(link.href);
  }

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, link: NavLink) {
    if (!link.sectionId) return;
    if (currentPath === "/") {
      e.preventDefault();
      document.getElementById(link.sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3">
        <a href="/" className="flex items-center gap-2">
          <img src={logoSrc} alt="Munggaran Proteksi" className="h-10 w-auto" />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                isActive(link) ? "text-brand-600" : "text-ink-600"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/contact"
          className="hidden rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 md:inline-block"
        >
          Kirim Penawaran
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink-800 md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink-100 bg-white px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`rounded-md px-2 py-2 text-sm font-medium hover:bg-ink-50 hover:text-brand-600 ${
                isActive(link) ? "text-brand-600" : "text-ink-600"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="mt-2 rounded-full bg-brand-600 px-5 py-2 text-center text-sm font-semibold text-white"
          >
            Kirim Penawaran
          </a>
        </nav>
      )}
    </header>
  );
}
