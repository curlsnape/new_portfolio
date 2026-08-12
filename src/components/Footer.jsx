export default function Footer() {
  return (
    <footer className="bg-black px-6 pb-6 text-white md:px-10">
      <div className="mx-auto max-w-7xl border-t border-white/15 pt-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-black">
              A
            </span>

            <span className="font-medium">Akshay Sawant</span>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a
              href="https://github.com/curlsnape"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://in.linkedin.com/in/akshay-nandita-sawant-026059218"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:1akshaysawant@gmail.com"
              className="transition-colors hover:text-white"
            >
              Email ↗
            </a>
          </div>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Akshay
          </p>
        </div>
      </div>
    </footer>
  );
}
