export default function ProjectsFallback() {
  return (
    <div
      className="text-center py-8"
      style={{ color: "var(--primary)", background: "var(--background)" }}
    >
      <h3 className="text-xl font-semibold mb-2">Projects are loading...</h3>
      <p className="text-sm" style={{ color: "var(--secondary)" }}>
        Fetching project highlights. If this takes too long, please refresh or check your
        connection.
      </p>
    </div>
  );
}
