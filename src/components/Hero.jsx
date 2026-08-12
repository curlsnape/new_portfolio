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
      className="flex h-[calc(100vh-72px)] flex-col overflow-hidden bg-black text-white"
    >
      <div className="px-6 pt-8 md:px-10">
        <h1 className="font-display whitespace-nowrap text-[clamp(4rem,7vw,8.5rem)] font-black uppercase leading-[0.78]">
          Frontend Developer
        </h1>
      </div>

      <div className="grid grid-cols-1 items-end gap-6 px-6 pt-6 pb-6 md:grid-cols-3 md:px-10">
        <p className="subtext max-w-xs text-xs leading-relaxed text-gray-400 md:text-sm">
          I build thoughtful digital experiences with React, JavaScript and
          modern web technologies.
        </p>

        <p className="subtext max-w-xs text-xs leading-relaxed text-gray-400 md:text-sm">
          Focused on clean interfaces, interaction and turning ideas into
          functional products.
        </p>

        <div className="subtext md:text-right">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border-b border-white pb-1 text-xs font-medium uppercase transition-all hover:gap-3 md:text-sm"
          >
            Get in touch
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div className="relative min-h-0 flex-1">
        <div className="absolute inset-0 overflow-hidden rounded-tl-[140px] rounded-bl-[140px] bg-[#eee8df]">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(#00000012 1px, transparent 1px), linear-gradient(90deg, #00000012 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="badge absolute top-[14%] left-[7%] z-10 flex -rotate-6 items-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 shadow-[3px_4px_0_rgba(0,0,0,0.18)]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-black" />

            <span className="text-[9px] font-bold uppercase leading-tight text-black md:text-[11px]">
              React
              <br />
              Experiences
            </span>

            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-black"
              strokeWidth={2.5}
            />
          </div>

          <div className="badge absolute top-[16%] right-[7%] z-10 flex rotate-6 items-center gap-2 rounded-xl bg-pink-500 px-4 py-3 shadow-[3px_4px_0_rgba(0,0,0,0.18)]">
            <Asterisk className="h-4 w-4 text-white" strokeWidth={2.5} />

            <span className="text-[9px] font-bold uppercase leading-tight text-white md:text-[11px]">
              Interactive
              <br />
              Interfaces
            </span>
          </div>

          <div className="badge absolute bottom-[12%] left-[10%] z-10 flex -rotate-3 items-center gap-2 rounded-xl bg-orange-500 px-4 py-3 shadow-[3px_4px_0_rgba(0,0,0,0.18)]">
            <Code2
              className="h-4 w-4 shrink-0 text-white"
              strokeWidth={2.5}
            />

            <span className="text-[9px] font-bold uppercase leading-tight text-white md:text-[11px]">
              Clean UI
              <br />
              Better UX
            </span>
          </div>

          <div className="badge absolute right-[10%] bottom-[10%] z-10 flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-full bg-lime-400 shadow-[3px_4px_0_rgba(0,0,0,0.18)] md:h-24 md:w-24">
            <Globe className="h-4 w-4 text-black" strokeWidth={1.5} />

            <span className="text-center text-[8px] font-bold uppercase leading-tight text-black md:text-[10px]">
              Modern
              <br />
              Web
            </span>
          </div>
        </div>

        <img
          src="/assets/me2.png"
          alt="Akshay"
          className="hero-photo absolute bottom-0 left-1/2 z-20 h-[103%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom pointer-events-none md:h-[110%]"
        />
      </div>
    </section>
  );
}
