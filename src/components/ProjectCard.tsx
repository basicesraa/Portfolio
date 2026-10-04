import type { Project } from "../data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  const cardClass = project.featured ? "project-card project-card--featured" : "project-card";

  return (
    <article className={cardClass} aria-labelledby={`${project.id}-title`}>
      <div className="project-card__aside">
        <span className="project-card__number">{project.number}</span>
        {project.featured && <span className="featured-tag">FEATURED</span>}
        <p className="project-card__category">{project.category}</p>
      </div>
      <div className="project-card__main">
        <div className="project-card__title-row">
          <h3 id={`${project.id}-title`}>{project.title}</h3>
          {project.repoUrl ? (
            <a className="github-action" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              View on GitHub <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="github-action github-action--pending" aria-label="GitHub link coming soon; add the repository URL in the project data">
              GitHub link coming soon <span aria-hidden="true">↗</span>
            </span>
          )}
        </div>
        <dl className="case-study">
          <div><dt>Problem</dt><dd>{project.problem}</dd></div>
          <div><dt>What I built</dt><dd>{project.built}</dd></div>
          <div><dt>How it works</dt><dd>{project.howItWorks}</dd></div>
          <div>
            <dt>Main tools</dt>
            <dd>{project.tools.length ? project.tools.join(" · ") : "Add confirmed tools."}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
