import AboutPage from "../@about/page";
import ContactPage from "../@contact/page";
import MainPage from "../@main/page";
import ProjectsPage from "../@projects/page";
import SkillsPage from "../@skills/page";

export default function ParallelSlots() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {/* Hero — full width */}
      <div className="col-span-1 md:col-span-3">
        <MainPage />
      </div>

      {/* About — 2/3 width */}
      <div className="col-span-1 md:col-span-2">
        <AboutPage />
      </div>

      {/* Skills — 1/3 width */}
      <div className="col-span-1">
        <SkillsPage />
      </div>

      {/* Projects — full width */}
      <div className="col-span-1 md:col-span-3">
        <ProjectsPage />
      </div>

      {/* Contact — full width */}
      <div className="col-span-1 md:col-span-3">
        <ContactPage />
      </div>
    </div>
  );
}
