"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}=+*^?#";
const FINAL = "Diwas_Suyal";

export default function ScrambleName() {
  const [text, setText] = useState(FINAL);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function scramble() {
    if (timerRef.current) clearInterval(timerRef.current);
    let frame = 0;
    const total = 42;

    timerRef.current = setInterval(() => {
      let out = "";
      for (let i = 0; i < FINAL.length; i++) {
        if ((frame / total) * FINAL.length > i) {
          out += FINAL[i];
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setText(out);
      frame++;

      if (frame > total) {
        if (timerRef.current) clearInterval(timerRef.current);
        setText(FINAL);
      }
    }, 45);
  }

  useEffect(() => {
    scramble();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <h1
      onMouseEnter={scramble}
      className="glow-text text-4xl sm:text-5xl font-bold text-[var(--accent-orange)] mx-auto cursor-default inline-block"
    >
      {text}
    </h1>
  );
}
