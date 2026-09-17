import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], main[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.2, 0.5, 0.8],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="navbar">

      {/* LOGO */}
      <a href="#home" className="logo" onClick={closeMenu}>
        <span>PLS</span>

        <div>
          <strong>PLS Landscape</strong>
          <small>& Engineering</small>
        </div>
      </a>

      {/* DESKTOP NAVIGATION */}
      <nav className="desktop-nav">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "active" : ""}
            onClick={() => {
              setActiveSection(item.id);
              closeMenu();
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* DESKTOP WHATSAPP */}
      <a
        className="nav-whatsapp"
        href="https://wa.me/6590445110"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>

      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "active" : ""}
            onClick={() => {
              setActiveSection(item.id);
              closeMenu();
            }}
          >
            {item.label}
          </a>
        ))}

        <a
          href="https://wa.me/6590445110"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-whatsapp"
          onClick={closeMenu}
        >
          WhatsApp Us →
        </a>
      </div>

    </header>
  );
}

export default Navbar;