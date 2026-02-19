import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import MobileMenu from "../MobileMenu/MobileMenu";
import { FaBars } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =========================
     ADD BACKGROUND ON SCROLL
  ========================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300
        ${scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"}`}
      >
        {/* CENTERED CONTAINER */}
        <div className="relative flex items-center justify-center py-4 px-6">

          {/* Centered Desktop Navbar */}
          <Navbar />

          {/* Mobile Hamburger (right aligned) */}
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="md:hidden absolute right-6 text-white text-3xl active:scale-90 transition"
          >
            <FaBars />
          </button>

        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}

export default Header;