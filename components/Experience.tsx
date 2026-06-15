import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Reveal id="experience" className="section">
      <div className="wrap">
        <div className="section-head">
          <h2 className="display">Experience &amp; Education</h2>
          <span className="section-num">/ 04</span>
        </div>
        <div className="log">
          {experience.map((item, i) => (
            <div className="log-row" key={i}>
              <div className="yr">{item.year}</div>
              <div className="desc">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
              <div className="tag-pill">{item.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
