type Project = {
  title: string;
  description: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "AI-Powered Dashboard",
    description:
      "Built an interactive dashboard that surfaces insights from large datasets using LLMs and analytics APIs.",
    tech: ["React", "TypeScript", "Tailwind", "Python", "FastAPI"],
  },
  {
    title: "RAG Knowledge Assistant",
    description:
      "Created a Retrieval-Augmented Generation assistant that answers questions over internal documents.",
    tech: ["Python", "LangChain", "Vector DB", "OpenAI API"],
  },
  {
    title: "Full-Stack E-commerce",
    description:
      "Developed a simple e-commerce platform with product listing, cart, and checkout flow.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
];

const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "C++", "Java"],
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "Django", "FastAPI"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  "Cloud & DevOps": ["AWS", "GCP", "Docker", "Jenkins"],
};

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <span className="text-sm font-semibold tracking-tight">
            Roopa Chiluvuri
          </span>
          <div className="flex gap-4 text-xs md:text-sm">
            <a href="#about" className="hover:text-emerald-400">
              About
            </a>
            <a href="#skills" className="hover:text-emerald-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-emerald-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-emerald-400">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16">
        {/* Hero */}
        <section
          id="hero"
          className="flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-400">
              Software Engineer · Full-Stack · AI
            </p>
            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Hi, I&apos;m Roopa.
              <br />I like building{" "}
              <span className="text-emerald-400">
                clean, reliable applications
              </span>{" "}
              that actually ship.
            </h1>
            <p className="max-w-xl text-sm text-slate-300 md:text-base">
              I work across the stack: APIs, data, and frontend. Recently,
              I&apos;ve been focused on integrating LLMs and AI workflows into
              real products while keeping things simple and maintainable.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="rounded-full border border-emerald-500 px-4 py-2 text-sm font-medium hover:bg-emerald-500 hover:text-slate-950"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-600 px-4 py-2 text-sm font-medium hover:border-emerald-400"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="mt-4 w-full max-w-xs self-center rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-lg md:mt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Snapshot
            </p>
            <ul className="mt-3 space-y-2 text-xs text-slate-200">
              <li>📍 Bay Area, CA</li>
              <li>⚙️ Full-Stack / Backend</li>
              <li>🧠 AI / LLM Integrations</li>
              <li>☁️ AWS · GCP · Docker</li>
            </ul>
          </div>
        </section>

        {/* About */}
        <section id="about" className="space-y-3 py-8">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="text-sm text-slate-300 md:text-base">
            I&apos;m a software engineer with experience in building web
            applications, APIs, and data-driven features. I care about clean
            abstractions, clarity in code, and making sure what we ship is
            actually useful to the people using it.
          </p>
          <p className="text-sm text-slate-300 md:text-base">
            My interests sit at the intersection of full-stack engineering and
            AI — things like RAG pipelines, internal tools powered by LLMs, and
            dashboards that help teams make decisions faster.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-4 py-8">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([category, list]) => (
              <div
                key={category}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <h3 className="text-sm font-semibold md:text-base">
                  {category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-200">
                  {list.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-800 px-2 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-4 py-8">
          <h2 className="text-xl font-semibold">Projects</h2>
          <p className="text-sm text-slate-300">
            A few projects that represent how I think about building and
            shipping software.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <div>
                  <h3 className="text-sm font-semibold md:text-base">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 md:text-sm">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-800 px-2 py-1 text-[10px] uppercase tracking-wide text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-4 py-8">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-sm text-slate-300 md:text-base">
            Open to software engineering roles (full-stack, backend, or AI-heavy
            products), as well as collaborations on interesting ideas.
          </p>
          <div className="space-y-2 text-sm text-slate-200">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:your-email@example.com"
                className="text-emerald-400 hover:underline"
              >
                your-email@example.com
              </a>
            </p>
            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:underline"
              >
                linkedin.com/in/your-profile
              </a>
            </p>
            <p>
              🧑‍💻 GitHub:{" "}
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:underline"
              >
                github.com/your-github
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Roopa Chiluvuri · Built with React &
        Tailwind
      </footer>
    </div>
  );
}

export default App;
