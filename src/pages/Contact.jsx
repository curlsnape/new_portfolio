import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Contact() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      tl.from(".eyebrow", {
        y: 12,
        opacity: 0,
        duration: 0.4,
      })
        .from(
          ".heading-line",
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
          },
          "-=0.15",
        )
        .from(
          ".contact-text",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3",
        )
        .from(
          ".contact-link",
          {
            y: 12,
            opacity: 0,
            duration: 0.4,
            stagger: 0.08,
          },
          "-=0.2",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="min-h-[90vh] flex items-center px-6 md:px-16"
    >
      <div className="max-w-6xl w-full mx-auto">
        <p className="eyebrow text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">
          Contact
        </p>

        <h1 className="text-6xl md:text-8xl font-semibold leading-[0.9] tracking-tight">
          <span className="heading-line block">Have a project</span>
          <span className="heading-line block">in mind?</span>
          <span className="heading-line block text-gray-400">Let's talk.</span>
        </h1>

        <p className="contact-text mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-500">
          I'm open to interesting frontend projects, collaborations, and
          opportunities where I can build meaningful web experiences.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="mailto:your@email.com"
            className="contact-link px-6 py-3 rounded-lg bg-black text-white font-medium"
          >
            Send me an email ↗
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="contact-link px-6 py-3 rounded-lg border border-gray-300 font-medium"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="contact-link px-6 py-3 rounded-lg border border-gray-300 font-medium"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
