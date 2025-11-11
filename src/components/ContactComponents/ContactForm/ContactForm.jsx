import { useState } from "react";
import "./ContactForm.css";

const API_BASE =
  (import.meta?.env?.VITE_API_BASE && String(import.meta.env.VITE_API_BASE)) ||
  "http://localhost:3001";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim()) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      const payload = {
        userName: form.name,
        contact: form.email,
        message: form.subject,
        subject: "Website Contact",
      };

      const res = await fetch(`${API_BASE}/api/sendContactMail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "omit",
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg =
          data?.message ||
          `Request failed with status ${res.status} ${res.statusText}`;
        throw new Error(msg);
      }

      setStatus({
        type: "success",
        message: "Thanks! Your message was sent successfully.",
      });
      setForm({ name: "", email: "", subject: "" });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err?.message ||
          "We’re sorry—something went wrong sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="form-card">
      <h2 className="form-title">Message Us:</h2>

      {status.type !== "idle" && (
        <div aria-live="polite" className="status-wrap">
          {status.type === "loading" && (
            <p className="status status-loading">{status.message}</p>
          )}
          {status.type === "success" && (
            <p className="status status-success">{status.message}</p>
          )}
          {status.type === "error" && (
            <p className="status status-error">{status.message}</p>
          )}
        </div>
      )}

      <form
        className="form-grid"
        onSubmit={onSubmit}
        aria-label="Contact form"
        autoComplete="off"
      >
        {/* Name */}
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
          disabled={isSubmitting}
        />

        {/* Email */}
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
          disabled={isSubmitting}
        />

        {/* Subject */}
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
          disabled={isSubmitting}
          rows={6}
        />

        {/* Submit button */}
        <div className="full btn-row">
          <button
            className="btn-accent-lg"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
}
