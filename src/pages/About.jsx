import Pill from "../components/Pill";
import Button from "../components/Button";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "HTML/CSS",
  "Git",
  "REST APIs",
];

export default function About() {
  return (
    <section className="min-h-[calc(100vh-10vh)] bg-white text-black px-8 md:px-16 flex items-center">
      <div className="max-w-6xl w-full mx-auto">
        {/* Label */}
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">
          About me
        </p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* Heading */}
          <div>
            <h1 className="text-6xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
              Building
              <br />
              interfaces
              <br />
              that feel
              <br />
              <span className="text-gray-400">simple.</span>
            </h1>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-12">
            <div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600">
                I'm a frontend developer who enjoys building clean,
                user-friendly web experiences with React and modern
                technologies.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 mt-6">
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
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-6 border-t border-gray-200 flex items-center justify-between">
          <p className="text-gray-500">
            Open to interesting projects & opportunities.
          </p>

          <Button to="/contact">Let's talk ↗</Button>
        </div>
      </div>
    </section>
  );
}
