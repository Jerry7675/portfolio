import AboutPage from "../@about/page";
import ContactPage from "../@contact/page";
import MainPage from "../@main/page";
import ProjectsPage from "../@projects/page";
import SkillsPage from "../@skills/page";

export default function ParallelSlots() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Hero — full width */}
      <div>
        <MainPage />
      </div>

      {/* About & Skills — side by side on md+ */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 w-full">
          <AboutPage />
        </div>
        <div className="md:w-1/3 w-full">
          <SkillsPage />
        </div>
      </div>

      {/* Projects — full width */}
      <div>
        <ProjectsPage />
      </div>

      {/* Contact — full width */}
      <div>
        <ContactPage />
      </div>
    </div>
  );
}
