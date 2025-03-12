import { useState, useEffect } from "react";
import "./Home.css";

const Home: React.FC = () => {
  const fullText = "Space Walk";
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
    <section className="home">
      <div className="headers">
        <h1>
          {text}
          <span className={`cursor-placeholder ${showCursor ? 'cursor-visible' : ''}`}></span>
        </h1>
        <p>Explore the cosmos.</p>
        <button type="button" className="discord-button">Join us</button>
      </div>
    </section>
  );
};

export default Home;