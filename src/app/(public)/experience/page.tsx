import experienceData from "@/data/experience.json";

export default function ExperiencePage() {
  return (
    <main
      className="min-h-screen max-w-5xl mx-auto p-6"
      style={{ background: "var(--background)" }}
    >
      <h1 className="text-4xl font-bold mb-6 text-foreground">Experience</h1>
      <div className="space-y-6">
        {experienceData.map((item) => (
          <article
            key={`${item.company}-${item.position}`}
            className="p-4 border border-surface-border rounded-lg bg-surface shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-primary">{item.position}</h2>
            <p className="text-sm text-secondary">
              {item.company} • {item.duration} • {item.location}
            </p>
            <ul className="list-disc px-5 mt-3 text-foreground">
              {item.details.map((detail: string) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}
