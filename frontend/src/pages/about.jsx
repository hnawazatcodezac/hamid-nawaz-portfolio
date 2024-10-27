import React from "react";
import { FaDownload } from "react-icons/fa";
import Info from "../components/info";
import Skills from "../components/skills";
import { resume } from "../data";
import "../assets/css/about.css";

import CV from "../assets/uploads/cv.pdf";
import ResumeItem from "../components/resume-item";

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
              Download Cv
              <span className="button-icon">
                <FaDownload />
              </span>
            </a>
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

      <div className="seprator"></div>

      <section className="resume">
        <h3 className="section-subtitle subtitle-center">Education</h3>
        <div className="resume-container grid">
          {resume.map((val) => {
            if (val.category === "education") {
              return <ResumeItem key={val.id} {...val} />;
            }
          })}
        </div>
      </section>

      <div className="seprator"></div>

      <section className="resume">
        <h3 className="section-subtitle subtitle-center">Experience</h3>
        <div className="resume-container grid">
          {resume.map((val) => {
            if (val.category === "experience") {
              return <ResumeItem key={val.id} {...val} />;
            }
          })}
        </div>
      </section>
    </main>
  );
};

export default About;
