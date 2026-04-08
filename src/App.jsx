const focusItems = [
  {
    index: "01",
    title: "Projects",
    description:
      "Selected builds, thoughtful experiments, and work that translates curiosity into something tangible.",
  },
  {
    index: "02",
    title: "Interests",
    description:
      "Design, research, technology, and the small questions that often lead to the most interesting paths.",
  },
  {
    index: "03",
    title: "Contact",
    description:
      "A simple invitation for conversations, collaborations, and opportunities worth building with care.",
  },
];

export default function App() {
  return (
    <div className="site-shell">
      <header className="hero-panel">
        <nav className="topbar">
          <span className="brand">Ruochen Feng</span>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#focus">Focus</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Personal Website</p>
            <p className="hero-kicker">Curiosity, craft, and clear thinking.</p>
            <h1>
              RUOCHEN
              <span>FENG</span>
            </h1>
            <p className="intro">
              A personal website shaped around thoughtful work, evolving ideas,
              and the people who might want to build something meaningful
              together.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Start a conversation
              </a>
              <a className="button button-secondary" href="#focus">
                View focus areas
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="orb orb-large"></div>
            <div className="orb orb-small"></div>
            <div className="stamp stamp-top">Open to new ideas</div>
            <div className="stamp stamp-bottom">New York / Worldwide</div>
            <div className="hero-note">
              Building steadily, learning openly, and leaving space for better
              questions.
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="ticker" aria-label="site-intro">
          <div className="ticker-track">
            <span>Personal website</span>
            <span>Portfolio-ready</span>
            <span>Design-forward</span>
            <span>Built in React</span>
            <span>Personal website</span>
            <span>Portfolio-ready</span>
            <span>Design-forward</span>
            <span>Built in React</span>
          </div>
        </section>

        <section className="editorial-grid" id="about">
          <article className="about-block">
            <p className="section-label">About</p>
            <h2>
              A more expressive home on the web, with enough structure to grow.
            </h2>
          </article>

          <article className="about-copy">
            <p>
              This layout is intentionally flexible. It can hold a short bio,
              selected work, current interests, writing, research, or whatever
              best reflects the next version of your story.
            </p>
            <p>
              The visual direction leans editorial and slightly playful, so the
              site feels distinct right away without becoming difficult to
              update.
            </p>
          </article>
        </section>

        <section className="focus-section" id="focus">
          <div className="section-heading">
            <p className="section-label">Focus</p>
            <h2>Three simple entry points for what matters most.</h2>
          </div>

          <div className="focus-grid">
            {focusItems.map((item) => (
              <article className="focus-item" key={item.title}>
                <p className="focus-index">{item.index}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-band" id="contact">
          <div className="contact-copy-wrap">
            <p className="section-label">Contact</p>
            <h2>Let&apos;s make this personal site feel lived in.</h2>
            <p className="contact-copy">
              Replace the placeholder contact details with your preferred email,
              social links, and project highlights, then the site is ready for a
              real launch.
            </p>
          </div>
          <a className="contact-link" href="mailto:hello@ruochenfeng.com">
            hello@ruochenfeng.com
          </a>
        </section>
      </main>
    </div>
  );
}
