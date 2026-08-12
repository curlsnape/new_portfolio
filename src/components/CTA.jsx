export default function ContactCTA() {
  return (
    <section className="bg-white border-t border-zinc-300 text-black px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-5">
            What's next?
          </p>

          <h2 className="font-display text-[clamp(3.5rem,8vw,7rem)] font-black uppercase leading-[0.8] tracking-[-0.05em]">
            Let's build
            <br />
            something.
          </h2>
        </div>

        <a
          href="/contact"
          className="group inline-flex w-fit items-center gap-3 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold transition-transform duration-300 hover:scale-105"
        >
          Start a conversation
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}
