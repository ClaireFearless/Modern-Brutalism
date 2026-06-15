import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <Reveal id="skills" className="section">
      <div className="wrap">
        <div className="section-head">
          <h2 className="display">Tech Stack</h2>
          <span className="section-num">/ 02</span>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.skills.map((skill) => (
                  <span className="tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
