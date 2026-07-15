import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <main className="min-h-screen px-4 pb-24">
      <section className="max-w-2xl mx-auto pt-8">
        <p className="fade-in-up text-[#c3e88d] text-center text-lg mb-10"># Certificates</p>
        <div className="space-y-4">
          {certificates.map((cert, i) => (
            <div key={cert.title + i} className={`fade-in-up delay-${(i % 3) + 1} terminal p-6 flex justify-between items-center`}>
              <div>
                <p className="text-[#82aaff] font-semibold">{cert.title}</p>
                <p className="text-[#8b949e] text-sm">{cert.issuer} · {cert.date}</p>
              </div>
              {cert.link && (
                <a href={cert.link} target="_blank" className="text-sm text-[#89ddff] hover:underline">
                  view →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
