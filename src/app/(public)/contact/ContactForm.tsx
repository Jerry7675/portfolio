"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
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
  );
}
