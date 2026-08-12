import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactCTA() {
  const container = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(".cta-eyebrow", { y: 16, opacity: 0, duration: 0.4 })
          .from(
            ".cta-heading-line",
            { y: 50, opacity: 0, duration: 0.7, stagger: 0.12 },
            "-=0.15",
          )
          .from(".cta-button", { y: 16, opacity: 0, duration: 0.5 }, "-=0.25");
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".cta-eyebrow, .cta-heading-line, .cta-button", {
          opacity: 1,
          y: 0,
        });
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="bg-white border-t border-zinc-300 text-black px-6 md:px-10 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <p className="cta-eyebrow text-xs uppercase tracking-[0.25em] text-gray-500 mb-5">
            What's next?
          </p>

          <h2 className="font-display text-[clamp(3.5rem,8vw,7rem)] font-black uppercase leading-[0.8] tracking-[-0.05em]">
            <span className="cta-heading-line block">Let's build</span>
            <span className="cta-heading-line block">something.</span>
          </h2>
        </div>

        <a
          href="/contact"
          className="cta-button group inline-flex w-fit items-center gap-3 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold transition-transform duration-300 hover:scale-105"
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