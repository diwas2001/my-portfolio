import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="min-h-screen px-4 pb-24">
      <section className="max-w-4xl mx-auto pt-8">
        <p className="fade-in-up text-[#c3e88d] text-center text-lg mb-10"># Projects</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`project-card fade-in-up delay-${(i % 3) + 1} terminal p-6 flex flex-col`}
            >
              <p className="text-sm">
                <span className="text-[#c792ea]">function</span>{" "}
                <span className="text-[#82aaff]">{project.title.replace(/\s+/g, "")}</span>
                <span className="text-[#89ddff]">()</span> {"{"}
              </p>
              <p className="text-[#546e7a] text-sm pl-4 mt-2">// {project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full border border-[#21262d] text-[#c3e88d]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-[#8b949e] text-xs mt-4 leading-relaxed">
                <span className="text-[#f78c6c]">// challenge:</span> {project.challenge}
              </p>

              <p className="text-sm mt-3">{"}"}</p>

              <div className="flex gap-4 mt-auto pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm text-[#89ddff] hover:underline"
                >
                  → github
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-sm text-[#c3e88d] hover:underline"
                  >
                    → live demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
