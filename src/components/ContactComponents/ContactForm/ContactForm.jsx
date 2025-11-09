import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted (stub).");
    setForm({ name: "", email: "", subject: "" });
  };

  return (
    <section className="form-card">
      <h2 className="form-title">Message Us:</h2>

      <form
        className="form-grid"
        onSubmit={onSubmit}
        aria-label="Contact form"
        autoComplete="off"
      >
        {/* Name */}
        <>
          <label className="label" htmlFor="name">
            Name:
          </label>
          <input
            className="input"
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={onChange}
            required
          />
        </>

        {/* Email */}
        <>
          <label className="label" htmlFor="email">
            E-Mail:
          </label>
          <input
            className="input"
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
          />
        </>

        {/* Subject */}
        <>
          <label className="label full" htmlFor="subject">
            Subject:
          </label>
          <textarea
            className="textarea"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={onChange}
            required
          />
        </>

        {/* Submit button */}
        <div className="full btn-row">
          <button className="btn-accent-lg" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
