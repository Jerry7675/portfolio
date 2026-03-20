"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSnippet() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-8 py-12"
      style={{
        background: "linear-gradient(135deg, var(--background) 80%, var(--surface) 100%)",
        color: "var(--foreground)",
        borderRadius: 0,
        boxShadow: "none",
        border: "none",
      }}
    >
      <div className="shrink-0">
        <Image
          src="/sandeshPhoto.png"
          alt="Jerry Sandesh portrait"
          width={120}
          height={120}
          className="rounded-full border-4 shadow-lg"
          style={{ borderColor: "var(--accent)" }}
        />
      </div>
      <div>
        <h2 className="text-3xl font-extrabold mb-3" style={{ color: "var(--primary)" }}>
          Hi, I'm Jerry 👋
        </h2>
        <p className="text-lg leading-relaxed mb-2" style={{ color: "var(--muted)" }}>
          <span className="font-semibold" style={{ color: "var(--foreground)" }}>
            Full-Stack JavaScript Developer
          </span>{" "}
          specializing in React, Next.js, TypeScript, NestJS, Prisma, and cross-platform mobile
          apps.
        </p>
        <p className="text-base leading-relaxed mb-2" style={{ color: "var(--muted)" }}>
          I bring a strong blend of frontend craftsmanship and backend reliability. My day-to-day
          work includes building optimized user interfaces, writing clean API services, and ensuring
          smooth client-server interactions with resilient authentication and data handling.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-base" style={{ color: "var(--foreground)" }}>
          <li>Bridging design & engineering for delightful UIs with pixel-perfect layouts</li>
          <li>Crafting robust backends and scalable microservices for real-time app flows</li>
          <li>
            Writing secure, maintainable code with tests, linting & standard style across teams
          </li>
          <li>Mentoring juniors, performing code reviews, and collaborating across Agile teams</li>
        </ul>
        <p className="mt-4 text-base" style={{ color: "var(--muted)" }}>
          Key achievements:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-base" style={{ color: "var(--foreground" }}>
          <li>
            Delivered a production Yeti Nepal app using Next.js and NestJS with full JWT security.
          </li>
          <li>Implemented an automated CI/CD pipeline to reduce deployment friction by 30%.</li>
          <li>Built mobile experiences in Expo for cross-platform Android/iOS use.</li>
        </ul>
        <p className="mt-4 text-base" style={{ color: "var(--muted)" }}>
          Outside work, I enjoy tech blogging, learning machine learning model integration, and
          contributing to open-source utilities for developer productivity.
        </p>
      </div>
    </motion.div>
  );
}
