import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  const frontendExperience = [
    { id: 0, name: "React", expertise: "Experienced" },
    { id: 1, name: "Typescript", expertise: "Experienced" },
    { id: 2, name: "Material UI", expertise: "Experienced" },
    { id: 3, name: "Bootstrap", expertise: "Experienced" },
    { id: 4, name: "i18n", expertise: "Beginner" },
    { id: 5, name: "Nextjs", expertise: "Beginner" },
  ];

  const backendExperience = [
    { id: 0, name: "NodeJs", expertise: "Intermediate" },
    { id: 1, name: "PHP", expertise: "Intermediate" },
    { id: 2, name: "MongoDB", expertise: "Intermediate" },
    { id: 3, name: "SQL Server", expertise: "Intermediate" },
    { id: 4, name: "Python", expertise: "Beginner" },
    { id: 5, name: "Azure devops", expertise: "Beginner" },
  ];

  return (
    <section id="experience">
      {/* /*Experience */}
      <h5>What Skills I have</h5>
      <h2>Tech Stack</h2>
      <div className="experience__container container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendExperience.map((item) => (
              <article className="experience__details" key={item.id}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{item.name}</h4>
                  <small className="text-light">{item.expertise}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendExperience.map((item) => (
              <article className="experience__details" key={item.id}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{item.name}</h4>
                  <small className="text-light">{item.expertise}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
