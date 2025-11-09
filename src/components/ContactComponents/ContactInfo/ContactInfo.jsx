const PhoneLink = import.meta.env.VITE_LINK_PHONE || "#";
const PhoneDisplay = import.meta.env.VITE_DISPLAY_PHONE || "Phone unavailable";
const EmailLink = import.meta.env.VITE_LINK_EMAIL || "info@example.com";

import "./ContactInfo.css";
import EmailIcon from "/src/assets/email_icon.png";
import PhoneIcon from "/src/assets/phone_icon.png";

export default function ContactInfo() {
  return (
    <section aria-labelledby="contact-heading">
      <h1 id="contact-heading" className="contact-title">
        Contact Us
      </h1>

      <div className="contact-links">
        {/* E-Mail */}
        <div className="contact-link">
          <img
            src={EmailIcon}
            alt="Envelope icon for email contact"
            className="contact-icon"
            loading="lazy"
          />
          <h3>E-Mail</h3>
          <span className="muted">{EmailLink}</span>
        </div>

        {/* Phone */}
        <div className="contact-link">
          <img
            src={PhoneIcon}
            alt="Phone icon for call or text contact"
            className="contact-icon"
            loading="lazy"
          />
          <h3>Text or Call</h3>
          <span className="muted">{PhoneDisplay}</span>
        </div>
      </div>
    </section>
  );
}
