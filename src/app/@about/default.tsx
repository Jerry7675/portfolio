export default function AboutFallback() {
  return (
    <div
      className="text-center py-8"
      style={{ color: "var(--primary)", background: "var(--background)" }}
    >
      <h3 className="text-xl font-semibold mb-2">About section is loading...</h3>
      <p className="text-sm" style={{ color: "var(--secondary)" }}>
        Please wait while we fetch the latest about info. If this persists, try refreshing the page.
      </p>
    </div>
  );
}
