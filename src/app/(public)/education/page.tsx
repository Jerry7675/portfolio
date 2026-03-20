import educationData from "@/data/education.json";

export default function EducationPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Education</h1>
      <div className="space-y-6">
        {educationData.map((item) => (
          <article key={`${item.institution}-${item.degree}`} className="p-4 border rounded-lg">
            <h2 className="text-2xl font-semibold">{item.degree}</h2>
            <p className="text-sm text-gray-500">
              {item.institution} • {item.duration} • {item.location}
            </p>
            {item.notes && <p className="mt-2 text-gray-700">{item.notes}</p>}
          </article>
        ))}
      </div>
    </main>
  );
}
