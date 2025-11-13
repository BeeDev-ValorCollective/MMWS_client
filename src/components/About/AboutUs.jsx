import "./about.css";
import Jeff from "../../assets/jeff.jpg";

export default function AboutUs() {
  return (
    <main className="about-page">
      {/* Top card: image + text */}
      <section className="about-hero">
        <div className="about-hero-image-wrap">
          <img src={Jeff} alt="Jeff at Metal Man Welding Services" />
        </div>

        <div className="about-hero-content">
          <h2 className="about-hero-title"></h2>
          <p className="about-hero-text"></p>
        </div>
      </section>

      {/* Bottom gradient banner */}
      <section className="about-banner">
        <div className="about-banner-grid">
          <div className="about-banner-item">
            <p className="about-banner-heading"></p>
            <p className="about-banner-sub"></p>
          </div>

          <div className="about-banner-item">
            <p className="about-banner-heading"></p>
            <p className="about-banner-sub"></p>
          </div>

          <div className="about-banner-item">
            <p className="about-banner-heading"></p>
            <p className="about-banner-sub"></p>
          </div>

          <div className="about-banner-item">
            <p className="about-banner-heading"></p>
            <p className="about-banner-sub"></p>
          </div>
        </div>
      </section>
    </main>
  );
}
