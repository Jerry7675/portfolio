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
        background: "linear-gradient(135deg, #f7f7f7 80%, #ededed 100%)",
        color: "#232323",
        borderRadius: 0,
        boxShadow: "none",
        border: "none",
      }}
    >
      <div className="shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1570499995321-e2f9a3a3de5b?w=200&h=200&fit=crop"
          alt="Jerry Sandesh portrait"
          width={120}
          height={120}
          className="rounded-full border-4 shadow-lg"
          style={{ borderColor: "var(--accent)" }}
        />
      </div>
      <div>
        <h2 className="text-3xl font-extrabold mb-3" style={{ color: "#232323" }}>
          Hi, I'm Jerry 👋
        </h2>
        <p className="text-lg leading-relaxed mb-2" style={{ color: "#444" }}>
          <span className="font-semibold" style={{ color: "#232323" }}>
            Full Stack Developer
          </span>{" "}
          passionate about building impactful digital experiences.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-base" style={{ color: "#232323" }}>
          <li>Bridging design & engineering for delightful UIs</li>
          <li>Crafting robust backends & scalable systems</li>
          <li>Always learning, always building</li>
        </ul>
        <p className="mt-4 text-base" style={{ color: "#666" }}>
          When I’m not coding, you’ll find me exploring new tech, sketching ideas, or hiking in
          nature.
        </p>
      </div>
    </motion.div>
  );
}
