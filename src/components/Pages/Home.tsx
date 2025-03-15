import { useState, useEffect } from "react";
import "./Home.css";

const Home: React.FC = () => {
  const fullText = "Space Walk";
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        index++;
        setTimeout(type, 200); // Delay tiap huruf
      }
    };

    type();

    return () => { }; // Cleanup tidak perlu karena tidak ada interval
  }, []);


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="home">
      <div className="headers">
        <h1>
          {text}
          <span className={`cursor-placeholder ${showCursor ? 'cursor-visible' : ''}`}></span>
        </h1>
        <p>Explore the cosmos.</p>
        <button type="button" className="button" onClick={() => scrollToSection("about")}>Learn More</button>
      </div>
    </section>
  );
};

export default Home;