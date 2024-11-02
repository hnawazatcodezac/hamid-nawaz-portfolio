import React from "react";
import "../assets/css/not-found.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-message">Oops! Page Not Found</h2>
      <p className="not-found-description">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="not-found-home-link">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
