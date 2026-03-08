import AboutPage from "../@about/page";
import ContactPage from "../@contact/page";
import MainPage from "../@main/page";
import ProjectsPage from "../@projects/page";
import SkillsPage from "../@skills/page";

export default function ParallelSlots() {
  return (
    <>
      <section>
        <MainPage />
      </section>
      <section>
        <AboutPage />
      </section>
      <section>
        <ProjectsPage />
      </section>
      <section>
        <SkillsPage />
      </section>
      <section>
        <ContactPage />
      </section>
    </>
  );
}
