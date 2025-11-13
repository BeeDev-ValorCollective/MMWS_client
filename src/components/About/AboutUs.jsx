import "./about.css";
import Jeff from "../../assets/about.jpg";

export default function AboutUs() {
  return (
    <main className="about-page">
      {/* Top card: image + text */}
      <section className="about-hero">
        <div className="about-hero-image-wrap">
          <img src={Jeff} alt="Jeff at Metal Man Welding Services" />
        </div>

        <div className="about-hero-content">
          <h2 className="about-hero-title">Jeff &amp; Bobbi Jo</h2>
          <p className="about-hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            rutrum dui non tincidunt interdum. Cras id vehicula nunc. Morbi
            placerat, augue a volutpat aliquet, neque massa lacinia odio, eu
            cursus ligula mauris id ipsum. Nunc vitae ante metus. Etiam vitae
            nisl et magna feugiat ultricies vitae sit amet velit. Aliquam quis
            dapibus sapien, ut molestie sem. Nam ut elementum augue. Donec
            pulvinar ligula a mattis porttitor.
          </p>
        </div>
      </section>

      {/* Bottom gradient banner */}
      <section className="about-banner">
        <div className="about-banner-grid">
          <div className="about-banner-item">
            <p className="about-banner-heading">55 + Years</p>
            <p className="about-banner-sub">of Experience</p>
          </div>

          <div className="about-banner-item">
            <p className="about-banner-heading">Mobile Welding</p>
            <p className="about-banner-sub">Services Across NC</p>
          </div>

          <div className="about-banner-item">
            <p className="about-banner-heading">Custom Builds</p>
            <p className="about-banner-sub">&amp; Custom Metalwork</p>
          </div>

          <div className="about-banner-item">
            <p className="about-banner-heading">Veteran Owned</p>
            <p className="about-banner-sub">&amp; Family Run</p>
          </div>
        </div>
      </section>
    </main>
  );
}
