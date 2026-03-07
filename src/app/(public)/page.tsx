import HeroSection from "@/components/sections/HeroSection";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Hero Section Container */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-5xl">
          <HeroSection />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Explore My Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="/projects"
              className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Projects</h3>
              <p className="text-gray-700">Discover the applications and solutions I've built</p>
            </a>
            <a
              href="/skills"
              className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Skills</h3>
              <p className="text-gray-700">Technologies and tools I work with</p>
            </a>
            <a
              href="/experience"
              className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Experience</h3>
              <p className="text-gray-700">My professional journey and achievements</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
