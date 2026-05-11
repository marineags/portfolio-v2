import Navbar from "./Navbar";
import Slider from "./Slider";
import ContactSection from "./ContactSection";

import portrait from "../images/IMG_0659.png";
import img from "../images/8B153580-FED0-4269-9F06-CDBB6BD960EA-2.jpg";
import flecheOrange from "../images/flech-orange.png";
import flecheNoir from "../images/fleche-noir.png";
import html from "../images/icons8-html5-48.png";
import css from "../images/icons8-css-48.png";
import java from "../images/icons8-logo-java-coffee-cup-48.png";
import git from "../images/icons8-git-48.png";
import github from "../images/icons8-github-50.png";
import javascript from "../images/icons8-javascript-48.png";
import spring from "../images/icons8-logo-de-printemps-48.png";
import typescript from "../images/icons8-manuscrit-48.png";
import react from "../images/icons8-réagir-40.png";
import vite from "../images/icons8-vite-48.png";
import tailwind from "../images/icons8-tailwind-css-48.png";
import sql from "../images/icons8-sql-48.png";
import angular from "../images/icons8-angularjs-64.png";
import figma from "../images/icons8-figma-48.png";
import persona from "../images/persona.png";
import coeur from "../images/coeur.png";
import moi from "../images/moi.png";
import main from "../images/main.png";

