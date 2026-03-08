"use client";
import dynamic from "next/dynamic";

const MainSlot = dynamic(() => import("../@main/page"));
const AboutSlot = dynamic(() => import("../@about/page"));
const ProjectsSlot = dynamic(() => import("../@projects/page"));
const SkillsSlot = dynamic(() => import("../@skills/page"));
const ContactSlot = dynamic(() => import("../@contact/page"));

export default function ParallelSlots() {
  return (
    <>
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
    </>
  );
}
