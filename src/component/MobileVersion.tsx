import portrait from "../images/IMG_0659.png";

function MobileVersion() {
  return (
    <main className="mobile-page">
      <section className="home-mobile">
        <div className="home-mobile-topline"></div>

        <img
          className="home-mobile-image"
          src={portrait}
          alt="Marine Agasse"
        />

        <p className="home-mobile-role">Développeuse full-stack</p>

        <h1 className="home-mobile-title">
          Marine <span>Agasse</span>
        </h1>

        <p className="home-mobile-text">
          Je recherche une alternance à partir de septembre 2026 pour continuer
          à apprendre sur des projets concrets.
        </p>

        <a href="#contact-mobile" className="home-mobile-button">
          Me contacter
        </a>
      </section>

      <section className="mobile-about">
        <p className="mobile-label">À propos</p>

        <h2>Et là, c’est moi.</h2>

        <p>
          J’aime créer des interfaces utiles, propres et vivantes, en mélangeant
          logique, design et expérience utilisateur.
        </p>
      </section>

      <section className="mobile-skills">
        <p className="mobile-label">Langages & outils</p>

        <h2>J’aime apprendre de nouvelles technos.</h2>

        <div className="mobile-skill-grid">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Java</span>
          <span>SQL</span>
          <span>Git</span>
        </div>
      </section>

      <section id="contact-mobile" className="mobile-contact">
        <p className="mobile-label">Contact</p>

        <h2>Me contacter</h2>

        <a href="mailto:agsmarine23@gmail.com">agsmarine23@gmail.com</a>
        <a href="https://github.com/marineags" target="_blank">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/marine-agasse-346886292/"
          target="_blank"
        >
          LinkedIn
        </a>
      </section>
    </main>
  );
}

export default MobileVersion;