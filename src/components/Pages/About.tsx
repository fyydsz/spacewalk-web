import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="stars"></div> {/* Efek bintang */}
      <div className="container">
        <h2 className="about-title">About Space Walk</h2>
        <p className="about-description">
          Space Walk adalah platform eksplorasi virtual yang membawa Anda ke luar angkasa. 
          Jelajahi dunia baru, temukan keajaiban kosmos, dan gabung dengan komunitas antariksa!
        </p>
        <button className="about-btn">Learn More</button>
      </div>
    </section>
  );
};

export default About;

