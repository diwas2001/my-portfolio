"use client";

import { useEffect } from "react";

export default function BookCall() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="book-call" style={{ padding: "60px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Book a Call With Me
      </h2>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/suyaldiwas11/30min"
        style={{ minWidth: "320px", height: "700px" }}
      />
    </section>
  );
}
