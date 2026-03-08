import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSnippet() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative bg-white/90 dark:bg-zinc-900 rounded-2xl shadow-xl p-10 text-gray-800 dark:text-gray-100 flex flex-col md:flex-row items-center gap-8 border border-blue-100"
    >
      <div className="flex-shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1570499995321-e2f9a3a3de5b?w=200&h=200&fit=crop"
          alt="Jerry Sandesh portrait"
          width={120}
          height={120}
          className="rounded-full border-4 border-blue-200 shadow-lg"
        />
      </div>
      <div>
        <h2 className="text-3xl font-extrabold mb-3 text-blue-900">Hi, I'm Jerry 👋</h2>
        <p className="text-lg leading-relaxed mb-2">
          <span className="font-semibold text-blue-700">Full Stack Developer</span> passionate about
          building impactful digital experiences.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-base text-blue-800">
          <li>Bridging design & engineering for delightful UIs</li>
          <li>Crafting robust backends & scalable systems</li>
          <li>Always learning, always building</li>
        </ul>
        <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
          When I’m not coding, you’ll find me exploring new tech, sketching ideas, or hiking in
          nature.
        </p>
      </div>
    </motion.div>
  );
}
