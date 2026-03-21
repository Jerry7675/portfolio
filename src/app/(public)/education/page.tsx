import educationData from "@/data/education.json";

export default function EducationPage() {
  return (
    <main
      className="min-h-screen max-w-5xl mx-auto p-6"
      style={{ background: "var(--background)" }}
    >
      <h1 className="text-4xl font-bold mb-6 text-foreground">Education</h1>
      <div className="space-y-6">
        {educationData.map((item) => (
          <article
            key={`${item.institution}-${item.degree}`}
            className="p-4 border border-surface-border rounded-lg bg-surface shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-primary">{item.degree}</h2>
            <p className="text-sm text-secondary">
              {item.institution} • {item.duration} • {item.location}
            </p>
            {item.notes && <p className="mt-2 text-foreground">{item.notes}</p>}
          </article>
        ))}
      </div>
    </main>
  );
}
