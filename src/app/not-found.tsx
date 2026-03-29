import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "#f5f7fb", color: "#1f2937" }}
    >
      <div
        className="relative text-center max-w-xl rounded-2xl border p-10 shadow-lg animate-in pulse-glow"
        style={{
          backgroundColor: "#ffffff",
          borderColor: "#e5e7eb",
          boxShadow: "0 12px 35px rgba(15, 23, 42, 0.12)",
        }}
      >
        <div className="mb-8">
          <span className="inline-block text-9xl font-black text-[#111827] bounce-emphasis">
            404
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4" style={{ color: "#111827" }}>
          Page not found
        </h1>
        <p className="mb-6" style={{ color: "#6b7280" }}>
          We couldn’t find the page you were looking for—looks like it’s floating away.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link href="/" className="btn-primary px-5 py-2 rounded-lg text-base">
            Return Home
          </Link>
        </div>

        <div className="absolute -right-6 -top-6 h-10 w-10 rounded-full bg-blue-300 opacity-80 float-up" />
        <div className="absolute -left-8 bottom-8 h-8 w-8 rounded-full bg-indigo-300 opacity-80 float-up" />
        <div className="absolute right-6 bottom-16 h-6 w-6 rounded-full bg-teal-300 opacity-80 float-up" />
      </div>
    </div>
  );
}
