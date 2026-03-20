import experienceData from "@/data/experience.json";

export default function ExperiencePage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Experience</h1>
      <div className="space-y-6">
        {experienceData.map((item) => (
          <article key={`${item.company}-${item.position}`} className="p-4 border rounded-lg">
            <h2 className="text-2xl font-semibold">{item.position}</h2>
            <p className="text-sm text-gray-500">
              {item.company} • {item.duration} • {item.location}
            </p>
            <ul className="list-disc px-5 mt-3 text-gray-700">
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
