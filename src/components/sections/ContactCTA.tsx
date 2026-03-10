"use client";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full max-w-7xl mx-auto text-center px-8 py-12"
      style={{
        background: "linear-gradient(135deg, #f7f7f7 80%, #ededed 100%)",
        color: "#232323",
        borderRadius: 0,
        boxShadow: "none",
        border: "none",
      }}
    >
      <h2 className="text-3xl font-extrabold mb-4" style={{ color: "#232323" }}>
        Let’s Connect!
      </h2>
      <p className="text-lg mb-6 max-w-xl mx-auto" style={{ color: "#444" }}>
        Interested in collaborating, have a project in mind, or just want to chat about tech? I’m
        always open to new connections and opportunities.
      </p>
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block rounded-lg px-8 py-3 text-lg font-semibold shadow-lg transition"
        style={{
          background: "#232323",
          color: "#fff",
        }}
      >
        Contact Me
      </motion.a>
      <div className="mt-6 text-sm" style={{ color: "#666" }}>
        Or email me directly:{" "}
        <a href="mailto:jerry.sandesh@email.com" className="underline" style={{ color: "#232323" }}>
          jerry.sandesh@email.com
        </a>
      </div>
    </motion.section>
  );
}
