import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio.PNG";
import IMG2 from "../../assets/portfolio2.PNG";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="pharmeasy" />
          </div>
          <h3>Pharmeasy Clone</h3>
          <p className="details">
            A clone of pharmeasy, a online pharmacy website which focuses on
            frontend and allows user to have sign up, signin, order medicine and
            products functionality.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/anubis-x-ranger/CW-Pharmeasy"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://hopeful-cray-1a0e19.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="homedepot" />
          </div>
          <h3>HomeDepot Clone</h3>
          <p className="details">
            A clone of Homedepot, a online furniture website which focuses on
            frontend and allows user to have sign up, signin, order furniture,
            services and products functionality.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/anubis-x-ranger/HomeDepot"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://frosty-montalcini-baa9c0.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
