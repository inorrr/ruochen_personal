const focusItems = [
  {
    index: "01",
    title: "About",
    description:
      "A clear introduction, background, and the work or ideas that matter most right now.",
  },
  {
    index: "02",
    title: "Work",
    description:
      "Selected projects, writing, research, or experience presented in a direct and readable way.",
  },
  {
    index: "03",
    title: "Contact",
    description:
      "One simple path for collaboration, opportunities, or conversation.",
  },
];

export default function App() {
  return (
    <div className="site-shell">
      <header className="hero" id="top">
        <div className="content-width">
          <nav className="topbar">
            <span className="brand">Ruochen Feng</span>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#focus">Work</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-content">
            <p className="eyebrow">Personal Website</p>
            <h1>Ruochen Feng</h1>
            <p className="intro">
              A minimal personal website for sharing work, interests, and ways
              to connect.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Contact
              </a>
              <a className="button button-secondary" href="#focus">
                View work
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section about-section" id="about">
          <div className="content-width">
            <div className="section-heading">
              <p className="section-label">About</p>
              <h2>Simple, focused, and easy to update.</h2>
            </div>
            <div className="two-column">
              <p>
                This site is designed to present information clearly. It can be
                used for a short biography, selected work, current interests, or
                a professional profile.
              </p>
              <p>
                The structure stays minimal so the content can grow without the
                design getting in the way.
              </p>
            </div>
          </div>
        </section>

        <section className="section focus-section" id="focus">
          <div className="content-width">
            <div className="section-heading">
              <p className="section-label">Focus</p>
              <h2>Core sections for a personal site.</h2>
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
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="content-width">
            <div className="section-heading">
              <p className="section-label">Contact</p>
              <h2>hello@ruochenfeng.com</h2>
            </div>
            <p className="contact-copy">
              Replace this with your preferred email or links when you are
              ready.
            </p>
            <a className="contact-link" href="mailto:hello@ruochenfeng.com">
              Send email
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
