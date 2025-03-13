import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false); // Tutup menu saat route berubah
  }, [location]);


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <Link
        to="/"
        className="title"
        onClick={(e) => {
          if (location.pathname === "/") {
            e.preventDefault(); // Hindari reload yang tidak perlu
            window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll ke atas
          }
        }}
      >
        Home
      </Link>


      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        {/* Jika di halaman Home, pakai scroll. Jika di halaman lain, navigasi ke Home dulu */}
        <li>
          {location.pathname === "/" ? (
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}>
              About
            </a>
          ) : (
            <Link to="/#about" >About</Link>
          )}
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/support">Support</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
