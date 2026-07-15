import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <main className="min-h-screen px-4 pb-24">
      <section className="max-w-2xl mx-auto pt-8">
        <p className="fade-in-up text-[#c3e88d] text-center text-lg mb-10"># Skills</p>

        {skillGroups.map((group) => (
          <div key={group.category} className="terminal mb-8">
            <div className="terminal-bar">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="ml-2 text-xs text-[#8b949e]">{group.category.toLowerCase()}.js</span>
            </div>
            <div className="p-6">
              <p className="text-[#82aaff] font-semibold mb-4">{group.category}</p>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#c9d1d9]">{skill.name}</span>
                      <span className="text-[#8b949e]">{skill.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
