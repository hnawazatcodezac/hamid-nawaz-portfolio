import React from "react";
import { portfolio } from "../data";
import PortfolioItem from "../components/portfolio-item";
import "../assets/css/portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h1 className="section-title">
        My <span>Portfolio</span>
      </h1>

      <div className="portfolio-container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
