import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Loader({ onComplete }) {
  const container = useRef(null);
  const countRef = useRef(null);
  const barRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useGSAP(
    () => {
      const counter = { value: 0 };

      const paint = () => {
        const rounded = Math.round(counter.value);
        if (countRef.current) countRef.current.textContent = `${rounded}%`;
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${counter.value / 100})`;
        }
      };

      const finish = () => {
        setLoading(false);
        onComplete?.();
      };

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: finish,
        });

        tl.to(counter, {
          value: 100,
          duration: 2,
          onUpdate: paint,
        }).to(
          container.current,
          { yPercent: -100, duration: 0.9 },
          "+=0.2", 
        );
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        const tl = gsap.timeline({ onComplete: finish });

        tl.to(counter, { value: 100, duration: 0.3, ease: "none", onUpdate: paint }).set(
          container.current,
          { yPercent: -100 },
        );
      });
    },
    { scope: container },
  );

  if (!loading) return null;

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-black text-white"
    >
      <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
        Loading
      </span>

      <span
        ref={countRef}
        className="font-display text-7xl md:text-8xl font-black tabular-nums"
      >
        0%
      </span>

      <div className="h-[2px] w-40 md:w-56 overflow-hidden bg-white/15">
        <div
          ref={barRef}
          className="h-full w-full origin-left scale-x-0 bg-white"
        />
      </div>
    </div>
  );
}