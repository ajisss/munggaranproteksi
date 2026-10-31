import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3">
        <a href="/" className="flex items-center gap-2">
          <img src={logoSrc} alt="Munggaran Proteksi" className="h-10 w-auto" />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 whitespace-nowrap xl:gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`text-sm font-medium transition-colors hover:text-white ${
                isActive(link) ? "text-white" : "text-white/70"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/#kontak"
          className="hidden rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600 lg:inline-flex lg:items-center lg:gap-2"
        >
          Kirim Penawaran
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.27 3.13a.75.75 0 011.03-.88l16.5 8.25a.75.75 0 010 1.34L4.3 19.99a.75.75 0 01-1.03-.88L6 12zm0 0h7.5" /></svg>
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-navy-900 px-6 py-4 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`rounded-md px-2 py-2 text-sm font-medium hover:bg-white/10 hover:text-white ${
                isActive(link) ? "text-white" : "text-white/70"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#kontak"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-2 text-center text-sm font-semibold text-white"
          >
            Kirim Penawaran
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.27 3.13a.75.75 0 011.03-.88l16.5 8.25a.75.75 0 010 1.34L4.3 19.99a.75.75 0 01-1.03-.88L6 12zm0 0h7.5" /></svg>
          </a>
        </nav>
      )}
    </header>
  );
}
