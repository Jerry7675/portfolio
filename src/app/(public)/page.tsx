import HeroSection from "@/components/sections/HeroSection";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section Container */}
      <section
        className="min-h-screen flex items-center justify-center px-4 py-20"
        style={{ background: "var(--background)" }}
      >
        <div className="w-full max-w-5xl">
          <HeroSection />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4" style={{ background: "var(--background)" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ color: "var(--primary)" }}
          >
            Explore My Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="/projects"
              className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              style={{ background: "var(--accent)", border: "1px solid var(--border)" }}
            >
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                Projects
              </h3>
              <p className="" style={{ color: "var(--secondary)" }}>
                Discover the applications and solutions I've built
              </p>
            </a>
            <a
              href="/skills"
              className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              style={{ background: "var(--accent)", border: "1px solid var(--border)" }}
            >
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                Skills
              </h3>
              <p className="" style={{ color: "var(--secondary)" }}>
                Technologies and tools I work with
              </p>
            </a>
            <a
              href="/experience"
              className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              style={{ background: "var(--accent)", border: "1px solid var(--border)" }}
            >
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                Experience
              </h3>
              <p className="" style={{ color: "var(--secondary)" }}>
                My professional journey and achievements
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
