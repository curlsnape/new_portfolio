import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Download } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const skills = [
  "React", "JavaScript", "GSAP", "Tailwind CSS",
  "HTML / CSS", "Git & GitHub", "REST APIs", "Redux Toolkit",
  "Next.js", "Framer Motion", "Vite", "PHP",
];

const experience = [
  {
    role: "Frontend Engineer",
    company: "Hridayam Soft Solutions",
    period: "2025 — Present",
    desc: "Building real-world projects and deepening React, GSAP, and modern JavaScript skills through structured, project-based learning.",
  },
];

export default function About() {
  const container = useRef(null);
  const skillsRef = useRef(null);
  const expRef    = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".eyebrow",      { y: 16, opacity: 0, duration: 0.4 })
        .from(".heading-line", { y: 60, opacity: 0, duration: 0.7, stagger: 0.12 }, "-=0.15")
        .from(".about-text",   { y: 24, opacity: 0, duration: 0.5, stagger: 0.15 }, "-=0.3")
        .from(".bottom-row",   { y: 16, opacity: 0, duration: 0.5 }, "-=0.2");
    },
    { scope: container }
  );

  useGSAP(
    () => {
      gsap.from(".skill-pill", {
        y: 16,
        opacity: 0,
        duration: 0.4,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: skillsRef }
  );

  useGSAP(
    () => {
      gsap.from(".exp-item", {
        y: 24, opacity: 0, duration: 0.6, stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: expRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      });
    },
    { scope: expRef }
  );

  return (
    <>
      <section
        ref={container}
        className="min-h-[calc(100vh-72px)] bg-black text-white px-6 md:px-10 flex flex-col justify-center py-16"
      >
        <div className="max-w-6xl w-full mx-auto">
          <p className="eyebrow text-xs uppercase tracking-[0.25em] text-gray-500 mb-10">
            About me
          </p>

          <h1 className="font-display text-[clamp(3.5rem,8vw,9rem)] font-black uppercase leading-[0.82] tracking-tight mb-14">
            <span className="heading-line block">Building</span>
            <span className="heading-line block">interfaces</span>
            <span className="heading-line block text-white/30">that feel</span>
            <span className="heading-line block">simple.</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-10 border-t border-white/10 pt-10">
            <p className="about-text text-sm leading-relaxed text-gray-400 max-w-sm">
              I'm Akshay, a frontend developer who enjoys building clean,
              user-friendly web experiences with React and modern technologies.
            </p>
            <p className="about-text text-sm leading-relaxed text-gray-400 max-w-sm">
              I enjoy turning ideas into code, solving problems, and paying
              attention to the small details that make an interface feel polished.
            </p>
          </div>

          <div className="bottom-row mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/Akshay Sawant Resume.pdf"
              target="_blank"
              rel="noreferrer"
              download="Akshay Sawant Resume.pdf"
              className="inline-flex items-center gap-2 border-b border-white/40 pb-1 text-xs font-medium uppercase hover:border-white transition-colors"
            >
              Download Resume <Download size={13} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border-b border-white/40 pb-1 text-xs font-medium uppercase hover:border-white transition-colors"
            >
              Let's talk <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

      <section
        ref={skillsRef}
        className="bg-white text-black px-6 md:px-10 py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-12">Skills</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px border border-gray-100">
            {skills.map((skill) => (
              <div
                key={skill}
                className="skill-pill group flex items-center gap-3 px-6 py-5 border border-gray-100 hover:bg-black hover:text-white transition-colors duration-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gray-300 group-hover:bg-white shrink-0 transition-colors duration-300" />
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={expRef}
        className="bg-black text-white px-6 md:px-10 py-20 md:py-28"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-16">
            Experience
          </p>
          <div className="flex flex-col gap-12">
            {experience.map((item, i) => (
              <div key={i} className="exp-item grid md:grid-cols-12 gap-6 ">
                <div className="md:col-span-3">
                  <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">{item.period}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-black uppercase leading-tight">{item.role}</h3>
                  <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mt-2 mb-4">{item.company}</p>
                  <p className="text-gray-400 leading-relaxed text-sm max-w-xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
