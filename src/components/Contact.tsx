"use client";

/**
 * Contact section (`#contact`): static details column + controlled message form.
 *
 * Sending mail from the browser cannot talk to Gmail directly (no credentials in the
 * client). This form therefore either:
 * 1) POSTs to Web3Forms (see `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local`), which
 *    delivers an email to the inbox tied to that key — closest to “instant” delivery, or
 * 2) If the key is missing, falls back to a `mailto:` link so the visitor’s default mail
 *    app opens with subject/body prefilled; they must press Send there (not automatic).
 */

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

/** Inbox shown in the UI and used as the `mailto:` recipient when Web3Forms is not set up */
const OWNER_EMAIL = "tyagishahnazar786@gmail.com";

/** Web3Forms JSON endpoint — works from static sites (GitHub Pages, etc.) with a public access key */
const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";

type SubmitPhase = "idle" | "submitting" | "success" | "error";

/** Result of attempting to POST to Web3Forms */
type Web3FormsResult =
  | { ok: true }
  | { ok: false; reason: "missing_key" }
  | { ok: false; reason: "api_error"; message: string };

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  /** Tracks button state and last outcome for inline feedback under the form */
  const [submitPhase, setSubmitPhase] = useState<SubmitPhase>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  /**
   * Builds a mailto URL with name, reply email, and the textarea body.
   * URL length limits exist on some clients; very long messages may need Web3Forms instead.
   */
  function buildMailtoHref(name: string, email: string, message: string): string {
    const subject = encodeURIComponent(`Portfolio contact from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n--- Message ---\n\n${message}`
    );
    return `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
  }

  /**
   * Sends submission through Web3Forms so you receive a real email without the visitor
   * opening a separate mail app. Register at web3forms.com, create an access key for this
   * inbox, and set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` (see `.env.example`).
   */
  async function sendViaWeb3Forms(
    name: string,
    email: string,
    message: string
  ): Promise<Web3FormsResult> {
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) return { ok: false, reason: "missing_key" };

    const res = await fetch(WEB3FORMS_SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Portfolio: message from ${name}`,
        name,
        email,
        message,
      }),
    });

    const data: unknown = await res.json().catch(() => null);
    const success =
      typeof data === "object" &&
      data !== null &&
      "success" in data &&
      (data as { success?: boolean }).success === true;

    if (!res.ok || !success) {
      const msg =
        typeof data === "object" &&
        data !== null &&
        "message" in data &&
        typeof (data as { message?: unknown }).message === "string"
          ? (data as { message: string }).message
          : "Could not send the message. Try again or use the email address on the left.";
      return { ok: false, reason: "api_error", message: msg };
    }

    return { ok: true };
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    setSubmitPhase("submitting");
    setFeedback(null);

    const accessKeyConfigured = Boolean(
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim()
    );

    if (accessKeyConfigured) {
      try {
        const result = await sendViaWeb3Forms(name, email, message);
        if (result.ok) {
          setSubmitPhase("success");
          setFeedback("Message sent. You should receive it in your inbox shortly.");
          setFormData({ name: "", email: "", message: "" });
        } else {
          setSubmitPhase("error");
          setFeedback(
            result.reason === "api_error"
              ? result.message
              : "Something went wrong. Please try again."
          );
        }
      } catch {
        setSubmitPhase("error");
        setFeedback("Network error. Check your connection and try again.");
      }
      return;
    }

    /**
     * No Web3Forms key: open the visitor’s mail client with everything prefilled.
     * Email is NOT sent until they confirm Send in that app — this is the only option
     * that needs zero third-party signup.
     */
    try {
      window.location.href = buildMailtoHref(name, email, message);
      setSubmitPhase("idle");
      setFeedback(
        "Your email app should open with this message ready to send. Tap Send there to deliver it to my inbox."
      );
    } catch {
      setSubmitPhase("error");
      setFeedback(
        `Could not open your mail app. Email me directly at ${OWNER_EMAIL} or add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY for one-click send.`
      );
    }
  };

  /** Single handler for all named fields in `formData` */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    /* Clear stale success/error banners once the visitor edits again */
    if (submitPhase === "success" || submitPhase === "error") {
      setSubmitPhase("idle");
      setFeedback(null);
    }
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section heading + divider (shared pattern with About / Skills / Projects) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: email, phone, location (no interaction beyond copy in browser) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">{OWNER_EMAIL}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <Phone className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+91 (863) 063-4457</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <MapPin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Gurugram, India</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: controlled fields + submit */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
                  placeholder="Your message..."
                />
              </div>
              {/* Primary action: Web3Forms POST when key is set, else `mailto:` fallback (see file doc) */}
              <motion.button
                type="submit"
                disabled={submitPhase === "submitting"}
                aria-busy={submitPhase === "submitting"}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:from-blue-500 disabled:hover:to-purple-600"
                whileHover={submitPhase === "submitting" ? undefined : { scale: 1.02 }}
                whileTap={submitPhase === "submitting" ? undefined : { scale: 0.98 }}
              >
                <Send size={20} aria-hidden />
                <span>
                  {submitPhase === "submitting" ? "Sending…" : "Send Message"}
                </span>
              </motion.button>
              {/* Live region: screen readers announce send outcome */}
              {feedback ? (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${
                    submitPhase === "success"
                      ? "text-green-400"
                      : submitPhase === "error"
                        ? "text-red-400"
                        : "text-gray-400"
                  }`}
                >
                  {feedback}
                </p>
              ) : null}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

