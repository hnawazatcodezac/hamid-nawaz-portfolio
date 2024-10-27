import React, { useState } from "react";
import Close from "../assets/uploads/close.svg";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio-item">
      <img src={img} alt="portfolio img" className="portfolio-img" />
      <div className="portfolio-hover" onClick={toggleModal}>
        <h3 className="portfolio-title">{title}</h3>
      </div>
      {modal && (
        <div className="portfolio-modal">
          <div className="portfolio-modal-content">
            <img
              src={Close}
              alt="close button"
              className="modal-close"
              onClick={toggleModal}
            />

            <h3 className="modal-title">{title}</h3>
            <ul className="modal-list grid">
              {details.map(({ icon, title, desc, link }, index) => {
                const isURL = /^https?:\/\//.test(link);
                return (
                  <li className="modal-item" key={index}>
                    <span className="item-icon">{icon}</span>

                    <div>
                      <span className="item-title">{title}</span>
                      {isURL ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="item-description"
                        >
                          {desc}
                        </a>
                      ) : (
                        <span className="item-description">{desc}</span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>

            <img src={img} alt="portfolio img" className="modal-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
