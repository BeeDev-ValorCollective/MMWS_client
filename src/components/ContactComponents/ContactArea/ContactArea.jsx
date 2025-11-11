import ServiceMap from "/src/assets/map.png";
import "./ContactArea.css";

export default function ContactArea() {
  return (
    <section className="contact-area">
      <h2 className="section-subtitle">Service Area</h2>

      <div
        className="map-frame map-bg"
        role="img"
        aria-label="Service area map"
        style={{ backgroundImage: `url(${ServiceMap})` }}
      />
    </section>
  );
}
