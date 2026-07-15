export default function About() {
  return (
    <main className="min-h-screen px-4 pb-24">
      <section className="fade-in-up max-w-2xl mx-auto pt-8">
        <div className="terminal mb-10">
          <div className="terminal-bar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="ml-2 text-xs text-[#8b949e]">about.md</span>
          </div>
          <div className="p-8">
            <p className="text-[#c3e88d] mb-3 text-lg"># About Me</p>
            <p className="text-[#c9d1d9] leading-relaxed">
              I am a motivated and enthusiastic graduate with a strong
              interest in software engineering, data analysis, machine
              learning, and web development. I am eager to apply my knowledge
              in a professional environment, contribute to innovative
              projects, and continue growing as a technology professional.
            </p>
          </div>
        </div>

        <div className="terminal mb-10">
          <div className="terminal-bar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="ml-2 text-xs text-[#8b949e]">education.md</span>
          </div>
          <div className="p-8">
            <p className="text-[#c3e88d] mb-4 text-lg"># Education</p>
            <div className="mb-4">
              <p className="text-[#82aaff] font-semibold">MSc Data Science with Analytics</p>
              <p className="text-[#8b949e] text-sm">University of Hertfordshire</p>
            </div>
            <div>
              <p className="text-[#82aaff] font-semibold">BSc Software Engineering</p>
              <p className="text-[#8b949e] text-sm">Add university name</p>
            </div>
          </div>
        </div>

        <div className="terminal mb-10">
          <div className="terminal-bar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="ml-2 text-xs text-[#8b949e]">goals.md</span>
          </div>
          <div className="p-8">
            <p className="text-[#c3e88d] mb-3 text-lg"># Career Goals</p>
            <p className="text-[#c9d1d9] leading-relaxed">
              Add a short paragraph on where you want your career to go —
              e.g. working as a software engineer or data scientist, the kind
              of problems you want to work on, and what you want to learn next.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="terminal">
            <div className="terminal-bar">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="ml-2 text-xs text-[#8b949e]">languages.md</span>
            </div>
            <div className="p-6">
              <p className="text-[#c3e88d] mb-3"># Languages</p>
              <ul className="text-[#c9d1d9] text-sm space-y-1">
                <li>English</li>
                <li>Nepali</li>
                <li>Add more</li>
              </ul>
            </div>
          </div>

          <div className="terminal">
            <div className="terminal-bar">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="ml-2 text-xs text-[#8b949e]">hobbies.md</span>
            </div>
            <div className="p-6">
              <p className="text-[#c3e88d] mb-3"># Interests</p>
              <ul className="text-[#c9d1d9] text-sm space-y-1">
                <li>Add a hobby</li>
                <li>Add a hobby</li>
                <li>Add a hobby</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
