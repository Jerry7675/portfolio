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
      className="flex flex-col items-center text-center gap-10 pt-12 rounded-2xl shadow-xl p-10 border"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        borderColor: "var(--border)",
      }}
    >
      {/* Profile Photo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "backOut" }}
        viewport={{ once: true }}
        className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-2xl border-4 transition-colors duration-300"
        style={{ borderColor: "var(--accent)" }}
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
      >
        <h1
          className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-sm"
          style={{ color: "var(--primary)" }}
        >
          Jerry Sandesh
        </h1>
        <p className="text-xl md:text-2xl font-semibold mt-2" style={{ color: "var(--secondary)" }}>
          Full Stack Developer & Problem Solver
        </p>
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl space-y-4"
      >
        <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--primary)" }}>
          I build beautiful, scalable web applications that solve real problems. With expertise in
          modern web technologies, I craft seamless user experiences and robust backend solutions.
        </p>
        <p className="text-base md:text-lg" style={{ color: "var(--secondary)" }}>
          <span className="font-semibold" style={{ color: "var(--primary)" }}>
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
        className="flex flex-col sm:flex-row gap-4 mt-8"
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
        className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-blue-200 w-full"
      >
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-700">5+</p>
          <p className="text-sm text-gray-600 mt-1">Years Experience</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-700">20+</p>
          <p className="text-sm text-gray-600 mt-1">Projects Completed</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-700">100%</p>
          <p className="text-sm text-gray-600 mt-1">Client Satisfaction</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
