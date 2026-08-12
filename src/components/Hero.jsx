import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Asterisk, Code2, Globe } from "lucide-react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      tl.from("h1", {
        y: 40,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          ".subtext",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
          },
          "-=0.35",
        )
        .from(
          ".hero-photo",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.25",
        )
        .from(
          ".badge",
          {
            y: 16,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
          },
          "-=0.3",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="h-[calc(100vh-72px)] bg-black text-white overflow-hidden flex flex-col"
    >
      {/* Heading */}
      <div className="px-6 md:px-10 pt-8">
        <h1 className="font-display text-[clamp(4rem,7vw,8.5rem)] whitespace-nowrap font-black uppercase leading-[0.78] ">
          Frontend Developer
        </h1>
      </div>

      {/* Description */}
      <div className="px-6 md:px-10 pt-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        <p className="subtext text-xs md:text-sm text-gray-400 max-w-xs leading-relaxed">
          I build thoughtful digital experiences with React, JavaScript and
          modern web technologies.
        </p>

        <p className="subtext text-xs md:text-sm text-gray-400 max-w-xs leading-relaxed">
          Focused on clean interfaces, interaction and turning ideas into
          functional products.
        </p>

        <div className="subtext md:text-right">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-medium uppercase border-b border-white pb-1 hover:gap-3 transition-all"
          >
            Get in touch
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Visual */}
      <div className="relative flex-1 min-h-0">
        {/* Beige visual card */}
        <div className="absolute inset-0 rounded-tl-[140px] rounded-bl-[140px] bg-[#eee8df] overflow-hidden">
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#00000012 1px, transparent 1px), linear-gradient(90deg, #00000012 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* React */}
          <div className="badge absolute z-10 left-[7%] top-[14%] -rotate-6 flex items-center gap-2 bg-yellow-400 rounded-xl px-4 py-3 shadow-[3px_4px_0_rgba(0,0,0,0.18)]">
            <span className="w-2 h-2 rounded-full bg-black shrink-0" />

            <span className="text-[9px] md:text-[11px] font-bold uppercase leading-tight text-black">
              React
              <br />
              Experiences
            </span>

            <ArrowUpRight
              className="w-4 h-4 text-black shrink-0"
              strokeWidth={2.5}
            />
          </div>

          {/* Interactive */}
          <div className="badge absolute z-10 right-[7%] top-[16%] rotate-6 flex items-center gap-2 bg-pink-500 rounded-xl px-4 py-3 shadow-[3px_4px_0_rgba(0,0,0,0.18)]">
            <Asterisk className="w-4 h-4 text-white" strokeWidth={2.5} />

            <span className="text-[9px] md:text-[11px] font-bold uppercase leading-tight text-white">
              Interactive
              <br />
              Interfaces
            </span>
          </div>

          {/* Clean UI */}
          <div className="badge absolute z-10 left-[10%] bottom-[12%] -rotate-3 flex items-center gap-2 bg-orange-500 rounded-xl px-4 py-3 shadow-[3px_4px_0_rgba(0,0,0,0.18)]">
            <Code2 className="w-4 h-4 text-white shrink-0" strokeWidth={2.5} />

            <span className="text-[9px] md:text-[11px] font-bold uppercase leading-tight text-white">
              Clean UI
              <br />
              Better UX
            </span>
          </div>

          {/* Modern Web */}
          <div className="badge absolute z-10 right-[10%] bottom-[10%] w-20 h-20 md:w-24 md:h-24 rounded-full bg-lime-400 shadow-[3px_4px_0_rgba(0,0,0,0.18)] flex flex-col items-center justify-center gap-1">
            <Globe className="w-4 h-4 text-black" strokeWidth={1.5} />

            <span className="text-[8px] md:text-[10px] font-bold uppercase leading-tight text-black text-center">
              Modern
              <br />
              Web
            </span>
          </div>
        </div>

        {/* Photo */}
        <img
          src="/assets/me2.png"
          alt="Akshay"
          className="
            hero-photo
            absolute
            z-20
            bottom-0
            left-1/2
            -translate-x-1/2
            h-[103%]
            md:h-[110%]
            w-auto
            max-w-none
            object-contain
            object-bottom
            pointer-events-none
          "
        />
      </div>
    </section>
  );
}
