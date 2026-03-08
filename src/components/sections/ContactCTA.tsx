"use client";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-linear-to-br from-blue-100 to-blue-200 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl shadow-xl p-10 text-center border border-blue-100"
    >
      <h2 className="text-3xl font-extrabold mb-4 text-blue-900">Let’s Connect!</h2>
      <p className="text-lg mb-6 text-blue-800 max-w-xl mx-auto">
        Interested in collaborating, have a project in mind, or just want to chat about tech? I’m
        always open to new connections and opportunities.
      </p>
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block rounded-lg bg-blue-700 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-800 transition"
      >
        Contact Me
      </motion.a>
      <div className="mt-6 text-blue-700 text-sm">
        Or email me directly:{" "}
        <a href="mailto:jerry.sandesh@email.com" className="underline hover:text-blue-900">
          jerry.sandesh@email.com
        </a>
      </div>
    </motion.section>
  );
}
