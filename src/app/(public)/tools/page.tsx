import toolsData from "@/data/tools.json";

export default function ToolsPage() {
  return (
    <main
      className="min-h-screen max-w-5xl mx-auto p-6"
      style={{ background: "var(--background)" }}
    >
      <h1 className="text-4xl font-bold mb-4">Tools & Technologies</h1>
      <p className="text-muted mb-6">
        The tools and platforms I use regularly for development and operations.
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {toolsData.map((tool) => (
          <li
            key={tool}
            className="rounded-lg border border-surface-border p-3 bg-surface text-foreground shadow-sm"
          >
            {tool}
          </li>
        ))}
      </ul>
    </main>
  );
}
