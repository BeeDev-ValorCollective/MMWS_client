import "./about.css";
import Jeff from "../../assets/about.jpg";

export default function AboutUs() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero">
        <img src={Jeff} alt="Jeff welding" className="about-img" />

        <div className="about-card">
          <h2 className="about-title">JEFF & BOBBI JO</h2>
          <p className="about-text">
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

      {/* INFO BANNER */}
      <section className="about-info-banner">
        <div className="banner-item">
          <h3>55 + Years</h3>
          <p>of Experience</p>
        </div>

        <div className="banner-item">
          <h3>Mobile Welding</h3>
          <p>Services Across NC</p>
        </div>

        <div className="banner-item">
          <h3>Custom Builds</h3>
          <p>& Custom Metalwork</p>
        </div>

        <div className="banner-item">
          <h3>Veteran Owned</h3>
          <p>& Family Run</p>
        </div>
      </section>
    </>
  );
}
