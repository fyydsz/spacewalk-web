import { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <a href="#home" className="title" onClick={(e) => {
        e.preventDefault();
        scrollToSection("home");
      }}>
        Home
      </a>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}>
            Contact
          </a>
        </li>
        <li>
          <a href="#support" onClick={(e) => {
            e.preventDefault();
            scrollToSection("support");
          }}>
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;