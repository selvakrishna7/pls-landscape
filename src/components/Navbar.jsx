
import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (id) => {
    setActiveSection(id);
    closeMenu();
  };

  useEffect(() => {
    const sections = document.querySelectorAll(
      "main[id], section[id]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="navbar">

      <div className="navbar-inner">

        {/* LOGO */}

        <a
          href="#home"
          className="logo"
          onClick={() => handleNavClick("home")}
        >
          <span>PLS</span>

          <div>
            <strong>PLS Landscape</strong>
            <small>& Engineering</small>
          </div>
        </a>


        {/* DESKTOP NAV */}

        <nav
          className="desktop-nav"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id
                  ? "active"
                  : ""
              }
              onClick={() =>
                handleNavClick(item.id)
              }
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


        {/* MOBILE BUTTON */}

        <button
          type="button"
          className={`menu-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* MOBILE MENU */}

        <nav
          className={`mobile-menu ${
            menuOpen ? "open" : ""
          }`}
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id
                  ? "active"
                  : ""
              }
              onClick={() =>
                handleNavClick(item.id)
              }
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
        </nav>

      </div>

    </header>
  );
}

export default Navbar;