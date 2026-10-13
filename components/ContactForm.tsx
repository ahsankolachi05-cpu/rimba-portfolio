"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectTypes = ["Film", "Television", "Theatre", "Period Production", "Creative Collaboration", "Other"];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", type: "Film", message: "", website: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10) e.message = "Please tell us a little more (min. 10 characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    // Honeypot — silently accept spam without sending
    if (form.website) {
      setStatus("sent");
      return;
    }
    setStatus("sending");
    try {
      // No backend connected yet — open the visitor's email client as a fallback
      // so the message is genuinely composed, never faked as "sent".
      const subject = encodeURIComponent(`Enquiry from ${form.name} — ${form.type}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:hello@rimba.design?subject=${subject}&body=${body}`;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const input =
    "w-full bg-transparent border-b border-charcoal/25 focus:border-burgundy py-3.5 text-base font-light placeholder:text-charcoal/35 outline-none transition-colors";

  return (
    <form onSubmit={submit} noValidate className="max-w-2xl">
      {/* Honeypot field — hidden from humans */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => set("website", e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
        <div>
          <label htmlFor="name" className="text-[11px] uppercase tracking-[0.28em] text-charcoal/60">
            Name *
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Your full name"
            className={input}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-2 text-sm text-burgundy">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-[11px] uppercase tracking-[0.28em] text-charcoal/60">
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@production.com"
            className={input}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-2 text-sm text-burgundy">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-8">
        <label htmlFor="type" className="text-[11px] uppercase tracking-[0.28em] text-charcoal/60">
          Project Type
        </label>
        <select
          id="type"
          value={form.type}
          onChange={(e) => set("type", e.target.value)}
          className={`${input} cursor-pointer`}
        >
          {projectTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="mt-8">
        <label htmlFor="message" className="text-[11px] uppercase tracking-[0.28em] text-charcoal/60">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="Tell us about your production, timeline and vision…"
          className={`${input} resize-none`}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-2 text-sm text-burgundy">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-10 inline-flex items-center gap-4 bg-charcoal px-10 py-5 text-[13px] uppercase tracking-[0.28em] text-ivory transition-colors duration-300 hover:bg-burgundy disabled:opacity-60"
      >
        {status === "sending" ? "Preparing…" : "Send Enquiry"}
        <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
          <svg width="28" height="12" viewBox="0 0 28 12" fill="none" aria-hidden="true">
            <path d="M0 6h26M21 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {status === "sent" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 border border-charcoal/20 bg-ivory-deep/60 p-6"
            role="status"
          >
            <p className="font-serif text-xl italic">Your email client should now open.</p>
            <p className="mt-2 text-sm font-light text-charcoal/70 leading-relaxed">
              This form has no server backend yet, so your message opens in your own email app
              addressed to hello@rimba.design — nothing was sent automatically. Prefer to write
              directly? Email{" "}
              <a href="mailto:hello@rimba.design" className="underline underline-offset-4 hover:text-burgundy">
                hello@rimba.design
              </a>
              .
            </p>
          </motion.div>
        )}
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-burgundy"
            role="alert"
          >
            Something went wrong opening your email client. Please email hello@rimba.design directly.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
