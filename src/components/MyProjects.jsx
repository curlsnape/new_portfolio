import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const imgs = [
  { url: "/assets/exoape.png",  top: "50%", left: "50%" },
  { url: "/assets/refokus.png", top: "56%", left: "44%" },
  { url: "/assets/Movixer.png", top: "45%", left: "56%" },
  { url: "/assets/obys.png",    top: "60%", left: "53%" },
];

function Projects() {
  const workRef = useRef(null);
  const imgRefs = useRef([]);

  useGSAP(
    () => {
      imgs.forEach((_, i) => {
        gsap.fromTo(
          imgRefs.current[i],
          { opacity: 0, scale: 0.88, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: workRef.current,
              start: `${15 + i * 17}% top`,
              end:   `${32 + i * 17}% top`,
              scrub: 0.6,
            },
          }
        );
      });
    },
    { scope: workRef }
  );

  return (
    <section ref={workRef} className="relative h-[250vh] bg-black text-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-8 md:px-10">
          <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Selected Work
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
            01 — 04
          </span>
        </div>

        <div className="relative h-[70vh] min-h-[500px]">
          <h1 className="absolute inset-0 flex select-none items-center justify-center font-display text-[clamp(6rem,10vw,20rem)] font-black uppercase leading-[0.75] text-white">
            Projects
          </h1>

          <div className="pointer-events-none absolute inset-0">
            {imgs.map((item, index) => (
              <img
                key={index}
                ref={(el) => (imgRefs.current[index] = el)}
                src={item.url}
                alt=""
                className="absolute w-32 -translate-x-1/2 -translate-y-1/2 rounded-xl object-contain shadow-2xl opacity-0 md:w-64 md:h-52 lg:w-96 lg:h-64"
                style={{ top: item.top, left: item.left }}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end px-6 md:px-10">
          <a
            href="/projects"
            className="group inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm uppercase tracking-wide transition-all hover:border-white"
          >
            View all projects
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
