"use client";

import { useEffect, useState } from "react";
import { profile, terminalLines } from "@/lib/data";

type HistoryLine = { prompt: string; output?: string };

export default function Hero() {
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const [typed, setTyped] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "output" | "pause" | "reset">("typing");

  useEffect(() => {
  const current = terminalLines[lineIndex];

  if (phase === "typing") {
    if (charIndex < current.prompt.length) {
      const t = setTimeout(() => {
        setTyped(current.prompt.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 45);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setPhase("output"), 200);
      return () => clearTimeout(t);
    }
  }

  if (phase === "output") {
    setHistory((h) => [...h, { prompt: current.prompt, output: current.output }]);
    setTyped("");
    const t = setTimeout(() => setPhase("pause"), 50);
    return () => clearTimeout(t);
  }

  if (phase === "pause") {
    const t = setTimeout(() => {
      if (lineIndex + 1 < terminalLines.length) {
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
        setPhase("typing");
      } else {
        setPhase("reset");
      }
    }, 900);
    return () => clearTimeout(t);
  }

  if (phase === "reset") {
    const t = setTimeout(() => {
      setHistory([]);
      setLineIndex(0);
      setCharIndex(0);
      setTyped("");
      setPhase("typing");
    }, 1200);
    return () => clearTimeout(t);
  }
}, [phase, charIndex, lineIndex]);

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">{profile.status}</div>
          <h1 className="display name">
            Ony
            <br />
            Juna
          </h1>
          <p
            className="role"
            dangerouslySetInnerHTML={{ __html: profile.role }}
          />
          <div className="hero-cta">
            <a href="#projects" className="btn primary">
              Lihat Projects
            </a>
            <a href="#contact" className="btn">
              Hubungi Saya
            </a>
          </div>
        </div>

        <div className="window">
          <div className="window-bar">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="window-title">./Claire — zsh</div>
          </div>
          <div className="window-body">
            {history.map((h, i) => (
              <div key={i}>
                <div className="line">
                  <span className="prompt">$ </span>
                  {h.prompt}
                </div>
                <div className="line">
                  <span className="prompt">&gt; </span>
                  {h.output}
                </div>
              </div>
            ))}
            {phase === "typing" && (
              <div className="line">
                <span className="prompt">$ </span>
                {typed}
                <span className="cursor"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
