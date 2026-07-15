import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";

export default function Dashboard() {
  const totalTech = new Set(skillGroups.flatMap((g) => g.skills.map((s) => s.name))).size;

  const stats = [
    { label: "Projects built", value: projects.length },
    { label: "Years learning", value: "3+" },
    { label: "Technologies", value: totalTech },
    { label: "GitHub commits", value: "500+" },
  ];

  return (
    <main className="min-h-screen px-4 pb-24">
      <section className="max-w-3xl mx-auto pt-8">
        <p className="fade-in-up text-[#c3e88d] text-center text-lg mb-10"># Dashboard</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`fade-in-up delay-${(i % 3) + 1} stat-card`}>
              <p className="text-3xl font-bold text-[#82aaff]">{stat.value}</p>
              <p className="text-xs text-[#8b949e] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#546e7a] mt-8">
          Numbers above are placeholders — update them as your real activity grows.
          Visitor count requires an analytics tool (e.g. Vercel Analytics or Plausible),
          which we can wire up next if you'd like.
        </p>
      </section>
    </main>
  );
}
