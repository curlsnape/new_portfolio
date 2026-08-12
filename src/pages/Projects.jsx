import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const projects = [
  {
    id: "01",
    title: "Exoape",
    category: "Creative Development",
    description:
      "Interactive agency experience inspired by modern creative websites.",
    tech: ["React", "GSAP", "Three.js"],
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Movixer",
    category: "Web Application",
    description: "A movie discovery experience powered by external APIs.",
    tech: ["React", "API", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "OBYS",
    category: "Creative Website",
    description: "A recreation of a modern creative agency website.",
    tech: ["React", "GSAP", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Shopzo",
    category: "E-Commerce",
    description: "A modern shopping experience with state management.",
    tech: ["React", "Redux", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
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

          <h1 className="font-display text-[clamp(4rem,11vw,10rem)] font-black uppercase leading-[0.8] tracking-[-0.07em]">
            Selected
            <br />
            Work<span className="text-white/30">.</span>
          </h1>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-5 md:flex-row">
          <p className="max-w-md text-sm leading-relaxed text-white/50">
            A collection of interfaces, experiments and digital experiences
            I've built while exploring frontend development and creative web
            design.
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

                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
                >
                  ↗
                </motion.div>

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
                    ↗
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

      <footer className="mt-32 border-t border-white/10 py-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <span className="text-xs uppercase tracking-[0.25em] text-white/30">
            Let's build something together
          </span>

          <a
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-wide"
          >
            Start a conversation

            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Projects;