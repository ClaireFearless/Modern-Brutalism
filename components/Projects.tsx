import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <Reveal id="projects" className="section">
      <div className="wrap">
        <div className="section-head">
          <h2 className="display">Projects</h2>
          <span className="section-num">/ 03</span>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <div className="project" key={project.number}>
              <div className="project-visual">
                <div className="pnum">{project.number}</div>
              </div>
              <div className="project-body">
                <div className="window-bar">
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="window-title">{project.fileName}</div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoUrl}>Live Demo →</a>
                  <a href={project.codeUrl}>Source Code →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
