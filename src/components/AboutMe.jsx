import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutBrief() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".ab-eyebrow, .ab-text, .ab-link", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="bg-white px-6 py-20 text-black md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <span className="ab-eyebrow text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
              About me
            </span>
          </div>

          <div className="md:col-span-9">
            <p className="ab-text max-w-4xl text-2xl font-medium leading-[1.15] tracking-tight md:text-4xl">
              I'm Akshay, a frontend developer who enjoys turning ideas into
              clean, functional interfaces — currently deepening my React and
              modern JavaScript skills through hands-on projects.
            </p>

            <a
              href="/about"
              className="ab-link mt-8 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold uppercase transition-all hover:gap-3"
            >
              Read more
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
