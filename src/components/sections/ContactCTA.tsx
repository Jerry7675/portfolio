export default function ContactCTA() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-zinc-800 dark:to-zinc-900 rounded-xl shadow p-8 text-center">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Let’s Connect!</h2>
      <p className="text-lg mb-6 text-blue-800">
        Interested in working together or just want to say hi? I’d love to hear from you.
      </p>
      <a
        href="/contact"
        className="inline-block rounded-lg bg-blue-700 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-800 transition"
      >
        Contact Me
      </a>
    </div>
  );
}
