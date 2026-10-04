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
        {portfolio.profile.name}
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
        <p className="eyebrow"><span className="status-dot" /> AI ENGINEERING STUDENT</p>
        <h1 id="hero-title">Building my way<br />into <em>GenAI.</em></h1>
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
          <figcaption className="portrait-meta">
            <span>{portfolio.profile.name} / {portfolio.profile.role}</span>
            <span>{portfolio.profile.graduation}</span>
          </figcaption>
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

function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <SectionLabel number="02">A LITTLE CONTEXT</SectionLabel>
      <div className="about-grid">
        <h2 id="about-heading">A student who<br />likes to <em>build.</em></h2>
        <div className="about-copy">
          <p>{portfolio.profile.direction}</p>
          <p>I’m studying AI Engineering at {portfolio.profile.university}. I expect to graduate in {portfolio.profile.graduation}.</p>
          <div className="study-note">
            <span className="study-note__rule" aria-hidden="true" />
            <span>Currently learning, building, and figuring out what works.</span>
          </div>
        </div>
      </div>
      <div className="focus-chips" aria-label="Areas I am exploring">
        <span className="focus-chips__label">CURRENT DIRECTION</span>
        {portfolio.focus.map((item) => <span className="focus-chip" key={item}>{item}</span>)}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="work-section" id="work" aria-labelledby="work-heading">
      <div className="work-heading-row">
        <div>
          <SectionLabel number="01">SELECTED WORK</SectionLabel>
          <h2 className="section-heading" id="work-heading">Things I’ve <em>made.</em></h2>
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

function Contact() {
  const whatsappHref = /^\d+$/.test(portfolio.contact.whatsappNumber)
    ? `https://wa.me/${portfolio.contact.whatsappNumber}`
    : null;

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="contact-section__heading">
        <SectionLabel number="03">GET IN TOUCH</SectionLabel>
        <h2 id="contact-heading">Have a good<br /><em>question?</em></h2>
        <p>I'm open to thoughtful conversations about AI projects and what I’m learning.</p>
      </div>
      <div className="contact-list">
        <ContactLink label="LinkedIn" detail="Connect professionally" href={portfolio.contact.linkedinUrl} icon="in" />
        <ContactLink label="WhatsApp" detail="Message me" href={whatsappHref} icon="wa" />
        <ContactLink label="GitHub" detail="See more code" href={portfolio.contact.githubProfileUrl} icon="gh" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>{portfolio.profile.name} · {portfolio.profile.role}</span>
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
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
