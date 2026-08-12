import React, { useEffect, useState } from "react";
import { useScroll } from "framer-motion";

function Work() {
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

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (data) => {
      const percentage = Math.floor(data * 100);

      const showImages = (activeIndexes) => {
        setImgs((prev) =>
          prev.map((item, index) => ({
            ...item,
            isActive: activeIndexes.includes(index),
          })),
        );
      };

      if (percentage < 2) {
        showImages([]);
      } else if (percentage < 4) {
        showImages([0]);
      } else if (percentage < 6) {
        showImages([0, 1]);
      } else if (percentage < 7) {
        showImages([0, 1, 2]);
      } else if (percentage < 9) {
        showImages([0, 1, 2, 3]);
      } else if (percentage < 11) {
        showImages([0, 1, 2, 3, 4]);
      } else {
        showImages([0, 1, 2, 3, 4, 5]);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section className="w-full bg-black text-white py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Selected Work
          </span>

          <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
            01 — 06
          </span>
        </div>

        {/* Work */}
        <div className="relative h-[70vh] min-h-[500px]">
          <h1
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              font-display
              text-[clamp(6rem,22vw,20rem)]
              font-black
              uppercase
              tracking-[-0.07em]
              leading-[0.75]
              text-white
              select-none
            "
          >
            Work
          </h1>

          {/* Images */}
          <div className="absolute inset-0 pointer-events-none">
            {imgs.map(
              (item, index) =>
                item.isActive && (
                  <img
                    key={index}
                    src={item.url}
                    alt=""
                    className="
                      absolute
                      w-32
                      md:w-40
                      lg:w-48
                      rounded-xl
                      object-cover
                      shadow-2xl
                      -translate-x-1/2
                      -translate-y-1/2
                    "
                    style={{
                      top: item.top,
                      left: item.left,
                    }}
                  />
                ),
            )}
          </div>
        </div>

        {/* Bottom link */}
        <div className="flex justify-end mt-8">
          <a
            href="/projects"
            className="
              group
              inline-flex
              items-center
              gap-2
              border-b
              border-white/30
              pb-1
              text-sm
              uppercase
              tracking-wide
              transition-all
              hover:border-white
            "
          >
            View all projects
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Work;
