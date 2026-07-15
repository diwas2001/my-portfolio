export default function Resume() {
  return (
    <main className="min-h-screen px-4 pb-24">
      <section className="fade-in-up max-w-3xl mx-auto pt-8 text-center">
        <p className="text-[#c3e88d] text-lg mb-6"># Resume</p>
        <div className="terminal">
          <div className="terminal-bar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="ml-2 text-xs text-[#8b949e]">resume.pdf</span>
          </div>
          <iframe src="/resume.pdf" className="w-full h-[600px]" title="Resume" />
        </div>
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-8 border border-[#f78c6c] text-[#f78c6c] px-8 py-3 rounded-md hover:bg-[#f78c6c] hover:text-[#0a0e14] transition-colors"
        >
          $ download resume.pdf
        </a>
      </section>
    </main>
  );
}
