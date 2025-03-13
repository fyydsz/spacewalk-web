import { useState, useEffect } from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  const fullText = "404 - Not Found";
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150); // Adjust typing speed

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section className="not-found">
      <div className="headers">
        <h1>
          {text}
          <span className={`cursor-placeholder ${showCursor ? 'cursor-visible' : ''}`}></span>
        </h1>
        <p>Oops! Halaman yang kamu cari tidak ditemukan.</p>
        <Link to="/" className="home-button">Kembali ke Beranda</Link>
      </div>
    </section>
  );
};

export default NotFound;
