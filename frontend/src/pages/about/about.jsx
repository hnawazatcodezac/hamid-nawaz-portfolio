import React from "react";
import { FaDownload } from "react-icons/fa";
import Info from "../../components/info";
import Stats from "../../components/stats";
import CV from "../../assets/cv.pdf";
import "./about.css";
import Skills from "../../components/skills";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <div className="about-container grid">
          <div className="about-info">
            <h3 className="section-subtitle">Personal Info</h3>
            <ul className="info-list grid">
              <Info />
            </ul>

            <a href={CV} download="" className="button">
              Download CV{" "}
              <span className="button-icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>
      <div className="seprator"></div>
      <div className="skills">
        <h3 className="section-subtitle subtitle-center">My Skills</h3>
        <div className="skills-container grid">
          <Skills />
        </div>
      </div>
    </main>
  );
};

export default About;
