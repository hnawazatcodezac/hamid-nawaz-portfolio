import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

import Profile from "../../assets/home.jpg";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="profile image" className="home-img" />

      <div className="home-content">
        <div className="home-data">
          <h1 className="home-title">
            <span>I am Hamid Nawaz.</span> Web Designer
          </h1>

          <p className="home-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            incidunt suscipit earum voluptates vel facere sunt laudantium error
            soluta nemo?
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button-icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color-block"></div>
    </section>
  );
};

export default Home;
