import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Exoape",
    category: "Creative Development",
    description:
      "Interactive agency experience inspired by modern creative websites.",
    tech: ["React", "GSAP", "Framer Motion"],
    image: "/assets/exoape.png",
    link: "https://exoape-clone-beta.vercel.app/",
  },
  {
    id: "02",
    title: "Movixer",
    category: "Web Application",
    description: "A movie discovery experience powered by external APIs.",
    tech: ["React", "API", "Redux Toolkit"],
    image: "/assets/Movixer.png",
    link: "https://movixer.vercel.app/",
  },
  {
    id: "03",
    title: "Refokus",
    category: "Creative Website",
    description: "A recreation of a modern creative agency website.",
    tech: ["GSAP", "JavaScript"],
    image: "/assets/refokus.png",
    link: "https://refokus-clone-nu.vercel.app/",
  },
  {
    id: "04",
    title: "Obys",
    category: "Creative Development",
    description: "A recreation of a modern creative agency website.",
    tech: ["GSAP", "JavaScript"],
    image: "/assets/obys.png",
    link: "https://curlsnape.github.io/OBYS-AGENCY/",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".project-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        delay: 0.2,
        ease: "power3.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-black px-5 py-8 text-white md:px-10 lg:px-14"
    >
      <header className="project-header mb-20">
        <div className="mt-16 max-w-5xl">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
            Projects — 2026
          </p>

          <h1 className="font-display text-[clamp(4rem,11vw,10rem)] font-black uppercase leading-[0.8]">
            Selected
            <br />
            Work<span className="text-white/30">.</span>
          </h1>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-5 md:flex-row">
          <p className="max-w-md text-sm leading-relaxed text-white/50">
            A collection of interfaces, experiments and digital experiences I've
            built while exploring frontend development and creative web design.
          </p>

          <span className="text-xs uppercase tracking-[0.2em] text-white/30">
            React / JavaScript / Motion
          </span>
        </div>
      </header>

      <section className="grid grid-cols-1 gap-x-4 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => {
          const isActive = activeProject === project.id;
          const hasActiveProject = activeProject !== null;

          return (
            <motion.article
              key={project.id}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              animate={{
                scale: isActive ? 1.035 : 1,
                opacity: hasActiveProject && !isActive ? 0.4 : 1,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="project-card group cursor-pointer"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-white/5">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  animate={{
                    scale: isActive ? 1.08 : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="h-full w-full object-cover"
                />

                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 bg-black/35"
                />

                <div className="absolute left-4 top-4">
                  <span className="text-xs font-medium tracking-wider text-white/70">
                    {project.id}
                  </span>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 hover:scale-110"
                  aria-label={`Visit ${project.title} project`}
                >
                  <ArrowUpRight size={16} />
                </a>

                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 10,
                  }}
                  transition={{ duration: 0.25 }}
                  className="absolute bottom-4 left-4"
                >
                  <span className="rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-wider backdrop-blur-md">
                    {project.category}
                  </span>
                </motion.div>
              </div>

              <div className="mt-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-medium tracking-tight">
                      {project.title}
                    </h2>

                    <p className="mt-1 text-xs leading-relaxed text-white/40">
                      {project.description}
                    </p>
                  </div>

                  <motion.span
                    animate={{
                      x: isActive ? 3 : 0,
                      y: isActive ? -3 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className="text-lg"
                  >
                    <ArrowUpRight size={16} />
                  </motion.span>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-wider text-white/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>

      <footer className="mt-20 border-t border-white/10 pt-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <span className="text-xs uppercase tracking-[0.25em] text-white/30">
            Let's build something together
          </span>

          <a
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-wide"
          >
            Start a conversation
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Projects;
