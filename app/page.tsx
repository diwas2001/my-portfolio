const siteMap = [
  { label: "Home", desc: "Learn more about me and my background." },
  { label: "About Me", desc: "My education, skills, and career goals." },
  { label: "Projects", desc: "A showcase of my academic and personal projects." },
  { label: "Resume (CV)", desc: "Download my latest CV." },
  { label: "Contact", desc: "Send me an email directly through the contact form." },
];

export default function Home() {
  return (
    <main className="min-h-screen px-4 pb-24">
      <section className="max-w-2xl mx-auto pt-8 text-center">
        <div className="fade-in-up avatar-circle">DS</div>

        <p className="fade-in-up delay-1 text-[#c3e88d] text-lg mt-8">Welcome to My Portfolio</p>

        <p className="fade-in-up delay-1 text-[#c792ea] text-sm mt-6 mb-3">
          const <span className="text-[#82aaff]">developer</span> = {"{"}
        </p>
        <h1 className="typing glow-text text-4xl sm:text-5xl font-bold text-[#f78c6c] mx-auto">
          Diwas_Suyal
        </h1>
        <p className="fade-in-up delay-2 mt-6 text-lg">
          <span className="text-[#c792ea]">title</span>
          <span className="text-[#89ddff]">:</span>{" "}
          <span className="text-[#c3e88d]">"Software Engineer | Data Scientist | AI Enthusiast"</span>
        </p>
        <p className="text-[#c792ea] text-sm mt-3">{"}"}</p>

        <p className="fade-in-up delay-3 text-[#c9d1d9] leading-relaxed mt-10 max-w-lg mx-auto">
          Hi, I'm Diwas Suyal. I recently completed my Bachelor's degree in
          Software Engineering and have also completed a Master's in Data
          Science with Analytics at the University of Hertfordshire. I am
          passionate about software development, data science, and using
          technology to solve real-world problems. I enjoy learning new
          technologies, building practical projects, and continuously
          improving my technical and problem-solving skills.
        </p>

        <div className="fade-in-up delay-3 flex justify-center gap-4 mt-10">
          <a
            href="/contact"
            className="inline-block bg-[#f78c6c] text-[#0a0e14] font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-block border border-[#82aaff] text-[#82aaff] px-8 py-3 rounded-md hover:bg-[#82aaff] hover:text-[#0a0e14] transition-colors"
          >
            Download CV
          </a>
        </div>
      </section>

      <div className="section-divider my-16"></div>

      <section className="fade-in-up max-w-2xl mx-auto">
        <div className="terminal">
          <div className="terminal-bar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="ml-2 text-xs text-[#8b949e]">sitemap.md</span>
          </div>
          <div className="p-8">
            <p className="text-[#c3e88d] mb-4 text-lg"># What You'll Find on This Website</p>
            <ul className="space-y-3">
              {siteMap.map((item) => (
                <li key={item.label} className="text-sm">
                  <span className="text-[#82aaff] font-semibold">{item.label}</span>
                  <span className="text-[#8b949e]"> — {item.desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#c9d1d9] text-sm leading-relaxed mt-6">
              Thank you for visiting my website. I look forward to connecting
              with you and exploring new opportunities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
