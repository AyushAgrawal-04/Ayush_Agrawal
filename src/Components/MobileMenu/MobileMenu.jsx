import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const sections = [
  "home",
  "projects",
  "qualifications",
  "skills",
  "contact",
];

function MobileMenu({ menuOpen, setMenuOpen }) {
  const [activeSection, setActiveSection] = useState("home");

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
        threshold: 0.5,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center transition-all duration-300 ease-in-out
      ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
    >
      {/* Close Button */}
      <button
        aria-label="Close menu"
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl cursor-pointer hover:text-red-500 transition"
      >
        &times;
      </button>

      {/* Menu Links */}
      <ul className="flex flex-col items-center space-y-8">
        {sections.map((section) => (
          <li key={section}>
            <Link
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className={`cursor-pointer text-2xl font-bold tracking-wide transition-all duration-300
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