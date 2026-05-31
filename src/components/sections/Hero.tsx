export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 pt-20"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Jess
            </span>
          </h1>
          <p className="mt-4 text-xl font-medium text-slate-300 sm:text-2xl">
            3rd Year Artificial Intelligence and Machine Learning Student
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400 lg:mx-0 mx-auto">
          Third-year AI & ML student who enjoys building cool projects, exploring new technologies
           and turning ideas into practical solutions. Interested in machine learning, software development and continuously 
           learning new things along the way.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-400 hover:shadow-indigo-400/30"
            >
              View My Projects
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              Get In Touch !
            </a>
          </div>
        </div>

        {/* Profile image placeholder */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-500/30 blur-2xl" />
            <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-white/10 bg-slate-800/50 shadow-2xl sm:h-80 sm:w-80">
              <div className="flex flex-col items-center gap-3 text-slate-500">
                <svg
                  className="h-20 w-20 text-slate-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <span className="text-xs font-medium uppercase tracking-wider">
                  Profile Photo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
