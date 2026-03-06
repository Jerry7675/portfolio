import Navbar from "@/components/layout/Navbar";
import AboutSnippet from "@/components/sections/AboutSnippet";
import ContactCTA from "@/components/sections/ContactCTA";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import HeroSection from "@/components/sections/HeroSection";
import SkillBar from "@/components/ui/SkillBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 font-sans dark:bg-black">
      <Navbar />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-4 py-12">
        {/* Hero Section */}
        <section className="w-full px-6 py-20">
          <HeroSection />
        </section>

        {/* About/Intro Section */}
        <section className="w-full max-w-3xl mx-auto px-6 py-12">
          <AboutSnippet />
        </section>

        {/* Featured Projects */}
        <section className="w-full px-6 py-12">
          <FeaturedProjects />
        </section>

        {/* Skills Overview */}
        <section className="w-full max-w-3xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900">Skills & Technologies</h2>
          <SkillBar />
        </section>

        {/* Contact/CTA */}
        <section className="w-full max-w-2xl mx-auto px-6 py-16">
          <ContactCTA />
        </section>
      </main>
    </div>
  );
}
