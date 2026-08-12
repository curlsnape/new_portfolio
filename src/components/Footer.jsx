export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-10 pb-8">
      <div className="max-w-6xl mx-auto border-t border-white/15 pt-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-black">
              A
            </span>

            <span className="font-semibold">rc.</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:your@email.com"
              className="transition-colors hover:text-white"
            >
              Email ↗
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Akshay
          </p>
        </div>
      </div>
    </footer>
  );
}
