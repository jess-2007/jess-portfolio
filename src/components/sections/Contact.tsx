"use client";

import { useState, type FormEvent } from "react";
import { submitContactForm } from "@/lib/contact";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const result = await submitContactForm({ name, email, message });

    if (result.success) {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("error");
      setErrorMessage(result.error ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Get In Touch
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-indigo-500" />
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Have a question or want to work together? Fill out the form below
            and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or question..."
                className="mt-2 block w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700 ring-1 ring-green-200">
                Thank you! Your message has been sent successfully.
              </p>
            )}

            {status === "error" && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700 ring-1 ring-red-200">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
