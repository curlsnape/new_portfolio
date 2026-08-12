import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Pill from "../components/Pill";
import Button from "../components/Button";

gsap.registerPlugin(useGSAP);

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "HTML/CSS",
  "Git",
  "REST APIs",
];

export default function About() {
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
          ".about-text",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
          },
          "-=0.3",
        )
        .from(
          ".skill-pill",
          {
            y: 12,
            opacity: 0,
            duration: 0.4,
            stagger: 0.05,
          },
          "-=0.2",
        )
        .from(
          ".bottom-row",
          {
            y: 12,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.2",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="min-h-[calc(100vh-10vh)] bg-white text-black px-8 md:px-16 flex items-center"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Label */}
        <p className="eyebrow text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">
          About me
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* Heading */}
          <div>
            <h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
              <span className="heading-line block">Building</span>
              <span className="heading-line block">interfaces</span>
              <span className="heading-line block">that feel</span>
              <span className="heading-line block text-gray-400">
                simple.
              </span>
            </h1>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-12">
            <div>
              <p className="about-text text-lg md:text-xl leading-relaxed text-gray-600">
                I'm a frontend developer who enjoys building clean,
                user-friendly web experiences with React and modern
                technologies.
              </p>

              <p className="about-text text-lg md:text-xl leading-relaxed text-gray-600 mt-6">
                I enjoy turning ideas into code, solving problems, and paying
                attention to the small details that make an interface feel
                polished.
              </p>
            </div>

            {/* Skills */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-5">
                Skills
              </p>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill inline-block">
                    <Pill>{skill}</Pill>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="bottom-row mt-20 pt-6 border-t border-gray-200 flex items-center justify-between">
          <p className="text-gray-500">
            Open to interesting projects & opportunities.
          </p>

          <Button to="/contact">Let's talk ↗</Button>
        </div>
      </div>
    </section>
  );
}