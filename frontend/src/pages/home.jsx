import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../assets/css/home.css";

import Profile from "../assets/uploads/profile-pic.jpg";

const Home = () => {
  return (
    <section className="home section grid">
      <img
        loading="lazy"
        src={Profile}
        alt="profile image"
        className="home-img"
      />

      <div className="home-content">
        <div className="home-data">
          <h1 className="home-title">
            <span>I am Hamid Nawaz.</span> Web Designer
          </h1>

          <p className="home-description">
            A Full-Stack Developer with extensive expertise in HTML, CSS,
            JavaScript, React.js, Node.js, Express.js, and MongoDB. With a
            passion for crafting exceptional web experiences.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button-icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="home-background-color"></div>
    </section>
  );
};

export default Home;
