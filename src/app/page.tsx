import dynamic from "next/dynamic";

const MainSlot = dynamic(() => import("./@main/page"), { ssr: false });
const AboutSlot = dynamic(() => import("./@about/page"), { ssr: false });
const ProjectsSlot = dynamic(() => import("./@projects/page"), { ssr: false });
const SkillsSlot = dynamic(() => import("./@skills/page"), { ssr: false });
const ContactSlot = dynamic(() => import("./@contact/page"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-blue-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-4 py-12">
        <section>
          <MainSlot />
        </section>
        <section>
          <AboutSlot />
        </section>
        <section>
          <ProjectsSlot />
        </section>
        <section>
          <SkillsSlot />
        </section>
        <section>
          <ContactSlot />
        </section>
      </main>
    </div>
  );
}
