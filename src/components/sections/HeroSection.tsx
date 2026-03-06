export default function HeroSection() {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight drop-shadow-sm">
        Hi, I'm Jerry Sandesh
      </h1>
      <p className="text-xl md:text-2xl text-blue-700 max-w-2xl">
        Creative Full Stack Developer passionate about building impactful digital experiences.
      </p>
      <a
        href="#projects"
        className="mt-6 inline-block rounded-lg bg-blue-700 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-800 transition"
      >
        View My Work
      </a>
    </div>
  );
}
