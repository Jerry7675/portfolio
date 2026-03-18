"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative overflow-hidden w-full flex flex-col items-center text-center gap-10 pt-12 px-4 sm:px-8 py-12"
      style={{
        color: "var(--foreground)",
        borderRadius: 0,
        boxShadow: "none",
        border: "none",
      }}
    >
      {/* Background image overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(135deg, var(--background) 80%, var(--surface) 100%), url('/black-white-background.jpg') center/cover no-repeat`,
          filter: "grayscale(1)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Profile Photo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "backOut" }}
        viewport={{ once: true }}
        className="relative w-48 h-48 md:w-56 md:h-56 overflow-hidden border-4 transition-colors duration-300 z-10 mx-auto"
        style={{ borderColor: "var(--accent)", borderRadius: 0, boxShadow: "none" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1570499995321-e2f9a3a3de5b?w=500&h=500&fit=crop"
          alt="Jerry Sandesh Profile"
          width={224}
          height={224}
          className="w-full h-full object-cover"
          priority
        />
        {/* Animated gradient overlay */}
        {/* Subtle overlay for grayscale effect */}
        <div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(to top, var(--shadow) 20%, transparent 100%)" }}
        />
      </motion.div>
      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="z-10 w-full flex flex-col items-center"
      >
        <h1
          className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-sm"
          style={{ color: "var(--primary)", textShadow: "0 2px 8px var(--shadow)" }}
        >
          Jerry Sandesh
        </h1>
        <p
          className="text-xl md:text-2xl font-semibold mt-2"
          style={{
            color: "var(--foreground)",
            background: "var(--surface)",
            padding: "0.25em 0.75em",
            borderRadius: "0.25em",
            display: "inline-block",
          }}
        >
          Full Stack Developer & Problem Solver
        </p>
      </motion.div>
      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl space-y-4 z-10 w-full mx-auto"
      >
        <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--foreground)" }}>
          I build beautiful, scalable web applications that solve real problems. With expertise in
          modern web technologies, I craft seamless user experiences and robust backend solutions.
        </p>
        <p className="text-base md:text-lg" style={{ color: "var(--muted)" }}>
          <span className="font-semibold" style={{ color: "var(--foreground)" }}>
            What I do:
          </span>{" "}
          Full-stack development, UI/UX design, API integration, and cloud deployment
        </p>
      </motion.div>
      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 mt-8 z-10 w-full justify-center items-center"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block rounded-lg px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          style={{ background: "var(--primary)", color: "var(--background)" }}
        >
          View Projects
        </motion.a>
      </motion.div>
      {/* Stats / Quick Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-8 border-t w-full z-10 mx-auto"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="text-center">
          <p className="text-3xl font-bold" style={{ color: "var(--primary)" }}>
            5+
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
            Years Experience
          </p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold" style={{ color: "var(--primary)" }}>
            20+
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
            Projects Completed
          </p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold" style={{ color: "var(--primary)" }}>
            100%
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
            Client Satisfaction
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
