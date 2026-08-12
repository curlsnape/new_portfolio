import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Exoape",
    category: "Creative Development",
    description: "Interactive agency experience inspired by modern web design.",
    tech: ["React", "GSAP", "Three.js"],
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "02",
    title: "Movixer",
    category: "Web Application",
    description: "A movie discovery experience powered by external APIs.",
    tech: ["React", "API", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "03",
    title: "OBYS",
    category: "Creative Website",
    description: "A recreation of a modern creative agency website.",
    tech: ["React", "GSAP", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "04",
    title: "Shopzo",
    category: "E-Commerce",
    description: "A modern shopping experience with state management.",
    tech: ["React", "Redux", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "05",
    title: "Actify",
    category: "Client Work",
    description: "An education platform focused on a clean digital experience.",
    tech: ["React", "Tailwind", "SEO"],
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "06",
    title: "Redux Todo",
    category: "Application",
    description: "A task management application built with Redux Toolkit.",
    tech: ["React", "Redux Toolkit", "Vite"],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1600&auto=format&fit=crop",
    link: "#",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <main className="min-h-screen bg-black text-white px-5 py-8 md:px-10 lg:px-14">
      {/* Header */}
      <header className="mb-20">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <span className="text-xs uppercase tracking-[0.25em] text-white/40">
            Selected Work
          </span>

          <span className="text-xs uppercase tracking-[0.25em] text-white/40">
            06 Projects
          </span>
        </div>

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

      {/* Projects Grid */}
      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => {
          const isActive = activeProject === project.id;
          const hasActiveProject = activeProject !== null;

          return (
            <motion.article
              key={project.id}
              layout
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              animate={{
                scale: isActive ? 1.025 : 1,
                opacity:
                  hasActiveProject && !isActive
                    ? 0.45
                    : 1,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-white/5">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  animate={{
                    scale: isActive ? 1.08 : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/40"
                />

                {/* View Project */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 15,
                  }}
                  transition={{ duration: 0.35 }}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black"
                >
                  ↗
                </motion.div>

                {/* Project Number */}
                <div className="absolute left-4 top-4">
                  <span className="text-xs font-medium tracking-wider text-white/70">
                    {project.id}
                  </span>
                </div>

                {/* Hover Category */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 10,
                  }}
                  className="absolute bottom-4 left-4"
                >
                  <span className="rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-[10px] uppercase tracking-wider backdrop-blur-md">
                    {project.category}
                  </span>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="mt-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-medium tracking-tight">
                      {project.title}
                    </h2>

                    <p className="mt-1 text-xs text-white/40">
                      {project.description}
                    </p>
                  </div>

                  <span
                    className={`
                      text-lg transition-transform duration-300
                      ${
                        isActive
                          ? "translate-x-0 -translate-y-1"
                          : "translate-x-0 translate-y-0"
                      }
                    `}
                  >
                    ↗
                  </span>
                </div>

                {/* Tech Stack */}
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

      {/* Footer */}
      <footer className="mt-32 border-t border-white/10 py-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <span className="text-xs uppercase tracking-[0.25em] text-white/30">
            That's all — for now.
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