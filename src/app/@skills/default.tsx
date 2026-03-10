export default function SkillsFallback() {
  return (
    <div
      className="text-center py-8"
      style={{ color: "var(--primary)", background: "var(--background)" }}
    >
      <h3 className="text-xl font-semibold mb-2">Skills overview is loading...</h3>
      <p className="text-sm" style={{ color: "var(--secondary)" }}>
        Loading skillset and technologies. If this persists, try refreshing the page.
      </p>
    </div>
  );
}
