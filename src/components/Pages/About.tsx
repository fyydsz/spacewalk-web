import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="about-title">About Space Walk</h2>
        <p className="about-description">
          Space Walk adalah platform eksplorasi virtual yang membawa Anda ke luar angkasa. 
          Jelajahi dunia luar angkasa dengan pengalaman terbaik di Spacewalk Discord Server.
        </p>
        <button className="about-btn" onClick={() => window.location.href = "https://discord.gg/DpNdCKqJtH"}>Join us</button>
      </div>
    </section>
  );
};

export default About;

