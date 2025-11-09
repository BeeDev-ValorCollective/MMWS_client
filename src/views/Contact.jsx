import ContactInfo from "../components/ContactComponents/ContactInfo/ContactInfo";
import ContactForm from "../components/ContactComponents/ContactForm/ContactForm";
import ContactArea from "../components/ContactComponents/ContactArea/ContactArea";
import "../components/ContactComponents/ContactPage.css";

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
