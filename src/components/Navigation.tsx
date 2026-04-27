import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Approach", href: "#approach" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
        <div
          className={`max-w-6xl mx-auto rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-background/85 backdrop-blur-xl border border-border/60 shadow-elegant"
              : "bg-background/60 backdrop-blur-md border border-border/40"
          }`}
          style={{ boxShadow: scrolled ? "var(--shadow-elegant)" : undefined }}
        >
          <div className="flex items-center justify-between pl-6 pr-2 py-2">
            {/* Logo */}
            <a
              href="#"
              className="font-display font-black text-lg text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              MN
            </a>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-display text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side - Contact CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                onClick={handleContactClick}
                className="font-display text-sm font-medium px-5 py-2.5 rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Contact me
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-10 h-10 flex items-center justify-center text-foreground rounded-full hover:bg-muted/50 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`font-display text-2xl font-medium text-foreground hover:text-primary transition-all ${
                mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleContactClick}
            className={`font-display text-base font-medium px-7 py-3 rounded-full bg-foreground text-background transition-all ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${navLinks.length * 50}ms` }}
          >
            Contact me
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
