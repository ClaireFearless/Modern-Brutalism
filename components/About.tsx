import Reveal from "./Reveal";
import { aboutParagraphs, stats } from "@/lib/data";

export default function About() {
  return (
    <Reveal id="about" className="section">
      <div className="wrap">
        <div className="section-head">
          <h2 className="display">About</h2>
          <span className="section-num">/ 01</span>
        </div>
        <div className="about-grid">
          <div className="about-text">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="stats">
            {stats.map((s, i) => (
              <div className="stat" key={i}>
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
