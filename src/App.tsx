import { portfolio } from "./data/portfolio";
import { ProjectCard } from "./components/ProjectCard";
import { ContactLink } from "./components/ContactLink";

function ArrowMark({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span
      className={diagonal ? "arrow-mark arrow-mark--diagonal" : "arrow-mark"}
      aria-hidden="true"
    >
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-name" href="#top" aria-label={`${portfolio.profile.name} — back to top`}>
        {portfolio.profile.shortName}
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#work"><span>01</span> Work</a>
        <a href="#about"><span>02</span> About</a>
        <a href="#contact"><span>03</span> Contact <ArrowMark diagonal /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__copy">
        <h1 id="hero-title" className="hero__name">{portfolio.profile.name}</h1>
        <p className="eyebrow"><span className="status-dot" /> {portfolio.profile.role}</p>
        <p className="hero__story">Building my way<br />into <em>GenAI.</em></p>
        <p className="hero__intro">{portfolio.profile.introduction}</p>
        <a className="text-link hero__link" href="#work">See what I’m building <ArrowMark /></a>
      </div>
      <aside className="portrait-stack" aria-label="Portrait and current areas of focus">
        <figure className="portrait-frame">
          <img
            className="portrait-image"
            src={portfolio.profile.photoSrc}
            alt={portfolio.profile.photoAlt}
            width="960"
            height="960"
            fetchPriority="high"
          />
        </figure>
        <div className="portrait-focus">
          <span className="portrait-focus__label">CURRENTLY EXPLORING</span>
          <ul className="portrait-focus__list">
            {portfolio.focus.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </aside>
      <div className="hero__index" aria-hidden="true"><span>PORTFOLIO</span><span>2026 — 2027</span></div>
    </section>
  );
}

function SectionLabel({ number, children }: { number: string; children: string }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>;
}

function Work() {
  return (
    <section className="work-section" id="work" aria-labelledby="work-heading">
      <div className="work-heading-row">
        <div>
          <SectionLabel number="01">SELECTED WORK</SectionLabel>
          <h2 className="section-heading" id="work-heading">Things I’ve <em>built.</em></h2>
        </div>
        <p className="work-heading-note">Scroll sideways to explore all projects <span aria-hidden="true">→</span></p>
      </div>
      <div
        className="project-list"
        role="list"
        aria-label="Project case studies. Use the left and right arrow keys to scroll."
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.currentTarget.scrollBy({ left: 340, behavior: "smooth" });
            event.preventDefault();
          } else if (event.key === "ArrowLeft") {
            event.currentTarget.scrollBy({ left: -340, behavior: "smooth" });
            event.preventDefault();
          }
        }}
      >
        {portfolio.projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <SectionLabel number="02">A LITTLE CONTEXT</SectionLabel>
      <div className="about-grid">
        <h2 id="about-heading">A student who<br />likes to <em>build.</em></h2>
        <div className="about-copy">
          <p>{portfolio.profile.about.intro}</p>
          <p className="about-copy__question">{portfolio.profile.about.question}</p>
          <p>{portfolio.profile.about.direction}</p>
          <p className="about-copy__graduation">I expect to graduate in {portfolio.profile.graduation}.</p>
        </div>
      </div>
    </section>
  );
}

function Interests() {
  return (
    <section className="interests-section" aria-labelledby="interests-heading">
      <h2 className="section-heading interests-heading" id="interests-heading">What I’m <em>interested in.</em></h2>
      <div className="interest-grid">
        {portfolio.interests.map((interest) => (
          <article className="interest-card" key={interest.title}>
            <h3>{interest.title}</h3>
            <p>{interest.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const whatsappHref = /^\d+$/.test(portfolio.contact.whatsappNumber)
    ? `https://wa.me/${portfolio.contact.whatsappNumber}`
    : null;

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="contact-section__heading">
        <SectionLabel number="03">GET IN TOUCH</SectionLabel>
        <h2 id="contact-heading">Have an idea<br />worth <em>building?</em></h2>
        <p>I’m open to conversations about AI projects, collaborations, freelance work, and the things I’m currently learning.</p>
      </div>
      <div className="contact-list">
        <ContactLink label="LinkedIn" detail="Connect professionally" href={portfolio.contact.linkedinUrl} icon="in" />
        <ContactLink label="GitHub" detail="See what I’m building" href={portfolio.contact.githubProfileUrl} icon="gh" />
        <ContactLink label="WhatsApp" detail="Let’s talk" href={whatsappHref} icon="wa" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>{portfolio.profile.name}</span>
      <span>Made while learning. © {new Date().getFullYear()}</span>
      <a href="#top">Back to top <ArrowMark diagonal /></a>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="page-shell">
        <SiteHeader />
        <main id="main">
          <Hero />
          <Work />
          <About />
          <Interests />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
