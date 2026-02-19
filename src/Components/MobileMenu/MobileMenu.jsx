import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const sections = ["home", "projects", "qualifications", "skills", "contact"];

function MobileMenu({ menuOpen, setMenuOpen }) {
  const [activeSection, setActiveSection] = useState("home");

  /* ===============================
     ACTIVE SECTION OBSERVER
  =============================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-80px 0px -40% 0px", // better section detection
      }
    );

    const observedElements = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observedElements.push(el);
      }
    });

    return () => {
      observedElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  /* ===============================
     BODY SCROLL LOCK (iOS SAFE)
  =============================== */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [menuOpen]);

  /* ===============================
     ESC KEY CLOSE SUPPORT
  =============================== */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [setMenuOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col justify-center items-center
      bg-black/95 backdrop-blur-lg
      transition-all duration-300 ease-out
      ${
        menuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      {/* CLOSE BUTTON */}
      <button
        aria-label="Close menu"
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl
        hover:text-red-500 active:scale-90 transition"
      >
        &times;
      </button>

      {/* MENU LINKS */}
      <ul className="flex flex-col items-center gap-8">
        {sections.map((section) => (
          <li key={section}>
            <Link
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              onClick={() => setMenuOpen(false)}
              className={`cursor-pointer text-2xl font-bold tracking-wide
              transition-all duration-300
              ${
                activeSection === section
                  ? "text-red-500 scale-110"
                  : "text-white hover:text-red-400"
              }`}
            >
              {section.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileMenu;