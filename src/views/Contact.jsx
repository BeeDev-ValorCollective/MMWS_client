import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import ContactArea from "../components/Contact/ContactArea";
import "../components/Contact/Contact.css";

export default function Contact() {
  return (
    <main className="contact-wrap">
      <ContactInfo />
      <div className="contact-divider" />
      <div className="lower-grid">
        <ContactArea />
        <ContactForm />
      </div>
    </main>
  );
}
