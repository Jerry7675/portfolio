import referencesData from "@/data/references.json";

export default function ReferencesPage() {
  return (
    <main
      className="min-h-screen max-w-5xl mx-auto p-6"
      style={{ background: "var(--background)" }}
    >
      <h1 className="text-4xl font-bold mb-4">References</h1>
      <p className="text-muted mb-6">
        References from colleagues and mentors (trusted contact info below).
      </p>
      {referencesData.length === 0 ? (
        <div className="rounded-lg border border-dashed border-surface-border p-8 text-center text-muted">
          No references added yet. Visit admin to add client or peer references.
        </div>
      ) : (
        <ul className="space-y-4">
          {referencesData.map((r: { name: string; role: string; quote: string }) => (
            <li
              key={r.name}
              className="rounded-lg border border-surface-border p-4 bg-surface shadow-sm"
            >
              <p className="font-semibold text-lg text-foreground">{r.name}</p>
              <p className="text-sm text-secondary mb-2">{r.role}</p>
              <p className="text-foreground">“{r.quote}”</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