function DesktopVersion() {
  return (
    <>
      <Navbar />

      <main>
       <section id="home" className="relative min-h-screen overflow-hidden">
          <div className="top-line"></div>
          <div className="barcode"></div>

          <section className="poster-content">
            <div className="big-shape">“</div>
            <div className="black-band"></div>

            <img className="person" src={portrait} alt="Portrait Marine" />

            <p className="text text-left">
              MOTIVÉE
            </p>

            

            <p className="text text-right">
           CURIEUSE
            </p>

            <p className="small-title3">
              RIGOUREUSE
            </p>

            <p className="small-title">DÉTERMINÉE</p>



         

            <h1 className="orange-title">Marine</h1>
            <h1 className="orange-title2">Agasse</h1>

            <h2 className="main-title">DÉVELOPPEUSE FULL-STACK</h2>
          </section>
        </section>

       <section id="about" className="about-section">
  <div className="about-grid">
    <div className="about-image">
      <img src={img} alt="Marine Agasse" />
    </div>

    <div className="about-content">
      

<button className="cv-button">
  TELECHARGER MON CV
</button>

  
      <p className="about-label">À PROPOS</p>
<img className="main" src={main} alt="Portrait Marine" />

      <h2 className="about-title">
        ET LÀ, <br />
        C’EST <span>MOI</span>.
      </h2>

      <p className="about-text">
        Je suis Marine Agasse, développeuse full-stack en formation.
        Issue du domaine du commerce, j’ai souhaité évoluer vers un environnement plus stimulant, où l’apprentissage et la progression occupent une place centrale.
J’ai découvert le développement web, un domaine dans lequel je me suis rapidement investie.
L’évolution constante de ce secteur correspond pleinement à mon envie de développer de nouvelles compétences.
      </p>

      <p className="about-text small">
        Actuellement, je recherche une alternance à partir de septembre 2026
        pour continuer à apprendre sur des projets concrets.
      </p>

      <p className="text about-quote">
              Enfaite...<br />
              c'est pas vraiment moi,<br />
              c'est une image generer par une IA à partir de mes photos, mais ça me ressemble pas mal quand même non ?
            </p>

    <img className="fleche-noir" src={flecheNoir} alt="Portrait Marine" />
    </div>
  </div>
</section>

        <section
          id="projects"
          className="projets-section"
        >
          <img className="fleche-orange" src={flecheOrange} alt="Portrait Marine" />
       <div className="robot-card">
  <video
    className="robot-video"
    autoPlay
    loop
    muted
    playsInline
  >
    <source
      src="https://chaingpt-web.s3.us-east-2.amazonaws.com/assets/video/Labs/LABS_robot_SAFARI_HEVC.mp4"
      type="video/mp4"
    />
    <source
      src="https://chaingpt-web.s3.us-east-2.amazonaws.com/assets/video/Labs/LABS_robot_CHROME_VP9.webm"
      type="video/webm"
    />
  </video>
  <p className="text-robot">
              MON COEQUIPIER
            </p>
            <p className="text robot-droite">
              Pour moi, ce n’est pas un remplacement de la réflexion<br/> humaine, mais un outil qui amplifie ma curiosité <br/>et ma manière de construire.
            </p>
            <p className="text robot-gauche">
           L’IA doit rester un outil d’aide et d’apprentissage, <br/>pas quelque chose sur lequel on repose entièrement.
            </p>
            <p className="text robot-centre">
             Mon rapport avec l’IA ???<br/>
Elle m’aide à apprendre plus vite, explorer de nouvelles idées <br/>et dépasser certaines limites techniques ou créatives.
            </p>
         <h1 className="orange-title3">CLAUDE</h1>




         <div className="card">
          <div className="card-content">
           <img  src={html} alt="Portrait Marine" />
            <p>html</p>
          </div>
           <div className="card-content">
           <img  src={css} alt="Portrait Marine" />
            <p>css</p>
          </div>
           <div className="card-content">
           <img  src={javascript} alt="Portrait Marine" />
            <p>javascript</p>
          </div>
           <div className="card-content">
           <img  src={typescript} alt="Portrait Marine" />
            <p>typescript</p>
          </div>
           <div className="card-content">
           <img  src={java} alt="Portrait Marine" />
            <p>java</p>
          </div>
          <div className="card-content">
           <img  src={angular} alt="Portrait Marine" />
            <p>angular</p>
          </div>
           <div className="card-content">
           <img  src={react} alt="Portrait Marine" />
            <p>react</p>
          </div>
           <div className="card-content">
           <img  src={vite} alt="Portrait Marine" />
            <p>vite</p>
          </div>
           <div className="card-content">
           <img  src={sql} alt="Portrait Marine" />
            <p>sql</p>
          </div>
           <div className="card-content">
           <img  src={tailwind} alt="Portrait Marine" />
            <p>tailwind</p>
          </div>
          <div className="card-content">
           <img  src={spring} alt="Portrait Marine" />
            <p>springboots</p>
          </div>
          <div className="card-content">
           <img  src={figma} alt="Portrait Marine" />
            <p>figma</p>
          </div>
          <div className="card-content">
           <img  src={git} alt="Portrait Marine" />
            <p>git</p>
          </div>
<div className="card-content">
           <img  src={github} alt="Portrait Marine" />
            <p>github</p>
          </div>
         </div>
<div >
<h1 className="title-langage-outils">OUTILS ET LANGAGES</h1>
</div>

<p className="text2">
           Ce que j’aime dans le développement,<br/> c’est que les langages et les outils évoluent <br/>sans cesse,il y a toujours quelque chose<br/> de nouveau à apprendre.
            </p>
<img className="persona" src={persona} alt="Portrait Marine" />
<img className="coeur" src={coeur} alt="Portrait Marine" />
<h1 className="title-langage-outils2">MES PROJETS</h1>
<img className="moi" src={moi} alt="Portrait Marine" />

<Slider/>

</div>



        </section>
        <section id="contact" className="contact-section">
        
      <h2 className="contact-title">Me contacter</h2>

      <div className="contact-container">
        <div className="contact-grid">
          <a
            href="https://www.linkedin.com/in/marine-agasse-346886292/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <img src="/icons/icons8-linkedin-50.png" alt="LinkedIn" />
            <p>marine-agasse-dev</p>
          </a>

          <a
            href="https://github.com/marineags"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <img src="/icons/icons8-github-50.png" alt="GitHub" />
            <p>marineags</p>
          </a>

          <a href="mailto:agsmarine23@gmail.com" className="contact-card">
            <img src="/icons/icons8-mail-48.png" alt="Email" />
            <p>agsmarine23@gmail.com</p>
          </a>

          <a href="tel:+33638829826" className="contact-card">
            <img src="/icons/icons8-telephone-50.png" alt="Téléphone" />
            <p>06 38 82 98 26</p>
          </a>
        </div>

        <div className="contact-form-wrapper">
          <ContactSection />
        </div>
      </div>

      <footer className="contact-footer">
        © {new Date().getFullYear()} Marine Agasse
      </footer>
    </section>

      
      </main>
    </>
  );
}

export default DesktopVersion;