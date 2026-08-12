import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useScroll } from "framer-motion";

function Work() {
  const workRef = useRef(null);

  const [imgs, setImgs] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "68%",
      left: "57%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll({
    target: workRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const percentage = progress * 100;

      let activeIndexes = [];

      if (percentage < 15) {
        activeIndexes = [];
      } else if (percentage < 30) {
        activeIndexes = [0];
      } else if (percentage < 45) {
        activeIndexes = [0, 1];
      } else if (percentage < 60) {
        activeIndexes = [0, 1, 2];
      } else if (percentage < 75) {
        activeIndexes = [0, 1, 2, 3];
      } else if (percentage < 90) {
        activeIndexes = [0, 1, 2, 3, 4];
      } else {
        activeIndexes = [0, 1, 2, 3, 4, 5];
      }

      setImgs((prev) =>
        prev.map((item, index) => ({
          ...item,
          isActive: activeIndexes.includes(index),
        })),
      );
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      ref={workRef}
      className="relative h-[250vh] bg-black text-white"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-8 md:px-10">
          <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Selected Work
          </span>

          <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
            01 — 06
          </span>
        </div>

        <div className="relative h-[70vh] min-h-[500px]">
          <h1 className="absolute inset-0 flex select-none items-center justify-center font-display text-[clamp(6rem,22vw,20rem)] font-black uppercase leading-[0.75] tracking-[-0.07em] text-white">
            Work
          </h1>

          <div className="pointer-events-none absolute inset-0">
            {imgs.map(
              (item, index) =>
                item.isActive && (
                  <img
                    key={index}
                    src={item.url}
                    alt=""
                    className="absolute w-32 -translate-x-1/2 -translate-y-1/2 rounded-xl object-cover shadow-2xl transition-all duration-500 md:w-40 lg:w-48"
                    style={{
                      top: item.top,
                      left: item.left,
                    }}
                  />
                ),
            )}
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

export default Work;
