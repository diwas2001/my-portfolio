"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen px-4 pb-24">
      <section className="fade-in-up max-w-xl mx-auto pt-8">
        <div className="terminal">
          <div className="terminal-bar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="ml-2 text-xs text-[#8b949e]">contact.js</span>
          </div>
          <div className="p-8">
            <p className="text-[#c3e88d] mb-6 text-lg"># Contact Me</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="bg-[#0d1117] border border-[#21262d] rounded-md px-4 py-2 text-sm text-[#c9d1d9] focus:outline-none focus:border-[#82aaff]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="bg-[#0d1117] border border-[#21262d] rounded-md px-4 py-2 text-sm text-[#c9d1d9] focus:outline-none focus:border-[#82aaff]"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="bg-[#0d1117] border border-[#21262d] rounded-md px-4 py-2 text-sm text-[#c9d1d9] focus:outline-none focus:border-[#82aaff]"
              />
              <textarea
                name="message"
                placeholder="Your message"
                required
                rows={5}
                className="bg-[#0d1117] border border-[#21262d] rounded-md px-4 py-2 text-sm text-[#c9d1d9] focus:outline-none focus:border-[#82aaff]"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="border border-[#f78c6c] text-[#f78c6c] px-6 py-2 rounded-md hover:bg-[#f78c6c] hover:text-[#0a0e14] transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "sending..." : "$ send message"}
              </button>
              {status === "sent" && (
                <p className="text-[#c3e88d] text-sm">
                  ✓ Message sent — thanks for reaching out, I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-[#ff5f56] text-sm">✗ Something went wrong — please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
