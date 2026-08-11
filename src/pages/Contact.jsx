export default function Contact() {
  return (
    <section className="min-h-[90vh] flex items-center px-6 md:px-16">
      <div className="max-w-6xl w-full mx-auto">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">
          Contact
        </p>

        <h1 className="text-6xl md:text-8xl font-semibold leading-[0.9] tracking-tight">
          Have a project
          <br />
          in mind?
          <br />
          <span className="text-gray-400">Let's talk.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-500">
          I'm open to interesting frontend projects, collaborations, and
          opportunities where I can build meaningful web experiences.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="mailto:your@email.com"
            className="px-6 py-3 rounded-lg bg-black text-white font-medium"
          >
            Send me an email ↗
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-300 font-medium"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-300 font-medium"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
