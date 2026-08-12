export default function AboutBrief() {
  return (
    <section className="bg-white text-black px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Label */}
          <div className="md:col-span-3">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
              About me
            </span>
          </div>

          {/* Content */}
          <div className="md:col-span-9">
            <p className="text-2xl md:text-4xl font-medium leading-[1.15] tracking-tight max-w-4xl">
              I'm Akshay, a frontend developer who enjoys turning ideas into
              clean, functional interfaces — currently deepening my React and
              modern JavaScript skills through hands-on projects.
            </p>

            <a
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold uppercase border-b border-black pb-1 hover:gap-3 transition-all"
            >
              Read more
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
