export default function ContactFallback() {
  return (
    <div
      className="text-center py-8"
      style={{ color: "var(--primary)", background: "var(--background)" }}
    >
      <h3 className="text-xl font-semibold mb-2">Contact section is loading...</h3>
      <p className="text-sm" style={{ color: "var(--secondary)" }}>
        Preparing contact options. If this takes too long, please refresh or try again later.
      </p>
    </div>
  );
}
