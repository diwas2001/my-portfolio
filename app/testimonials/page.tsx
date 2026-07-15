import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <main className="min-h-screen px-4 pb-24">
      <section className="max-w-3xl mx-auto pt-8">
        <p className="fade-in-up text-[#c3e88d] text-center text-lg mb-10"># Testimonials</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <div key={t.name + i} className={`fade-in-up delay-${(i % 3) + 1} terminal p-6`}>
              <p className="text-[#c9d1d9] leading-relaxed text-sm">"{t.quote}"</p>
              <p className="text-[#82aaff] font-semibold mt-4">{t.name}</p>
              <p className="text-[#8b949e] text-xs">{t.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
