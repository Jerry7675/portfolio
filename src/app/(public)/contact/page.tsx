"use client";

import { useState } from "react";
import profileData from "@/data/profile.json";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("Please fill all fields before sending.");
      return;
    }

    setStatus("Sending message...");
    setTimeout(() => {
      setStatus("Message sent! I will get back in 24-48 hours.");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <main className="mx-auto max-w-5xl p-6">
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Contact</h1>
        <p className="text-muted mb-6">
          Let’s connect. Whether you’re interested in a collaboration, a contract role, or have a
          product idea, send me a message and I’ll reply as quickly as possible.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-surface-border p-4 bg-surface shadow-sm">
            <h2 className="font-semibold mb-2 text-foreground">Email</h2>
            <a
              href={`mailto:${profileData.email}`}
              className="text-link hover:text-link-hover hover:underline"
            >
              {profileData.email}
            </a>
          </div>
          <div className="rounded-xl border border-surface-border p-4 bg-surface shadow-sm">
            <h2 className="font-semibold mb-2 text-foreground">Phone</h2>
            <a
              href={`tel:${profileData.phone}`}
              className="text-link hover:text-link-hover hover:underline"
            >
              {profileData.phone}
            </a>
          </div>
          <div className="rounded-xl border border-surface-border p-4 bg-surface shadow-sm">
            <h2 className="font-semibold mb-2 text-foreground">Location</h2>
            <p className="text-foreground">{profileData.location}</p>
          </div>
          <div className="rounded-xl border border-surface-border p-4 bg-surface shadow-sm">
            <h2 className="font-semibold mb-2 text-foreground">Connect</h2>
            <ul className="space-y-1">
              <li>
                <a
                  href={`https://${profileData.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={`https://${profileData.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-xl border p-6 bg-white shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Send a message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-secondary">Name</span>
              <input
                type="text"
                value={form.name}
                onChange={handleChange("name")}
                className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-secondary">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-medium text-secondary">Subject</span>
            <input
              type="text"
              value={form.subject}
              onChange={handleChange("subject")}
              className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Project, collaboration, or query"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-secondary">Message</span>
            <textarea
              value={form.message}
              onChange={handleChange("message")}
              rows={6}
              className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Tell me more about your idea..."
            />
          </label>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700 transition"
          >
            Send message
          </button>
          {status && <p className="text-sm text-primary">{status}</p>}
        </form>
      </section>
    </main>
  );
}
