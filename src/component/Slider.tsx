import { useEffect, useState } from "react";

type Destination = {
  region: string;
  title: string;
  desc: string;
  image: string;
  link: string;
};

const destinations: Destination[] = [
  {
    region: "HTML, CSS, JavaScript, Typescript",
    title: "DATAVIZ",
    desc: "DataViz est une application interactive de visualisation de données permettant d’explorer des statistiques et graphiques de façon claire et moderne.",
    image:
      "./images/dataviz.png",
    link: "https://dataviz-navy.vercel.app",
  },
  {
    region: "HTML, CSS, JavaScript",
    title: "QUIZZY",
    desc: "Quizy est une application de quiz interactive et ludique permettant de tester ses connaissances à travers différentes questions dans une interface moderne et dynamique.",
    image:
      "./images/quizzy.png",
    link: "https://quizz-pi-plum.vercel.app",
  },
  {
    region: "HTML, CSS, JavaScript, TypeScript, React",
    title: "ADAOPTE",
    desc: "Adaopte est une application web dédiée à l’adoption d’animaux, permettant de découvrir différents profils d’animaux dans une interface moderne, intuitive et pensée pour faciliter les rencontres entre futurs adoptants et refuges.",
    image:
      "./images/ADAOPTE.png",
    link: "https://adaopte-tau.vercel.app",
  },
  
  {
    region: "HTML, CSS",
    title: "EXO FLEXBOX",
    desc: "Cette application est un exercice de développement front-end mettant en avant la création d’un affichage interactif et dynamique avec une interface moderne et responsive, conçu pour pratiquer la logique et l’intégration web.",
    image:
      "./images/Capture d’écran 2026-05-07 à 15.40.35.png",
    link: "https://exercice-1-produire-un-affichage-en.vercel.app",
  },
];

export default function TravelSlider() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"right" | "left">("right");

  const current = destinations[active];

  const nextSlide = () => {
    setDirection("right");
    setActive((prev) => (prev + 1) % destinations.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setActive((prev) =>
      prev === 0 ? destinations.length - 1 : prev - 1
    );
  };

  const visibleDestinations = Array.from({ length: 1
   }, (_, i) => {
    const index = (active + i) % destinations.length;

    return {
      ...destinations[index],
      realIndex: index,
      position: i,
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <section className="travel-slider">
      <div className="travel-hero">
        <span className="travel-hero__region">{current.region}</span>

        <h1 className="travel-hero__title">
          {current.title.split("\n").map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </h1>

        <p className="travel-hero__desc">{current.desc}</p>

       <a
  href={current.link}
  target="_blank"
  rel="noopener noreferrer"
  className="travel-hero__button"
>
  VOIR LE PROJET →
</a>
      </div>

      <div className={`travel-slider-strip travel-slider-strip--${direction}`}>
        {visibleDestinations.map((destination) => (
          <article
  key={`${destination.realIndex}-${active}`}
  className={`travel-slider-card ${
    destination.position === 0 ? "travel-slider-card--active" : ""
  }`}
  style={{
    animationDelay: `${destination.position * 0.09}s`,
  }}
  onClick={() => {
    setDirection(destination.realIndex > active ? "right" : "left");
    setActive(destination.realIndex);
  }}
>
  <img
  key={destination.image}
  src={destination.image}
  alt={destination.title}
  className="travel-slider-card__image"
/>

  <div className="travel-slider-card__overlay" />

  <div className="travel-slider-card__content">
   
  </div>
</article>
        ))}
      </div>

      <div className="travel-slider-controls">
        <button
          className="travel-slider-controls__button"
          onClick={prevSlide}

        >
          ←
        </button>

        <button
          className="travel-slider-controls__button"
          onClick={nextSlide}
        >
          →
        </button>
      </div>

      <div className="travel-slider-progress">
        <div
          className="travel-slider-progress__fill"
          style={{
            width: `${((active + 1) / destinations.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
}