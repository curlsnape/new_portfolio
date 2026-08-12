import { useRef } from "react";
import {
  Atom,
  Triangle,
  Server,
  Braces,
  Wind,
  FileCode2,
  RefreshCw,
} from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const techs = [
  { name: "React",       icon: Atom,      color: "#61DAFB" },
  { name: "JavaScript",  icon: Braces,    color: "#F7DF1E" },
  { name: "Tailwind CSS",icon: Wind,      color: "#38BDF8" },
  { name: "HTML5",       icon: FileCode2, color: "#E34F26" },
  { name: "Next.js",     icon: Triangle,  color: "#FFFFFF" },
  { name: "AJAX",        icon: RefreshCw, color: "#22C55E" },
  { name: "PHP",         icon: Server,    color: "#777BB4" },
];

const items = [...techs, ...techs];

export default function Marquee() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".marquee-item", {
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="relative overflow-hidden bg-black py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent md:w-28" />

      <div className="group">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {items.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-${index}`}
                className="marquee-item flex w-[140px] shrink-0 flex-col items-center gap-2 opacity-60 grayscale transition-all duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0"
              >
                <Icon size={36} style={{ color: tech.color }} strokeWidth={1.75} />
                <span className="text-[10px] uppercase tracking-widest text-gray-400">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
