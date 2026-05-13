import portrait from "../images/IMG_0659.png";
import cvPdf from "../assets/cv-marine.pdf";
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

 <div className="barcode-mobile"></div>
        <h1 className="home-mobile-title">
        
          Marine <br/> <span>Agasse</span>
        </h1>

        <p className="home-mobile-text ">
Actuellement, je recherche une alternance à partir de septembre 2026 pour continuer à apprendre sur des projets concrets.
        </p>

        <p className="home-mobile-text-orange">Rythme : 4 jours en entreprise / 1 jour en formation (vendredi)</p>

        <a href="#contact-mobile" className="home-mobile-button">
          Me contacter
        </a>
        <a
  href={cvPdf}
  target="_blank"
  rel="noopener noreferrer"
  className="home-mobile-button"
>

  TELECHARGER MON CV
</a>
      </section>

      <section className="mobile-about">
        <p className="mobile-label">À propos</p>

        <h2>Qui suis -je ?</h2>

        <p>
                Je suis Marine Agasse, développeuse full-stack en formation.
        Issue du domaine du commerce, j’ai souhaité évoluer vers un environnement plus stimulant, où l’apprentissage et la progression occupent une place centrale.
J’ai découvert le développement web, un domaine dans lequel je me suis rapidement investie.
L’évolution constante de ce secteur correspond pleinement à mon envie de développer de nouvelles compétences.
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
          <span>Spring Boot</span>
          <span>Angular</span>
          <span>SQL</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Tailwind</span>
          <span>Figma</span>
           <span>Vite</span>
        </div>

      <p className="home-mobile-text-techno">Curieuse et motivée, je suis également prête à me former d’ici septembre aux technologies utilisées au sein de votre entreprise afin d’arriver avec de bonnes bases et de pouvoir m’intégrer rapidement à vos projets. </p>
      </section>

      <section id="contact-mobile" className="mobile-contact">
        <p className="mobile-label">Contact</p>

        <h2>Me contacter</h2>

        <a href="mailto:marine.agse@gmail.com">marine.agse@gmail.com</a>
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