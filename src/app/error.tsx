"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "#f5f7fb", color: "#111827" }}
    >
      <div
        className="relative text-center max-w-xl rounded-2xl border p-10 shadow-lg animate-in pulse-glow"
        style={{
          backgroundColor: "#ffffff",
          borderColor: "#d1d5db",
          boxShadow: "0 10px 28px rgba(15, 23, 42, 0.14)",
        }}
      >
        <div className="mb-6">
          <span className="inline-block text-7xl font-extrabold text-[#111827] bounce-emphasis">
            Oops
          </span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight mb-2" style={{ color: "#111827" }}>
          Something went wrong
        </h1>
        <p className="mb-5" style={{ color: "#6b7280" }}>
          {error?.message || "Unexpected error occurred."}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="btn-secondary px-5 py-2 rounded-lg"
          >
            Retry
          </button>
          <Link href="/" className="btn-primary px-5 py-2 rounded-lg">
            Home
          </Link>
        </div>

        <div className="absolute -right-5 -top-5 h-8 w-8 rounded-full bg-violet-300 opacity-80 float-up" />
        <div className="absolute left-16 -bottom-5 h-6 w-6 rounded-full bg-cyan-300 opacity-85 float-up" />
      </div>
    </div>
  );
}
