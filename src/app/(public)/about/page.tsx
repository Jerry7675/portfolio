import profileData from "@/data/profile.json";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <p className="text-lg text-gray-700">{profileData.summary}</p>
      <div className="mt-6">
        <p>
          <strong>Location:</strong> {profileData.location}
        </p>
        <p>
          <strong>Email:</strong> {profileData.email}
        </p>
        <p>
          <strong>Phone:</strong> {profileData.phone}
        </p>
      </div>
    </main>
  );
}
