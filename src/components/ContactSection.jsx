import { useState } from "react";
import Icon from "./Icon.jsx";
import { store } from "../data/site.js";

const initial = { name: "", phone: "", email: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
    setStatus("");
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^[0-9+\-\s]{8,}$/.test(form.phone.trim())) nextErrors.phone = "Enter a valid phone number.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) nextErrors.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) nextErrors.message = "Message should be at least 10 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      return;
    }

    setForm(initial);
    setStatus("success");
  };

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-pad grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-heading text-3xl font800 leading-tight text-ink sm:text-[32px]">
            Have Questions? <br />
            Get In Touch
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-body">
            Whether it's a bulk order inquiry or feedback about your shopping experience,
            we're here to listen and help.
          </p>
          <div className="mt-10 space-y-8">
            <ContactInfo icon="phone" label="Call Support" value={store.phone} />
            <ContactInfo icon="mail" label="Email Us" value={store.email} tone="bg-orange-100 text-secondary" />
          </div>
        </div>
        <div className="card p-6 sm:p-10">
          <form className="space-y-6" onSubmit={submit} noValidate>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Your Name" name="name" placeholder="John Doe" value={form.name} error={errors.name} onChange={update} />
              <Field label="Phone Number" name="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} error={errors.phone} onChange={update} />
            </div>
            <Field label="Email Address" name="email" type="email" placeholder="john@example.com" value={form.email} error={errors.email} onChange={update} />
            <Field label="Message" name="message" placeholder="How can we help you?" value={form.message} error={errors.message} onChange={update} multiline />
            {status === "success" && (
              <p className="rounded-2xl bg-success/10 px-4 py-3 text-sm font700 text-success">
                Thanks. Your message is ready for our team to review.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-2xl bg-primary/10 px-4 py-3 text-sm font700 text-primary">
                Please fix the highlighted details before sending.
              </p>
            )}
            <button className="w-full rounded-2xl bg-primary px-6 py-4 font-heading text-sm font800 text-white shadow-soft transition hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-primary/25" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value, tone = "bg-cream text-primary" }) {
  return (
    <div className="flex items-center gap-5">
      <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tone}`}>
        <Icon name={icon} className="h-7 w-7" />
      </span>
      <div>
        <p className="text-sm text-body">{label}</p>
        <p className="text-lg font800 text-ink">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder, value, error, onChange, multiline = false }) {
  const inputClass =
    "mt-2 w-full rounded-xl border border-line bg-soft px-4 py-3 text-base text-ink outline-none transition placeholder:text-body/55 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/15";
  const id = `contact-${name}`;

  return (
    <div>
      <label className="block text-sm font700 text-ink" htmlFor={id}>
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows="4"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClass}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClass}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font700 text-primary">
          {error}
        </p>
      )}
    </div>
  );
}
