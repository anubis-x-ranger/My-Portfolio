import React from "react";
import "./about.css";
import ME from "../../assets/PicsArt_10-16-07.00.08.jpg";
import { FaAward } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> more than 2+ year</small>
            </article>
            <article className="about__card">
              <AiFillProject className="about__icon" />
              <h5>Projects</h5>
              <small> 5+ Projects</small>
            </article>
          </div>
          <p>
            I am a driven and efficiency-loving aspiring full stack developer,
            primarily having skills in JavaScript. I am creative and flexible,
            and love to code and blog.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
