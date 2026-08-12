import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP);

export default function Contact() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".eyebrow",       { y: 16, opacity: 0, duration: 0.4 })
        .from(".heading-line",  { y: 60, opacity: 0, duration: 0.7, stagger: 0.12 }, "-=0.15")
        .from(".contact-text",  { y: 24, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".contact-link",  { y: 16, opacity: 0, duration: 0.4, stagger: 0.1 }, "-=0.2");
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="min-h-[calc(100vh-72px)] bg-black text-white px-6 md:px-10 flex flex-col justify-center py-16"
    >
      <div className="max-w-6xl w-full mx-auto">
        <p className="eyebrow text-xs uppercase tracking-[0.25em] text-gray-500 mb-10">
          Contact
        </p>

        <h1 className="font-display text-[clamp(3.5rem,8vw,9rem)] font-black uppercase leading-[0.82] tracking-tight mb-14">
          <span className="heading-line block">Have a project</span>
          <span className="heading-line block">in mind?</span>
          <span className="heading-line block text-white/30">Let's talk.</span>
        </h1>

        <div className="border-t border-white/10 pt-10 grid md:grid-cols-2 gap-10">
          <p className="contact-text text-sm leading-relaxed text-gray-400 max-w-sm">
            I'm open to interesting frontend projects, collaborations, and
            opportunities where I can build meaningful web experiences.
          </p>

          <div className="flex flex-col gap-5">
            <a
              href="mailto:1akshaysawant@gmail.com"
              className="contact-link group inline-flex items-center justify-between border-b border-white/10 pb-5 hover:border-white/40 transition-colors"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-gray-500">Email</span>
              <span className="flex items-center gap-2 text-sm font-medium">
                1akshaysawant@gmail.com
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>

            <a
              href="https://github.com/curlsnape"
              target="_blank"
              rel="noreferrer"
              className="contact-link group inline-flex items-center justify-between border-b border-white/10 pb-5 hover:border-white/40 transition-colors"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-gray-500">GitHub</span>
              <span className="flex items-center gap-2 text-sm font-medium">
                curlsnape
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>

            <a
              href="https://in.linkedin.com/in/akshay-nandita-sawant-026059218"
              target="_blank"
              rel="noreferrer"
              className="contact-link group inline-flex items-center justify-between border-b border-white/10 pb-5 hover:border-white/40 transition-colors"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-gray-500">LinkedIn</span>
              <span className="flex items-center gap-2 text-sm font-medium">
                Akshay Sawant
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
