export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">Marine</div>

        <nav className="nav-links">
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}