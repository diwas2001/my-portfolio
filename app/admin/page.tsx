"use client";

import { useState } from "react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "uploading" | "done" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) {
      setMessage("Choose an image first.");
      setStatus("error");
      return;
    }

    setStatus("uploading");
    const formData = new FormData();
    formData.append("password", password);
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("done");
        setMessage("Profile picture updated. Refresh the home page to see it.");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Upload failed — check your connection and try again.");
    }
  }

  return (
    <main className="min-h-screen px-4 pb-24">
      <section className="fade-in-up max-w-md mx-auto pt-8">
        <div className="terminal">
          <div className="terminal-bar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
            <span className="ml-2 text-xs text-[var(--text-muted)]">
              admin.js
            </span>
          </div>
          <div className="p-8">
            <p className="text-[var(--accent-green)] mb-6 text-lg">
              # Update Profile Picture
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="password"
                placeholder="Admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-[var(--terminal-bg)] border border-[var(--border)] rounded-md px-4 py-2 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent-blue)]"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                required
                className="text-sm text-[var(--text)]"
              />
              <button
                type="submit"
                disabled={status === "uploading"}
                className="border border-[var(--accent-orange)] text-[var(--accent-orange)] px-6 py-2 rounded-md hover:bg-[var(--accent-orange)] hover:text-[var(--bg)] transition-colors disabled:opacity-50"
              >
                {status === "uploading" ? "uploading..." : "$ upload photo"}
              </button>
              {status === "done" && (
                <p className="text-[var(--accent-green)] text-sm">
                  ✓ {message}
                </p>
              )}
              {status === "error" && (
                <p className="text-[#ff5f56] text-sm">✗ {message}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
